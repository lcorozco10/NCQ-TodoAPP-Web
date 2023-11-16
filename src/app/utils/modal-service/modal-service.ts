import {
  Injectable,
  ApplicationRef,
  Type,
  ComponentRef,
} from '@angular/core'
import { ModalRef } from './modal-ref.model';
import { IModal } from './modal.model';
import { ModalContainerComponent } from './modal-container.component';
import { Modal } from 'flowbite';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalContainer: HTMLElement | undefined;
  private modalContainerFactory!: ComponentRef<ModalContainerComponent>;

  constructor(
    private appRef: ApplicationRef
  ) {
    this.setupModalContainerDiv();
    this.setupModalContainerFactory();
  }

  open<T extends IModal>(component: Type<T>, inputs?: any): ModalRef {
    const modalComponentRef = this.modalContainerFactory.instance.createModal(component);

    if (inputs) {
      modalComponentRef?.instance.onInjectInputs(inputs);
    }

    const modal = new Modal(document.getElementById('popup-modal'));
    modal?.show();
    /*if (document.getElementById('popup-modal')) {
      const modal = new Modal(document.getElementById('popup-modal'));
      modal?.show();
    }*/

    const icon = document.getElementById('close-icon');

    icon?.addEventListener('click', () => {
      modal.hide();
    });

    //modal?.show();

    const modalRef = new ModalRef(this.modalContainerFactory, modalComponentRef);
    return modalRef;
  }

  private setupModalContainerDiv(): void {
    this.modalContainer = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(this.modalContainer);
  }

  private setupModalContainerFactory(): void {
    this.modalContainerFactory = this.appRef.bootstrap(ModalContainerComponent, this.modalContainer);
  }
}