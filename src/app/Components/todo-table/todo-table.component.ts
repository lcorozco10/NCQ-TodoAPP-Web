import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Models/TaskModel';
import { StatusTaskPipe } from "../../utils/pipes/status-pipe";
import { PriorityTaskPipe } from "../../utils/pipes/priority-pipe";
import { Modal } from 'flowbite';

@Component({
  selector: 'app-todo-table',
  standalone: true,
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.scss',
  imports: [CommonModule, StatusTaskPipe, PriorityTaskPipe]
})
export class TodoTableComponent {

  @Input() Tasks: Task[] | undefined;
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() editEvent = new EventEmitter<Task>();

  setStatusIcon(status: number): string {
    return status == 0
      ? 'bg-blue-500'
      : status == 1
        ? 'bg-green-500'
        : 'bg-gray-500'
  }

  setPriorityIcon(priority: number): string {
    return priority == 0
      ? 'bg-red-500'
      : priority == 1
        ? 'bg-orange-500'
        : 'bg-green-500'
  }

  onDelete(id: string) {
    this.deleteEvent.emit(id)
  }

  OnEditModal(tassk: Task) {
    this.editEvent.emit(tassk)
    //const modal = new Modal(document.getElementById('editUserModal'));
    //modal?.show();
  }
}
