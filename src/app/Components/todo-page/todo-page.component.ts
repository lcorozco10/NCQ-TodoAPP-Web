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
import { Observable, finalize, map } from 'rxjs';
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
  collboarators: Observable<CollboratorModel[]> | undefined;
  collboarators2: CollboratorModel[] | undefined;
  isLoading$: boolean = false;
  taskLoaded: boolean = false;

  constructor(
    private tasksService: TasksService,
    private collaboratorsService: CollaboratorsService,
    public spinnerService: SpinnerService,
    private modalService: ModalService,
  ) {
  }


  ngOnInit(): void {
    // Get all tasks
    this.tasks = this.tasksService.getAllTask()
      .pipe(map(data => data.data),
        finalize(() => this.taskLoaded = true));

    // Get all collaborators
    this.collboarators = this.collaboratorsService.getAll()
      .pipe(map(data => data.data));
    this.collaboratorsService.getAll().subscribe(data => this.collboarators2 = data.data)

    this.spinnerService.loading$.subscribe(x => this.isLoading$ = x);
  }

  onFilter(data: TaskFilter) {
    const modal = new Modal(document.getElementById('crud-modal'));
    modal.hide();
    this.tasks = this.tasksService.getAllTask(data)
      .pipe(map(data => data.data));
  }

  onSave(task: CreateUpdateTask) {
    console.log(task);
    //this.tasksService.create(task).subscribe(data => console.log(data));
    const modal = new Modal(document.getElementById('createUserModal'));
    modal.hide();
  }

  onEdit(task: CreateUpdateTask) {
    console.log(task);
    //this.tasksService.edit("63c54f7e-eef4-47d0-ff33-08dbe62ece5c", task)
    //.subscribe(data => console.log(data));
    const modal = new Modal(document.getElementById('editUserModal'));
    modal.hide();
  }

  onDelete(id: string) {
    console.log(id);
    // this.tasksService.delete(id).subscribe(data => console.log(data));
  }
}
