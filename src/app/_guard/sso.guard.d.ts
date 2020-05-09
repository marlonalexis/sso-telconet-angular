import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, UrlSegment, CanActivateChild } from '@angular/router';
import { SsoService } from '../_service/sso.service';
import { SecureSessionCasService } from '../_service/secure-session-cas.service';
import { AccountingSsoReq } from '../_request/accounting-sso-req';
export declare class SsoGuard implements CanActivate, CanLoad, CanActivateChild {
    private ssoService;
    private secureStorage;
    constructor(ssoService: SsoService, secureStorage: SecureSessionCasService);
    casServiceTarget: string;
    accountingReq: AccountingSsoReq;
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    canLoad(route: Route, segments: UrlSegment[]): boolean;
    private checkSessionCanLoad;
    private checkSessionCanActivate;
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    private checkSessionCanActivateChild;
}
