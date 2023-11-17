import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollboratorModel } from '../../Models/Collaborator.model';
import { TaskFilter } from '../../Models/TaskModel';
import { Modal } from 'flowbite';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {

  @Input() collboarators: CollboratorModel[] | undefined;
  @Output() filterEvent = new EventEmitter<TaskFilter>();

  collaboratorId = new FormControl();
  stateId = new FormControl();
  priorityId = new FormControl();
  startDate = new FormControl('');
  endDate = new FormControl('');

  constructor() {
  }

  onFilter(e: any, startDate: string, endDate: string) {
    e.preventDefault();
    this.filterEvent.emit(
      {
        status: this.stateId.value,
        pripriorityCode: this.priorityId.value,
        fromDate: new Date(startDate).toJSON(),
        toDate: new Date(endDate).toJSON(),
        collaboratorId: this.collaboratorId.value,
      })
  }
  open() {
    const modal = new Modal(document.getElementById('crud-modal'), { backdrop: 'static' });
    modal.show();
  }

  openCreate() {
    const modal = new Modal(document.getElementById('createUserModal'), { backdrop: 'static' });
    modal.show();
  }
  Onclose() {
    const modal = new Modal(document.getElementById('crud-modal'));
    modal.hide();
  }

}
