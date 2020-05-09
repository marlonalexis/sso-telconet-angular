import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SsoService } from '../_service/sso.service';
import { SecureSessionCasService } from '../_service/secure-session-cas.service';
import { AccountingSsoReq } from '../_request/accounting-sso-req';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "../_service/sso.service";
import * as i2 from "../_service/secure-session-cas.service";
var SsoGuard = /** @class */ (function () {
    function SsoGuard(ssoService, secureStorage) {
        this.ssoService = ssoService;
        this.secureStorage = secureStorage;
        this.casServiceTarget = environment.casServiceTarget;
        this.accountingReq = new AccountingSsoReq();
    }
    SsoGuard.prototype.canActivate = function (next, state) {
        if (this.secureStorage.validateAuthSso() && this.checkSessionCanActivate(state)) {
            return true;
        }
        // Si no existe user logeado se redirige al cas
        this.ssoService.goToCAS();
        return false;
    };
    SsoGuard.prototype.canLoad = function (route, segments) {
        if (this.secureStorage.validateAuthSso() && this.checkSessionCanLoad(route)) {
            return true;
        }
        // Si no existe user logeado se redirige al cas
        this.ssoService.goToCAS();
        return false;
    };
    SsoGuard.prototype.checkSessionCanLoad = function (route) {
        var _this = this;
        this.accountingReq.ssoSession = this.secureStorage.getSsoSessionId();
        this.accountingReq.requestService = '/' + route.path;
        this.accountingReq.path = this.casServiceTarget;
        this.accountingReq.ipCliente = '127.0.0.1';
        this.ssoService.accounting(this.accountingReq).subscribe(function (respose) {
            if (respose == null) {
                // Redirect al cas
                _this.ssoService.goToCAS();
            }
        });
        return true;
    };
    SsoGuard.prototype.checkSessionCanActivate = function (route) {
        var _this = this;
        this.accountingReq.ssoSession = this.secureStorage.getSsoSessionId();
        this.accountingReq.requestService = route.url;
        this.accountingReq.path = this.casServiceTarget;
        this.accountingReq.ipCliente = '127.0.0.1';
        this.ssoService.accounting(this.accountingReq).subscribe(function (respose) {
            if (respose == null) {
                // Redirect al cas
                _this.ssoService.goToCAS();
            }
        });
        return true;
    };
    SsoGuard.prototype.canActivateChild = function (childRoute, state) {
        if (this.secureStorage.validateAuthSso() && this.checkSessionCanActivateChild(state)) {
            return true;
        }
        // Si no existe user logeado se redirige al cas
        this.ssoService.goToCAS();
        return false;
    };
    SsoGuard.prototype.checkSessionCanActivateChild = function (route) {
        var _this = this;
        this.accountingReq.ssoSession = this.secureStorage.getSsoSessionId();
        this.accountingReq.requestService = route.url;
        this.accountingReq.path = this.casServiceTarget;
        this.accountingReq.ipCliente = '127.0.0.1';
        this.ssoService.accounting(this.accountingReq).subscribe(function (respose) {
            if (respose == null) {
                // Redirect al cas
                _this.ssoService.goToCAS();
            }
        });
        return true;
    };
    SsoGuard.ctorParameters = function () { return [
        { type: SsoService },
        { type: SecureSessionCasService }
    ]; };
    SsoGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function SsoGuard_Factory() { return new SsoGuard(i0.ɵɵinject(i1.SsoService), i0.ɵɵinject(i2.SecureSessionCasService)); }, token: SsoGuard, providedIn: "root" });
    SsoGuard = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], SsoGuard);
    return SsoGuard;
}());
export { SsoGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NvLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvLXRlbGNvbmV0LyIsInNvdXJjZXMiOlsic3JjL2FwcC9fZ3VhcmQvc3NvLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSXpDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFLM0Q7SUFDRSxrQkFBb0IsVUFBc0IsRUFBVSxhQUFzQztRQUF0RSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBRzFGLHFCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxrQkFBYSxHQUFxQixJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFIekQsQ0FBQztJQUtELDhCQUFXLEdBQVgsVUFBWSxJQUE0QixFQUFFLEtBQTBCO1FBQ2xFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0UsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELCtDQUErQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxLQUFZLEVBQUUsUUFBc0I7UUFDMUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzRSxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU8sc0NBQW1CLEdBQTNCLFVBQTRCLEtBQVk7UUFBeEMsaUJBWUM7UUFYQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDOUQsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNuQixrQkFBa0I7Z0JBQ2xCLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDM0I7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLDBDQUF1QixHQUEvQixVQUFnQyxLQUEwQjtRQUExRCxpQkFZQztRQVhDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQzlELElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDbkIsa0JBQWtCO2dCQUNsQixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzNCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsVUFBa0MsRUFBRSxLQUEwQjtRQUM3RSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLElBQUksSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTywrQ0FBNEIsR0FBcEMsVUFBcUMsS0FBMEI7UUFBL0QsaUJBWUM7UUFYQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUM5RCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ25CLGtCQUFrQjtnQkFDbEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMzQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkF6RStCLFVBQVU7Z0JBQXlCLHVCQUF1Qjs7O0lBRC9FLFFBQVE7UUFIcEIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLFFBQVEsQ0EyRXBCO21CQXZGRDtDQXVGQyxBQTNFRCxJQTJFQztTQTNFWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBDYW5Mb2FkLCBSb3V0ZSwgVXJsU2VnbWVudCwgQ2FuQWN0aXZhdGVDaGlsZFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtTc29TZXJ2aWNlfSBmcm9tICcuLi9fc2VydmljZS9zc28uc2VydmljZSc7XG5pbXBvcnQge1NlY3VyZVNlc3Npb25DYXNTZXJ2aWNlfSBmcm9tICcuLi9fc2VydmljZS9zZWN1cmUtc2Vzc2lvbi1jYXMuc2VydmljZSc7XG5pbXBvcnQge0FjY291bnRpbmdTc29SZXF9IGZyb20gJy4uL19yZXF1ZXN0L2FjY291bnRpbmctc3NvLXJlcSc7XG5pbXBvcnQge2Vudmlyb25tZW50fSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTc29HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5Mb2FkLCBDYW5BY3RpdmF0ZUNoaWxkIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzc29TZXJ2aWNlOiBTc29TZXJ2aWNlLCBwcml2YXRlIHNlY3VyZVN0b3JhZ2U6IFNlY3VyZVNlc3Npb25DYXNTZXJ2aWNlKSB7XG4gIH1cblxuICBjYXNTZXJ2aWNlVGFyZ2V0ID0gZW52aXJvbm1lbnQuY2FzU2VydmljZVRhcmdldDtcbiAgYWNjb3VudGluZ1JlcTogQWNjb3VudGluZ1Nzb1JlcSA9IG5ldyBBY2NvdW50aW5nU3NvUmVxKCk7XG5cbiAgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5zZWN1cmVTdG9yYWdlLnZhbGlkYXRlQXV0aFNzbygpICYmIHRoaXMuY2hlY2tTZXNzaW9uQ2FuQWN0aXZhdGUoc3RhdGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gU2kgbm8gZXhpc3RlIHVzZXIgbG9nZWFkbyBzZSByZWRpcmlnZSBhbCBjYXNcbiAgICB0aGlzLnNzb1NlcnZpY2UuZ29Ub0NBUygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNhbkxvYWQocm91dGU6IFJvdXRlLCBzZWdtZW50czogVXJsU2VnbWVudFtdKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuc2VjdXJlU3RvcmFnZS52YWxpZGF0ZUF1dGhTc28oKSAmJiB0aGlzLmNoZWNrU2Vzc2lvbkNhbkxvYWQocm91dGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gU2kgbm8gZXhpc3RlIHVzZXIgbG9nZWFkbyBzZSByZWRpcmlnZSBhbCBjYXNcbiAgICB0aGlzLnNzb1NlcnZpY2UuZ29Ub0NBUygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tTZXNzaW9uQ2FuTG9hZChyb3V0ZTogUm91dGUpIHtcbiAgICB0aGlzLmFjY291bnRpbmdSZXEuc3NvU2Vzc2lvbiA9IHRoaXMuc2VjdXJlU3RvcmFnZS5nZXRTc29TZXNzaW9uSWQoKTtcbiAgICB0aGlzLmFjY291bnRpbmdSZXEucmVxdWVzdFNlcnZpY2UgPSAnLycgKyByb3V0ZS5wYXRoO1xuICAgIHRoaXMuYWNjb3VudGluZ1JlcS5wYXRoID0gdGhpcy5jYXNTZXJ2aWNlVGFyZ2V0O1xuICAgIHRoaXMuYWNjb3VudGluZ1JlcS5pcENsaWVudGUgPSAnMTI3LjAuMC4xJztcbiAgICB0aGlzLnNzb1NlcnZpY2UuYWNjb3VudGluZyh0aGlzLmFjY291bnRpbmdSZXEpLnN1YnNjcmliZShyZXNwb3NlID0+IHtcbiAgICAgIGlmIChyZXNwb3NlID09IG51bGwpIHtcbiAgICAgICAgLy8gUmVkaXJlY3QgYWwgY2FzXG4gICAgICAgIHRoaXMuc3NvU2VydmljZS5nb1RvQ0FTKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrU2Vzc2lvbkNhbkFjdGl2YXRlKHJvdXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgdGhpcy5hY2NvdW50aW5nUmVxLnNzb1Nlc3Npb24gPSB0aGlzLnNlY3VyZVN0b3JhZ2UuZ2V0U3NvU2Vzc2lvbklkKCk7XG4gICAgdGhpcy5hY2NvdW50aW5nUmVxLnJlcXVlc3RTZXJ2aWNlID0gcm91dGUudXJsO1xuICAgIHRoaXMuYWNjb3VudGluZ1JlcS5wYXRoID0gdGhpcy5jYXNTZXJ2aWNlVGFyZ2V0O1xuICAgIHRoaXMuYWNjb3VudGluZ1JlcS5pcENsaWVudGUgPSAnMTI3LjAuMC4xJztcbiAgICB0aGlzLnNzb1NlcnZpY2UuYWNjb3VudGluZyh0aGlzLmFjY291bnRpbmdSZXEpLnN1YnNjcmliZShyZXNwb3NlID0+IHtcbiAgICAgIGlmIChyZXNwb3NlID09IG51bGwpIHtcbiAgICAgICAgLy8gUmVkaXJlY3QgYWwgY2FzXG4gICAgICAgIHRoaXMuc3NvU2VydmljZS5nb1RvQ0FTKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjYW5BY3RpdmF0ZUNoaWxkKGNoaWxkUm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuc2VjdXJlU3RvcmFnZS52YWxpZGF0ZUF1dGhTc28oKSAmJiB0aGlzLmNoZWNrU2Vzc2lvbkNhbkFjdGl2YXRlQ2hpbGQoc3RhdGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gU2kgbm8gZXhpc3RlIHVzZXIgbG9nZWFkbyBzZSByZWRpcmlnZSBhbCBjYXNcbiAgICB0aGlzLnNzb1NlcnZpY2UuZ29Ub0NBUygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tTZXNzaW9uQ2FuQWN0aXZhdGVDaGlsZChyb3V0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIHRoaXMuYWNjb3VudGluZ1JlcS5zc29TZXNzaW9uID0gdGhpcy5zZWN1cmVTdG9yYWdlLmdldFNzb1Nlc3Npb25JZCgpO1xuICAgIHRoaXMuYWNjb3VudGluZ1JlcS5yZXF1ZXN0U2VydmljZSA9IHJvdXRlLnVybDtcbiAgICB0aGlzLmFjY291bnRpbmdSZXEucGF0aCA9IHRoaXMuY2FzU2VydmljZVRhcmdldDtcbiAgICB0aGlzLmFjY291bnRpbmdSZXEuaXBDbGllbnRlID0gJzEyNy4wLjAuMSc7XG4gICAgdGhpcy5zc29TZXJ2aWNlLmFjY291bnRpbmcodGhpcy5hY2NvdW50aW5nUmVxKS5zdWJzY3JpYmUocmVzcG9zZSA9PiB7XG4gICAgICBpZiAocmVzcG9zZSA9PSBudWxsKSB7XG4gICAgICAgIC8vIFJlZGlyZWN0IGFsIGNhc1xuICAgICAgICB0aGlzLnNzb1NlcnZpY2UuZ29Ub0NBUygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=