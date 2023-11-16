import { AfterContentInit, Component, OnInit } from '@angular/core';
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
import { BehaviorSubject, Observable } from 'rxjs';
import { Modal } from 'flowbite';

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
    ModalComponent]
})
export class TodoPageComponent implements OnInit {

  tasks: Observable<Task[]> | undefined;
  tasks2: Task[] | undefined;
  collboarators2: CollboratorModel[] | undefined;
  isLoading$: boolean = false;
  taskLoaded: boolean = false;
  taskSelected: Task | undefined;
  taskSelected$: BehaviorSubject<Task | undefined | null> = new BehaviorSubject<Task | undefined | null>(null);

  constructor(
    private tasksService: TasksService,
    private collaboratorsService: CollaboratorsService,
    public spinnerService: SpinnerService,
    private modalService: ModalService,
  ) {
  }


  ngOnInit(): void {
    // Get all tasks    
    this.tasksService.getAllTask().subscribe(data => this.tasks2 = data.data)

    // Get all collaborators   
    this.collaboratorsService.getAll().subscribe(data => this.collboarators2 = data.data)
    this.spinnerService.loading$.subscribe(x => this.isLoading$ = x);

  }

  onFilter(data: TaskFilter) {
    const modal = new Modal(document.getElementById('crud-modal'));
    modal.hide();
    this.tasksService.getAllTask(data).subscribe(data => this.tasks2 = data.data)
  }

  onSave(task: CreateUpdateTask) {
    console.log(task);
    //this.tasksService.create(task).subscribe(data => console.log(data));
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
      .subscribe(data => {
        this.tasksService.getAllTask().subscribe(data => this.tasks2 = data.data)
      });
    const modal = new Modal(document.getElementById('editUserModal'));
    modal.hide();
  }

  onDelete(id: string) {
    console.log(id);
    // this.tasksService.delete(id).subscribe(data => console.log(data));
  }
}
