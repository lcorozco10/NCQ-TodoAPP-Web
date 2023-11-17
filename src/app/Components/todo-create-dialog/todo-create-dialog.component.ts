import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollboratorModel } from '../../Models/Collaborator.model';
import { CreateUpdateTask } from '../../Models/TaskModel';
import { Modal } from 'flowbite';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

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
    description: new FormControl('', Validators.required),
    collaboratorId: new FormControl('', Validators.required),
    status: new FormControl('0', Validators.required),
    pripriorityCode: new FormControl('', Validators.required),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    notes: new FormControl(''),
  });

  onSave(e: any, startDate: string, endDate: string) {
    e.preventDefault();
    if (this.createTaskForm.valid && startDate && startDate) {
      var task = {
        description: this.createTaskForm.value.description,
        collaboratorId: this.createTaskForm.value.collaboratorId,
        status: this.createTaskForm.value.status ? parseInt(this.createTaskForm.value.status) : 0,
        pripriorityCode: this.createTaskForm.value.status ? parseInt(this.createTaskForm.value.status) : 0,
        startDate: new Date(startDate).toJSON(),
        endDate: new Date(endDate).toJSON(),
        notes: this.createTaskForm.value.notes
      } as CreateUpdateTask;
      this.saveEvent.emit(task);
    }
    else {
      this.createTaskForm.markAllAsTouched();
    }
  }

  OnCloseModal() {
    const modal = new Modal(document.getElementById('createUserModal'));
    modal.hide();
  }
}
