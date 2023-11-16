import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CollboratorModel } from '../../Models/Collaborator.model';
import { CreateUpdateTask } from '../../Models/TaskModel';
import { Modal } from 'flowbite';

@Component({
  selector: 'app-todo-edit-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-edit-dialog.component.html',
  styleUrl: './todo-edit-dialog.component.scss'
})
export class TodoEditDialogComponent {

  @Input() collboarators: CollboratorModel[] | undefined;
  @Output() editEvent = new EventEmitter<CreateUpdateTask>();

  onEdit(e: any) {
    e.preventDefault();
    this.editEvent.emit({
      description: "a test 02",
      status: 1,
      pripriorityCode: 0,
      startDate: new Date(2018, 4, 8, 10, 13, 41, 12),
      endDate: new Date(2018, 4, 8, 10, 13, 41, 12),
      collaboratorId: "f6c25425-c52e-4022-a82f-0241537767aa",
    });
  }

  OnCloseEditModal() {
    const modal = new Modal(document.getElementById('editUserModal'));
    modal.hide();
  }
}
