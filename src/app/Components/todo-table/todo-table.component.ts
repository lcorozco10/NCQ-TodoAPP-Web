import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Models/TaskModel';
import { StatusTaskPipe } from "../../utils/pipes/status-pipe";
import { PriorityTaskPipe } from "../../utils/pipes/priority-pipe";

@Component({
  selector: 'app-todo-table',
  standalone: true,
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.scss',
  imports: [CommonModule, StatusTaskPipe, PriorityTaskPipe]
})
export class TodoTableComponent {

  @Input() Tasks: Task[] | undefined;
  @Output() deleteEvent = new EventEmitter<Task>();
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

  onDelete(tassk: Task) {
    this.deleteEvent.emit(tassk);
  }

  OnEditModal(tassk: Task) {
    this.editEvent.emit(tassk);
  }
}
