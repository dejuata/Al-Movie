import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
// import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = '5421a9a38653bf083798a7f242aa143b';

    request = request.clone({
      setParams: {
        api_key: token,
        language: 'en-US',
        page: '1'
      }
    });

    return next.handle(request);
  }
}
