import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTableComponent } from "../todo-table/todo-table.component";
import { TodoEditDialogComponent } from "../todo-edit-dialog/todo-edit-dialog.component";
import { TodoCreateDialogComponent } from "../todo-create-dialog/todo-create-dialog.component";
import { ToolsComponent } from "../tools/tools.component";
import { Task } from '../../Models/TaskModel';
import { ModalComponent } from '../modal/modal.component';
import { SpinnerService } from '../../utils/spinner-service ';
import { ModalService } from '../../utils/modal-service/modal-service';
import { TasksService } from '../../Services/tasks.service';

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

  tasks: Task[] | undefined;
  isLoading$ = this.spinnerService.loading$;

  constructor(
    private tasksService: TasksService,
    public spinnerService: SpinnerService,
    private modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.tasksService.getAllTask().subscribe(data => this.tasks = data.data);
    /*this.tasksService.create(
      {
        description: "a test",
        status: 1,
        pripriorityCode: 0,
        startDate: new Date(2018, 4, 8, 10, 13, 41, 12),
        endDate: new Date(2018, 4, 8, 10, 13, 41, 12),
        collaboratorId: "f6c25425-c52e-4022-a82f-0241537767aa",
      }).subscribe(data => console.log(data));*/

    /*this.tasksService.edit("63c54f7e-eef4-47d0-ff33-08dbe62ece5c",
      {
        description: "a test 02",
        status: 1,
        pripriorityCode: 0,
        startDate: new Date(2018, 4, 8, 10, 13, 41, 12),
        endDate: new Date(2018, 4, 8, 10, 13, 41, 12),
        collaboratorId: "f6c25425-c52e-4022-a82f-0241537767aa",
      }).subscribe(data => console.log(data));*/

    // this.tasksService.delete("63c54f7e-eef4-47d0-ff33-08dbe62ece5c").subscribe(data => console.log(data));
    //this.collaboratorsService.getAll().subscribe(data => console.log(data));

  }

  /*onCreateModal(): void {
    //this.tasksService.getAllTask({ status: 1 }).subscribe(data => this.tasks = data.data);
    const modalRef = this.modalService.open(ModalComponent, { title: 'My dynamic title', message: 'My dynamic message' });
    modalRef.onResult().subscribe(
      closed => console.log('closed', closed),
      dismissed => console.log('dismissed', dismissed),
      () => console.log('completed')
    );
  }*/
}
