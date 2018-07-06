import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
// import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = environment.apiKey;

    request = request.clone({
      setParams: {
        api_key: token,
        language: 'en-US',
        // page: '1'
      }
    });

    return next.handle(request);
  }
}
