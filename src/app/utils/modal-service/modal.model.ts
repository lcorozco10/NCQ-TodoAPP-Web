import { ModalRef } from './modal-ref.model';

export abstract class IModal {

  modalInstance: ModalRef | undefined;

  abstract onInjectInputs(inputs: any): void;

  close(output?: any): void {
    this.modalInstance?.close(output);
  }

  dismiss(output?: any): void {
    this.modalInstance?.dismiss(output);
  }
}