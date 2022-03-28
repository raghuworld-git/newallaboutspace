import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators';
import { LoaderService } from '../services/http/loader.service';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loader:LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loader.show();
    return next.handle(request)
    .pipe(finalize(()=>{
        this.loader.hide();
    })
    );    
  }
}
