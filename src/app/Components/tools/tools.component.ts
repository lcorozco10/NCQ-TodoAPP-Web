import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollboratorModel } from '../../Models/Collaborator.model';
import { Observable } from 'rxjs';
import { TaskFilter } from '../../Models/TaskModel';
import { Modal } from 'flowbite';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {

  @Input() collboarators: CollboratorModel[] | undefined;
  @Output() filterEvent = new EventEmitter<TaskFilter>();

  constructor() {
  }

  onFilter(e: any) {
    e.preventDefault();
    this.filterEvent.emit(
      {
        status: 1,
        pripriorityCode: 0,
        fromDate: new Date(2018, 4, 8, 10, 13, 41, 12),
        toDate: new Date(2018, 4, 8, 10, 13, 41, 12),
        collaboratorId: "f6c25425-c52e-4022-a82f-0241537767aa",
      })
  }
  open() {
    const modal = new Modal(document.getElementById('crud-modal'));
    modal.show();
  }
  Onclose() {
    const modal = new Modal(document.getElementById('crud-modal'));
    modal.hide();
  }
}
