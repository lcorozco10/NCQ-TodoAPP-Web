import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Models/TaskModel';
import { Modal } from 'flowbite';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.scss'
})
export class DeleteModalComponent {

  @Input() taskSelected: Task | undefined;

  @Output() clickEvent = new EventEmitter<boolean>();
  optionClik(option: boolean) {
    this.clickEvent.emit(option);
  }

  OnCloseModal() {
    const modal = new Modal(document.getElementById('delete-modal'));
    modal.hide();
  }
}
