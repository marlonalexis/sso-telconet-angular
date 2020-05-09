import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SsoService } from '../_service/sso.service';
import { SecureSessionCasService } from '../_service/secure-session-cas.service';
import { AccountingSsoReq } from '../_request/accounting-sso-req';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "../_service/sso.service";
import * as i2 from "../_service/secure-session-cas.service";
let SsoGuard = class SsoGuard {
    constructor(ssoService, secureStorage) {
        this.ssoService = ssoService;
        this.secureStorage = secureStorage;
        this.casServiceTarget = environment.casServiceTarget;
        this.accountingReq = new AccountingSsoReq();
    }
    canActivate(next, state) {
        if (this.secureStorage.validateAuthSso() && this.checkSessionCanActivate(state)) {
            return true;
        }
        // Si no existe user logeado se redirige al cas
        this.ssoService.goToCAS();
        return false;
    }
    canLoad(route, segments) {
        if (this.secureStorage.validateAuthSso() && this.checkSessionCanLoad(route)) {
            return true;
        }
        // Si no existe user logeado se redirige al cas
        this.ssoService.goToCAS();
        return false;
    }
    checkSessionCanLoad(route) {
        this.accountingReq.ssoSession = this.secureStorage.getSsoSessionId();
        this.accountingReq.requestService = '/' + route.path;
        this.accountingReq.path = this.casServiceTarget;
        this.accountingReq.ipCliente = '127.0.0.1';
        this.ssoService.accounting(this.accountingReq).subscribe(respose => {
            if (respose == null) {
                // Redirect al cas
                this.ssoService.goToCAS();
            }
        });
        return true;
    }
    checkSessionCanActivate(route) {
        this.accountingReq.ssoSession = this.secureStorage.getSsoSessionId();
        this.accountingReq.requestService = route.url;
        this.accountingReq.path = this.casServiceTarget;
        this.accountingReq.ipCliente = '127.0.0.1';
        this.ssoService.accounting(this.accountingReq).subscribe(respose => {
            if (respose == null) {
                // Redirect al cas
                this.ssoService.goToCAS();
            }
        });
        return true;
    }
    canActivateChild(childRoute, state) {
        if (this.secureStorage.validateAuthSso() && this.checkSessionCanActivateChild(state)) {
            return true;
        }
        // Si no existe user logeado se redirige al cas
        this.ssoService.goToCAS();
        return false;
    }
    checkSessionCanActivateChild(route) {
        this.accountingReq.ssoSession = this.secureStorage.getSsoSessionId();
        this.accountingReq.requestService = route.url;
        this.accountingReq.path = this.casServiceTarget;
        this.accountingReq.ipCliente = '127.0.0.1';
        this.ssoService.accounting(this.accountingReq).subscribe(respose => {
            if (respose == null) {
                // Redirect al cas
                this.ssoService.goToCAS();
            }
        });
        return true;
    }
};
SsoGuard.ctorParameters = () => [
    { type: SsoService },
    { type: SecureSessionCasService }
];
SsoGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function SsoGuard_Factory() { return new SsoGuard(i0.ɵɵinject(i1.SsoService), i0.ɵɵinject(i2.SecureSessionCasService)); }, token: SsoGuard, providedIn: "root" });
SsoGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SsoGuard);
export { SsoGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NvLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvLXRlbGNvbmV0LyIsInNvdXJjZXMiOlsic3JjL2FwcC9fZ3VhcmQvc3NvLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSXpDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFLM0QsSUFBYSxRQUFRLEdBQXJCLE1BQWEsUUFBUTtJQUNuQixZQUFvQixVQUFzQixFQUFVLGFBQXNDO1FBQXRFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFHMUYscUJBQWdCLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELGtCQUFhLEdBQXFCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQUh6RCxDQUFDO0lBS0QsV0FBVyxDQUFDLElBQTRCLEVBQUUsS0FBMEI7UUFDbEUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvRSxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVksRUFBRSxRQUFzQjtRQUMxQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxLQUFZO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pFLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDbkIsa0JBQWtCO2dCQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzNCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyx1QkFBdUIsQ0FBQyxLQUEwQjtRQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pFLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDbkIsa0JBQWtCO2dCQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzNCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFrQyxFQUFFLEtBQTBCO1FBQzdFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsSUFBSSxJQUFJLENBQUMsNEJBQTRCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEYsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELCtDQUErQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLDRCQUE0QixDQUFDLEtBQTBCO1FBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakUsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNuQixrQkFBa0I7Z0JBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDM0I7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUE7O1lBMUVpQyxVQUFVO1lBQXlCLHVCQUF1Qjs7O0FBRC9FLFFBQVE7SUFIcEIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLFFBQVEsQ0EyRXBCO1NBM0VZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIENhbkxvYWQsIFJvdXRlLCBVcmxTZWdtZW50LCBDYW5BY3RpdmF0ZUNoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1Nzb1NlcnZpY2V9IGZyb20gJy4uL19zZXJ2aWNlL3Nzby5zZXJ2aWNlJztcbmltcG9ydCB7U2VjdXJlU2Vzc2lvbkNhc1NlcnZpY2V9IGZyb20gJy4uL19zZXJ2aWNlL3NlY3VyZS1zZXNzaW9uLWNhcy5zZXJ2aWNlJztcbmltcG9ydCB7QWNjb3VudGluZ1Nzb1JlcX0gZnJvbSAnLi4vX3JlcXVlc3QvYWNjb3VudGluZy1zc28tcmVxJztcbmltcG9ydCB7ZW52aXJvbm1lbnR9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNzb0d1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkxvYWQsIENhbkFjdGl2YXRlQ2hpbGQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNzb1NlcnZpY2U6IFNzb1NlcnZpY2UsIHByaXZhdGUgc2VjdXJlU3RvcmFnZTogU2VjdXJlU2Vzc2lvbkNhc1NlcnZpY2UpIHtcbiAgfVxuXG4gIGNhc1NlcnZpY2VUYXJnZXQgPSBlbnZpcm9ubWVudC5jYXNTZXJ2aWNlVGFyZ2V0O1xuICBhY2NvdW50aW5nUmVxOiBBY2NvdW50aW5nU3NvUmVxID0gbmV3IEFjY291bnRpbmdTc29SZXEoKTtcblxuICBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnNlY3VyZVN0b3JhZ2UudmFsaWRhdGVBdXRoU3NvKCkgJiYgdGhpcy5jaGVja1Nlc3Npb25DYW5BY3RpdmF0ZShzdGF0ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBTaSBubyBleGlzdGUgdXNlciBsb2dlYWRvIHNlIHJlZGlyaWdlIGFsIGNhc1xuICAgIHRoaXMuc3NvU2VydmljZS5nb1RvQ0FTKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2FuTG9hZChyb3V0ZTogUm91dGUsIHNlZ21lbnRzOiBVcmxTZWdtZW50W10pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5zZWN1cmVTdG9yYWdlLnZhbGlkYXRlQXV0aFNzbygpICYmIHRoaXMuY2hlY2tTZXNzaW9uQ2FuTG9hZChyb3V0ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBTaSBubyBleGlzdGUgdXNlciBsb2dlYWRvIHNlIHJlZGlyaWdlIGFsIGNhc1xuICAgIHRoaXMuc3NvU2VydmljZS5nb1RvQ0FTKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1Nlc3Npb25DYW5Mb2FkKHJvdXRlOiBSb3V0ZSkge1xuICAgIHRoaXMuYWNjb3VudGluZ1JlcS5zc29TZXNzaW9uID0gdGhpcy5zZWN1cmVTdG9yYWdlLmdldFNzb1Nlc3Npb25JZCgpO1xuICAgIHRoaXMuYWNjb3VudGluZ1JlcS5yZXF1ZXN0U2VydmljZSA9ICcvJyArIHJvdXRlLnBhdGg7XG4gICAgdGhpcy5hY2NvdW50aW5nUmVxLnBhdGggPSB0aGlzLmNhc1NlcnZpY2VUYXJnZXQ7XG4gICAgdGhpcy5hY2NvdW50aW5nUmVxLmlwQ2xpZW50ZSA9ICcxMjcuMC4wLjEnO1xuICAgIHRoaXMuc3NvU2VydmljZS5hY2NvdW50aW5nKHRoaXMuYWNjb3VudGluZ1JlcSkuc3Vic2NyaWJlKHJlc3Bvc2UgPT4ge1xuICAgICAgaWYgKHJlc3Bvc2UgPT0gbnVsbCkge1xuICAgICAgICAvLyBSZWRpcmVjdCBhbCBjYXNcbiAgICAgICAgdGhpcy5zc29TZXJ2aWNlLmdvVG9DQVMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tTZXNzaW9uQ2FuQWN0aXZhdGUocm91dGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICB0aGlzLmFjY291bnRpbmdSZXEuc3NvU2Vzc2lvbiA9IHRoaXMuc2VjdXJlU3RvcmFnZS5nZXRTc29TZXNzaW9uSWQoKTtcbiAgICB0aGlzLmFjY291bnRpbmdSZXEucmVxdWVzdFNlcnZpY2UgPSByb3V0ZS51cmw7XG4gICAgdGhpcy5hY2NvdW50aW5nUmVxLnBhdGggPSB0aGlzLmNhc1NlcnZpY2VUYXJnZXQ7XG4gICAgdGhpcy5hY2NvdW50aW5nUmVxLmlwQ2xpZW50ZSA9ICcxMjcuMC4wLjEnO1xuICAgIHRoaXMuc3NvU2VydmljZS5hY2NvdW50aW5nKHRoaXMuYWNjb3VudGluZ1JlcSkuc3Vic2NyaWJlKHJlc3Bvc2UgPT4ge1xuICAgICAgaWYgKHJlc3Bvc2UgPT0gbnVsbCkge1xuICAgICAgICAvLyBSZWRpcmVjdCBhbCBjYXNcbiAgICAgICAgdGhpcy5zc29TZXJ2aWNlLmdvVG9DQVMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNhbkFjdGl2YXRlQ2hpbGQoY2hpbGRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5zZWN1cmVTdG9yYWdlLnZhbGlkYXRlQXV0aFNzbygpICYmIHRoaXMuY2hlY2tTZXNzaW9uQ2FuQWN0aXZhdGVDaGlsZChzdGF0ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBTaSBubyBleGlzdGUgdXNlciBsb2dlYWRvIHNlIHJlZGlyaWdlIGFsIGNhc1xuICAgIHRoaXMuc3NvU2VydmljZS5nb1RvQ0FTKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1Nlc3Npb25DYW5BY3RpdmF0ZUNoaWxkKHJvdXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgdGhpcy5hY2NvdW50aW5nUmVxLnNzb1Nlc3Npb24gPSB0aGlzLnNlY3VyZVN0b3JhZ2UuZ2V0U3NvU2Vzc2lvbklkKCk7XG4gICAgdGhpcy5hY2NvdW50aW5nUmVxLnJlcXVlc3RTZXJ2aWNlID0gcm91dGUudXJsO1xuICAgIHRoaXMuYWNjb3VudGluZ1JlcS5wYXRoID0gdGhpcy5jYXNTZXJ2aWNlVGFyZ2V0O1xuICAgIHRoaXMuYWNjb3VudGluZ1JlcS5pcENsaWVudGUgPSAnMTI3LjAuMC4xJztcbiAgICB0aGlzLnNzb1NlcnZpY2UuYWNjb3VudGluZyh0aGlzLmFjY291bnRpbmdSZXEpLnN1YnNjcmliZShyZXNwb3NlID0+IHtcbiAgICAgIGlmIChyZXNwb3NlID09IG51bGwpIHtcbiAgICAgICAgLy8gUmVkaXJlY3QgYWwgY2FzXG4gICAgICAgIHRoaXMuc3NvU2VydmljZS5nb1RvQ0FTKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==