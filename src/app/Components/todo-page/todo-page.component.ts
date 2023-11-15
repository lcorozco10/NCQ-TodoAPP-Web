import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTableComponent } from "../todo-table/todo-table.component";
import { TodoEditDialogComponent } from "../todo-edit-dialog/todo-edit-dialog.component";
import { TodoCreateDialogComponent } from "../todo-create-dialog/todo-create-dialog.component";
import { ToolsComponent } from "../tools/tools.component";
import { BaseService } from '../../Services/basse.service';
import { ResponseApi } from '../../Models/ResponseModel';
import { Task } from '../../Models/TaskModel';
import { ModalComponent } from '../modal/modal.component';
import { SpinnerService } from '../../utils/spinner-service ';
import { ModalService } from '../../utils/modal-service/modal-service';

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
    private taskService: BaseService,
    public dynamicComponent: ViewContainerRef,
    public spinnerService: SpinnerService,
    private modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.taskService.httpGet<Task[]>('Tasks').subscribe(data => this.tasks = data.data);
  }

  onCreateModal(): void {
    const modalRef = this.modalService.open(ModalComponent, { title: 'My dynamic title', message: 'My dynamic message' });
    modalRef.onResult().subscribe(
      closed => console.log('closed', closed),
      dismissed => console.log('dismissed', dismissed),
      () => console.log('completed')
    );
  }
}
