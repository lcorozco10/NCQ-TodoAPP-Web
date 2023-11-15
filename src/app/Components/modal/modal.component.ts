import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IModal } from '../../utils/modal-service/modal.model';
//import { Modal } from 'flowbite';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent extends IModal {

  @Input() message = '';
  @Input() yesTextButton = '';
  @Input() noTextButton = '';
  @Output() yesNoButtonEvent = new EventEmitter<boolean>();
  @Output() open = new EventEmitter<boolean>();

  override onInjectInputs(inputs: any): void {
    this.message = inputs.title;
  }

  clickEvent(value: boolean) {
    this.yesNoButtonEvent.emit(value);
  }

  save(): void {
    this.close('saving');
  }

  cancel(): void {
    this.dismiss('canceling');
  }
}

