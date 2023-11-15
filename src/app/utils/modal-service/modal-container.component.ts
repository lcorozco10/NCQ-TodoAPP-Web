import { Component, ComponentRef, Type, ViewChild, ViewContainerRef } from "@angular/core";
import { IModal } from "./modal.model";

@Component({
  template: `
    <div class="modal-backdrop fade in"></div>
    <ng-template #modalContainer></ng-template>
  `
})
export class ModalContainerComponent {

  @ViewChild('modalContainer', { read: ViewContainerRef })
  private modalContainer!: ViewContainerRef;

  constructor() { }

  createModal<T extends IModal>(component: Type<T>): ComponentRef<T> {
    this.modalContainer?.clear();

    return this.modalContainer.createComponent(component);
  }

}