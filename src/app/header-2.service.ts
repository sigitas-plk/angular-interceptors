import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Header2Service implements HttpInterceptor {
  constructor() {
    console.log('started header two');
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modified = req.clone({
      setHeaders: { 'Custom-header-2': 'cusom-2' }
    });
    return next.handle(modified);
  }
}
