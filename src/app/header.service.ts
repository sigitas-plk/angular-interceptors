import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderService implements HttpInterceptor {
  constructor() {
    console.log('started Header');
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modified = req.clone({ setHeaders: { 'Custom-header': 'cusom' } });
    return next.handle(modified);
  }
}
