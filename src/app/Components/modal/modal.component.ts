import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IModal } from '../../utils/modal-service/modal.model';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent extends IModal {

  message = '';
  errors: string[] = [];
  yesTextButton = '';
  noTextButton = '';

  override onInjectInputs(inputs: any): void {
    this.message = inputs.title;
    this.yesTextButton = inputs.yesTextButton;
    this.noTextButton = inputs.noTextButton;
    this.errors = inputs.errors ?? [];
  }

  save(): void {
    this.close('saving');
  }

  cancel(): void {
    this.dismiss('canceling');
  }
}

