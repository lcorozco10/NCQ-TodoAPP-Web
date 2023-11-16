import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.scss'
})
export class DeleteModalComponent {

  @Output() clickEvent = new EventEmitter<boolean>();
  optionClik(option: boolean) {
    this.clickEvent.emit(option);
  }
}
