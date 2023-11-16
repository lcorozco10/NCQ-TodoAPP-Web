import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CollboratorModel } from '../../Models/Collaborator.model';
import { CreateUpdateTask } from '../../Models/TaskModel';
import { Modal } from 'flowbite';

@Component({
  selector: 'app-todo-create-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-create-dialog.component.html',
  styleUrl: './todo-create-dialog.component.scss'
})
export class TodoCreateDialogComponent {

  @Input() collboarators: CollboratorModel[] | undefined;
  @Output() saveEvent = new EventEmitter<CreateUpdateTask>();

  onSave(e: any) {
    e.preventDefault();
    this.saveEvent.emit({
      description: "a test",
      status: 1,
      pripriorityCode: 0,
      startDate: "",
      endDate: "",
      collaboratorId: "f6c25425-c52e-4022-a82f-0241537767aa",
    });
  }

  OnCloseModal() {
    const modal = new Modal(document.getElementById('createUserModal'));
    modal.hide();
  }
}
