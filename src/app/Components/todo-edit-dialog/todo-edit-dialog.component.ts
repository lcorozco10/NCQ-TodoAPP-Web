import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollboratorModel } from '../../Models/Collaborator.model';
import { Task } from '../../Models/TaskModel';
import { Modal } from 'flowbite';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-edit-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-edit-dialog.component.html',
  styleUrl: './todo-edit-dialog.component.scss'
})
export class TodoEditDialogComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {

    let startDateValue: string = '';
    if (this.taskSelected?.startDate) {
      const startDate = new Date(this.taskSelected?.startDate?.toString())
      startDateValue = formatDate(startDate)
    }

    let endDateValue: string = '';
    if (this.taskSelected?.startDate) {
      const endDate = new Date(this.taskSelected?.endDate?.toString())
      endDateValue = formatDate(endDate)
    }

    this.createTaskForm.patchValue(
      {
        id: this.taskSelected?.id,
        description: this.taskSelected?.description,
        collaboratorId: this.taskSelected?.collaboratorId,
        status: this.taskSelected?.status,
        pripriorityCode: this.taskSelected?.pripriorityCode,
        startDate: startDateValue,
        endDate: endDateValue
      });
  }

  @Input() collboarators: CollboratorModel[] | undefined;
  @Input() taskSelected: Task | undefined;

  @Output() editEvent = new EventEmitter<Task>();

  createTaskForm = new FormGroup({
    id: new FormControl(''),
    description: new FormControl(''),
    collaboratorId: new FormControl(''),
    status: new FormControl(0),
    pripriorityCode: new FormControl(0),
    startDate: new FormControl(),
    endDate: new FormControl(),
  });

  onEdit(e: any, startDate: string, endDate: string) {
    e.preventDefault();
    var task = this.createTaskForm.value as Task;
    task.startDate = new Date(startDate);
    task.endDate = new Date(endDate);
    this.editEvent.emit(this.createTaskForm.value as Task);
  }

  OnCloseEditModal() {
    const modal = new Modal(document.getElementById('editUserModal'));
    modal.hide();
  }
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

function formatDate(date: Date) {
  return [
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join('/');
}
