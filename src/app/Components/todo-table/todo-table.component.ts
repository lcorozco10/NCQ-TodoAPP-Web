import { Component, Input } from '@angular/core';
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
}
