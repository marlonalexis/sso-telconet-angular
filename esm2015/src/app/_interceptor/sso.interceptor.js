import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SecureSessionCasService } from '../_service/secure-session-cas.service';
import { AccountingSsoReq } from '../_request/accounting-sso-req';
import { SsoService } from '../_service/sso.service';
import { environment } from '../../environments/environment';
let SsoInterceptor = class SsoInterceptor {
    constructor(secureStorage, ssoService) {
        this.secureStorage = secureStorage;
        this.ssoService = ssoService;
        this.casServiceTarget = environment.casServiceTarget;
        this.accountingReq = new AccountingSsoReq();
    }
    intercept(request, next) {
        if (request.headers.get('sso') !== 'true' || !request.headers.get('sso')) {
            let parametrosPost = '';
            if (request.method === 'POST') {
                parametrosPost = '_ParametrosPost(' + JSON.stringify(request.body) + ')';
            }
            this.accountingReq.ssoSession = this.secureStorage.getSsoSessionId();
            this.accountingReq.requestService = request.url.concat(parametrosPost);
            this.accountingReq.path = this.casServiceTarget;
            this.accountingReq.ipCliente = '127.0.0.1';
            this.ssoService.accounting(this.accountingReq).subscribe(respose => {
                if (respose == null) {
                    // Redirect al cas
                    this.ssoService.goToCAS();
                }
            });
        }
        return next.handle(request);
    }
};
SsoInterceptor.ctorParameters = () => [
    { type: SecureSessionCasService },
    { type: SsoService }
];
SsoInterceptor = __decorate([
    Injectable()
], SsoInterceptor);
export { SsoInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NvLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvLXRlbGNvbmV0LyIsInNvdXJjZXMiOlsic3JjL2FwcC9faW50ZXJjZXB0b3Ivc3NvLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBS3pDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFHM0QsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUl6QixZQUFvQixhQUFzQyxFQUFVLFVBQXNCO1FBQXRFLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIMUYscUJBQWdCLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELGtCQUFhLEdBQXFCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQUd6RCxDQUFDO0lBRUQsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4RSxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7WUFDeEIsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtnQkFDN0IsY0FBYyxHQUFHLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUMxRTtZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDckUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztZQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNqRSxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ25CLGtCQUFrQjtvQkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDM0I7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBOztZQXRCb0MsdUJBQXVCO1lBQXNCLFVBQVU7O0FBSi9FLGNBQWM7SUFEMUIsVUFBVSxFQUFFO0dBQ0EsY0FBYyxDQTBCMUI7U0ExQlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1NlY3VyZVNlc3Npb25DYXNTZXJ2aWNlfSBmcm9tICcuLi9fc2VydmljZS9zZWN1cmUtc2Vzc2lvbi1jYXMuc2VydmljZSc7XG5pbXBvcnQge0FjY291bnRpbmdTc29SZXF9IGZyb20gJy4uL19yZXF1ZXN0L2FjY291bnRpbmctc3NvLXJlcSc7XG5pbXBvcnQge1Nzb1NlcnZpY2V9IGZyb20gJy4uL19zZXJ2aWNlL3Nzby5zZXJ2aWNlJztcbmltcG9ydCB7ZW52aXJvbm1lbnR9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTc29JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNhc1NlcnZpY2VUYXJnZXQgPSBlbnZpcm9ubWVudC5jYXNTZXJ2aWNlVGFyZ2V0O1xuICBhY2NvdW50aW5nUmVxOiBBY2NvdW50aW5nU3NvUmVxID0gbmV3IEFjY291bnRpbmdTc29SZXEoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlY3VyZVN0b3JhZ2U6IFNlY3VyZVNlc3Npb25DYXNTZXJ2aWNlLCBwcml2YXRlIHNzb1NlcnZpY2U6IFNzb1NlcnZpY2UpIHtcbiAgfVxuXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBpZiAocmVxdWVzdC5oZWFkZXJzLmdldCgnc3NvJykgIT09ICd0cnVlJyB8fCAhcmVxdWVzdC5oZWFkZXJzLmdldCgnc3NvJykpIHtcbiAgICAgIGxldCBwYXJhbWV0cm9zUG9zdCA9ICcnO1xuICAgICAgaWYgKHJlcXVlc3QubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgcGFyYW1ldHJvc1Bvc3QgPSAnX1BhcmFtZXRyb3NQb3N0KCcgKyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LmJvZHkpICsgJyknO1xuICAgICAgfVxuICAgICAgdGhpcy5hY2NvdW50aW5nUmVxLnNzb1Nlc3Npb24gPSB0aGlzLnNlY3VyZVN0b3JhZ2UuZ2V0U3NvU2Vzc2lvbklkKCk7XG4gICAgICB0aGlzLmFjY291bnRpbmdSZXEucmVxdWVzdFNlcnZpY2UgPSByZXF1ZXN0LnVybC5jb25jYXQocGFyYW1ldHJvc1Bvc3QpO1xuICAgICAgdGhpcy5hY2NvdW50aW5nUmVxLnBhdGggPSB0aGlzLmNhc1NlcnZpY2VUYXJnZXQ7XG4gICAgICB0aGlzLmFjY291bnRpbmdSZXEuaXBDbGllbnRlID0gJzEyNy4wLjAuMSc7XG4gICAgICB0aGlzLnNzb1NlcnZpY2UuYWNjb3VudGluZyh0aGlzLmFjY291bnRpbmdSZXEpLnN1YnNjcmliZShyZXNwb3NlID0+IHtcbiAgICAgICAgaWYgKHJlc3Bvc2UgPT0gbnVsbCkge1xuICAgICAgICAgIC8vIFJlZGlyZWN0IGFsIGNhc1xuICAgICAgICAgIHRoaXMuc3NvU2VydmljZS5nb1RvQ0FTKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gIH1cbn1cbiJdfQ==