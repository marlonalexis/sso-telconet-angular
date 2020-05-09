import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecureSessionCasService } from '../_service/secure-session-cas.service';
import { AccountingSsoReq } from '../_request/accounting-sso-req';
import { SsoService } from '../_service/sso.service';
export declare class SsoInterceptor implements HttpInterceptor {
    private secureStorage;
    private ssoService;
    casServiceTarget: string;
    accountingReq: AccountingSsoReq;
    constructor(secureStorage: SecureSessionCasService, ssoService: SsoService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
