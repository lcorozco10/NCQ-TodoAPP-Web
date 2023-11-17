import { ComponentRef } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IModal } from "./modal.model";
import { ModalContainerComponent } from "./modal-container.component";
import { Modal } from "flowbite";

export class ModalRef {

  private result$ = new Subject<any>();

  constructor(
    private modalContainer: ComponentRef<ModalContainerComponent>,
    private modal: ComponentRef<IModal>,
  ) {
    this.modal.instance.modalInstance = this;
  }

  close(output: any): void {
    this.result$.next(output);
    this.destroy$();
  }

  dismiss(output: any): void {
    this.result$.error(output);
    this.destroy$();
  }

  onResult(): Observable<any> {
    return this.result$.asObservable();
  }

  private destroy$(): void {
    this.modal.destroy();
    this.modalContainer.destroy();
    this.result$.complete();
  }
}