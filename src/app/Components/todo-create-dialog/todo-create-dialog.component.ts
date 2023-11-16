import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollboratorModel } from '../../Models/Collaborator.model';
import { CreateUpdateTask } from '../../Models/TaskModel';
import { Modal } from 'flowbite';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-create-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-create-dialog.component.html',
  styleUrl: './todo-create-dialog.component.scss'
})
export class TodoCreateDialogComponent {

  @Input() collboarators: CollboratorModel[] | undefined;
  @Output() saveEvent = new EventEmitter<CreateUpdateTask>();

  createTaskForm = new FormGroup({
    id: new FormControl(''),
    description: new FormControl(''),
    collaboratorId: new FormControl(''),
    status: new FormControl(0),
    pripriorityCode: new FormControl(0),
    startDate: new FormControl(),
    endDate: new FormControl(),
  });

  onSave(e: any, startDate: string, endDate: string) {
    e.preventDefault();
    var task = this.createTaskForm.value as CreateUpdateTask;
    task.startDate = new Date(startDate).toJSON();
    task.endDate = new Date(endDate).toJSON();
    task.status = parseInt(task.status.toString());
    task.pripriorityCode = parseInt(task.pripriorityCode.toString());
    this.saveEvent.emit(task);
  }

  OnCloseModal() {
    const modal = new Modal(document.getElementById('createUserModal'));
    modal.hide();
  }
}
