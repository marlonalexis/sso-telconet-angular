import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SecureSessionCasService } from '../_service/secure-session-cas.service';
import { AccountingSsoReq } from '../_request/accounting-sso-req';
import { SsoService } from '../_service/sso.service';
import { environment } from '../../environments/environment';
var SsoInterceptor = /** @class */ (function () {
    function SsoInterceptor(secureStorage, ssoService) {
        this.secureStorage = secureStorage;
        this.ssoService = ssoService;
        this.casServiceTarget = environment.casServiceTarget;
        this.accountingReq = new AccountingSsoReq();
    }
    SsoInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (request.headers.get('sso') !== 'true' || !request.headers.get('sso')) {
            var parametrosPost = '';
            if (request.method === 'POST') {
                parametrosPost = '_ParametrosPost(' + JSON.stringify(request.body) + ')';
            }
            this.accountingReq.ssoSession = this.secureStorage.getSsoSessionId();
            this.accountingReq.requestService = request.url.concat(parametrosPost);
            this.accountingReq.path = this.casServiceTarget;
            this.accountingReq.ipCliente = '127.0.0.1';
            this.ssoService.accounting(this.accountingReq).subscribe(function (respose) {
                if (respose == null) {
                    // Redirect al cas
                    _this.ssoService.goToCAS();
                }
            });
        }
        return next.handle(request);
    };
    SsoInterceptor.ctorParameters = function () { return [
        { type: SecureSessionCasService },
        { type: SsoService }
    ]; };
    SsoInterceptor = __decorate([
        Injectable()
    ], SsoInterceptor);
    return SsoInterceptor;
}());
export { SsoInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NvLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvLXRlbGNvbmV0LyIsInNvdXJjZXMiOlsic3JjL2FwcC9faW50ZXJjZXB0b3Ivc3NvLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBS3pDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFHM0Q7SUFJRSx3QkFBb0IsYUFBc0MsRUFBVSxVQUFzQjtRQUF0RSxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSDFGLHFCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxrQkFBYSxHQUFxQixJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFHekQsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxPQUF5QixFQUFFLElBQWlCO1FBQXRELGlCQWtCQztRQWpCQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hFLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztZQUN4QixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO2dCQUM3QixjQUFjLEdBQUcsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQzFFO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNyRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO2dCQUM5RCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ25CLGtCQUFrQjtvQkFDbEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDM0I7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQXJCa0MsdUJBQXVCO2dCQUFzQixVQUFVOztJQUovRSxjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWMsQ0EwQjFCO0lBQUQscUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQTFCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3Jcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7U2VjdXJlU2Vzc2lvbkNhc1NlcnZpY2V9IGZyb20gJy4uL19zZXJ2aWNlL3NlY3VyZS1zZXNzaW9uLWNhcy5zZXJ2aWNlJztcbmltcG9ydCB7QWNjb3VudGluZ1Nzb1JlcX0gZnJvbSAnLi4vX3JlcXVlc3QvYWNjb3VudGluZy1zc28tcmVxJztcbmltcG9ydCB7U3NvU2VydmljZX0gZnJvbSAnLi4vX3NlcnZpY2Uvc3NvLnNlcnZpY2UnO1xuaW1wb3J0IHtlbnZpcm9ubWVudH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNzb0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY2FzU2VydmljZVRhcmdldCA9IGVudmlyb25tZW50LmNhc1NlcnZpY2VUYXJnZXQ7XG4gIGFjY291bnRpbmdSZXE6IEFjY291bnRpbmdTc29SZXEgPSBuZXcgQWNjb3VudGluZ1Nzb1JlcSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VjdXJlU3RvcmFnZTogU2VjdXJlU2Vzc2lvbkNhc1NlcnZpY2UsIHByaXZhdGUgc3NvU2VydmljZTogU3NvU2VydmljZSkge1xuICB9XG5cbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmIChyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdzc28nKSAhPT0gJ3RydWUnIHx8ICFyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdzc28nKSkge1xuICAgICAgbGV0IHBhcmFtZXRyb3NQb3N0ID0gJyc7XG4gICAgICBpZiAocmVxdWVzdC5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBwYXJhbWV0cm9zUG9zdCA9ICdfUGFyYW1ldHJvc1Bvc3QoJyArIEpTT04uc3RyaW5naWZ5KHJlcXVlc3QuYm9keSkgKyAnKSc7XG4gICAgICB9XG4gICAgICB0aGlzLmFjY291bnRpbmdSZXEuc3NvU2Vzc2lvbiA9IHRoaXMuc2VjdXJlU3RvcmFnZS5nZXRTc29TZXNzaW9uSWQoKTtcbiAgICAgIHRoaXMuYWNjb3VudGluZ1JlcS5yZXF1ZXN0U2VydmljZSA9IHJlcXVlc3QudXJsLmNvbmNhdChwYXJhbWV0cm9zUG9zdCk7XG4gICAgICB0aGlzLmFjY291bnRpbmdSZXEucGF0aCA9IHRoaXMuY2FzU2VydmljZVRhcmdldDtcbiAgICAgIHRoaXMuYWNjb3VudGluZ1JlcS5pcENsaWVudGUgPSAnMTI3LjAuMC4xJztcbiAgICAgIHRoaXMuc3NvU2VydmljZS5hY2NvdW50aW5nKHRoaXMuYWNjb3VudGluZ1JlcSkuc3Vic2NyaWJlKHJlc3Bvc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9zZSA9PSBudWxsKSB7XG4gICAgICAgICAgLy8gUmVkaXJlY3QgYWwgY2FzXG4gICAgICAgICAgdGhpcy5zc29TZXJ2aWNlLmdvVG9DQVMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgfVxufVxuIl19