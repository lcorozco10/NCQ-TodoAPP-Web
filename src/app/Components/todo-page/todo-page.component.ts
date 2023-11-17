import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTableComponent } from "../todo-table/todo-table.component";
import { TodoEditDialogComponent } from "../todo-edit-dialog/todo-edit-dialog.component";
import { TodoCreateDialogComponent } from "../todo-create-dialog/todo-create-dialog.component";
import { ToolsComponent } from "../tools/tools.component";
import { CreateUpdateTask, Task, TaskFilter } from '../../Models/TaskModel';
import { ModalComponent } from '../modal/modal.component';
import { SpinnerService } from '../../utils/spinner-service ';
import { ModalService } from '../../utils/modal-service/modal-service';
import { TasksService } from '../../Services/tasks.service';
import { CollaboratorsService } from '../../Services/collaborators.service';
import { CollboratorModel } from '../../Models/Collaborator.model';
import { BehaviorSubject } from 'rxjs';
import { Modal } from 'flowbite';
import { DeleteModalComponent } from "../delete-modal/delete-modal.component";

@Component({
  selector: 'app-todo-page',
  standalone: true,
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
  imports: [
    CommonModule,
    TodoTableComponent,
    TodoEditDialogComponent,
    TodoCreateDialogComponent,
    ToolsComponent,
    ModalComponent,
    DeleteModalComponent
  ]
})
export class TodoPageComponent implements OnInit {

  tasks: Task[] | undefined;
  collboarators: CollboratorModel[] | undefined;
  isLoading$: boolean = false;
  taskSelected: Task | undefined;

  constructor(
    private tasksService: TasksService,
    private collaboratorsService: CollaboratorsService,
    public spinnerService: SpinnerService,
    private modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    // Get all tasks    
    this.tasksService.getAllTask().subscribe(data => this.tasks = data.data)

    // Get all collaborators   
    this.collaboratorsService.getAll().subscribe(data => this.collboarators = data.data)
    this.spinnerService.loading$.subscribe(load => this.isLoading$ = load);
  }

  onFilter(data: TaskFilter) {
    const modal = new Modal(document.getElementById('crud-modal'));
    modal.hide();
    this.tasksService.getAllTask(data).subscribe(data => this.tasks = data.data)
  }

  onSave(task: CreateUpdateTask) {
    this.tasksService.create(task).subscribe(data =>
      this.tasksService.getAllTask().subscribe(data => this.tasks = data.data));
    const modal = new Modal(document.getElementById('createUserModal'));
    modal.hide();
  }

  onEditClickEvent(task: Task) {
    this.taskSelected = task;
    const modal = new Modal(document.getElementById('editUserModal'), { backdrop: 'static' });
    modal.show();
  }

  onEdit(task: Task) {
    this.tasksService.edit(task.id, {
      collaboratorId: task.collaboratorId,
      description: task.description,
      status: parseInt(task.status.toString()),
      notes: task.notes,
      pripriorityCode: parseInt(task.pripriorityCode.toString()),
      endDate: new Date(task.endDate).toJSON(),
      startDate: new Date(task.startDate).toJSON(),
    } as CreateUpdateTask)
      .subscribe(_ => {
        this.tasksService.getAllTask().subscribe(data => this.tasks = data.data)
      });
    const modal = new Modal(document.getElementById('editUserModal'));
    modal.hide();
  }

  onDeleteValue(task: Task) {
    this.taskSelected = task;
    const modal = new Modal(document.getElementById('delete-modal'), { backdrop: 'static' });
    modal.show();

  }

  onDeleteOption(option: boolean) {
    const modal = new Modal(document.getElementById('delete-modal'));
    modal.hide();
    if (option && this.taskSelected?.id) {
      this.tasksService.delete(this.taskSelected?.id)
        .subscribe(_ => this.tasksService.getAllTask().subscribe(data => this.tasks = data.data));
    }
  }
}
