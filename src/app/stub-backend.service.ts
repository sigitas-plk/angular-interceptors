import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class StubBackendService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = req;

    console.log(`url: ${url} method: ${method}, body: ${body}`);
    //  return next.handle(req);

    const x = new URL(url);
    console.log(
      `host: ${x.hostname} path: ${x.pathname}, search: ${x.searchParams}`
    );

    return of(null).pipe(mergeMap(handleResponse));

    function handleResponse() {
      return of(
        new HttpResponse({ body: JSON.stringify({ test: 'obj' }), status: 200 })
      );
    }
    function stubError() {
      return throwError({
        status: 404,
        error: { message: 'Unauthorised' },
        message: 'something'
      });
    }
  }
}

// error: error { target: XMLHttpRequest, isTrusted: true, lengthComputable: false, … }
// headers: Object { normalizedNames: Map(0), lazyUpdate: null, headers: Map(0) }
// message: "Http failure response for http://vandakujbus.com/somthing/asdf: 0 Unknown Error"
// name: "HttpErrorResponse"
// ok: false
// status: 0
// statusText: "Unknown Error"
// url: "http://vandakujbus.com/somthing/asdf"
