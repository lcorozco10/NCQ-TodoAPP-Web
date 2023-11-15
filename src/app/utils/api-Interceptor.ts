import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { SpinnerService } from "./spinner-service ";
import { Observable, catchError, finalize } from "rxjs";
import { Injectable } from "@angular/core";
import { ModalService } from "./modal-service/modal-service";
import { ModalComponent } from "../Components/modal/modal.component";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService, public modalService: ModalService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.spinnerService.set(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.spinnerService.set(false);
      }),
      catchError((error: any) => {
        let errorText = error.error.message;
        this.modalService?.open(ModalComponent, { title: errorText, errors: error.error.errors });
        throw error;
      })
    );
  }
}