import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SecureSessionCasService } from './secure-session-cas.service';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common/http";
import * as i3 from "./secure-session-cas.service";
var SsoService = /** @class */ (function () {
    function SsoService(router, http, secureStorage) {
        this.router = router;
        this.http = http;
        this.secureStorage = secureStorage;
        this.casServerLogin = environment.casServer.concat('/login');
        this.casServiceTarget = environment.casServiceTarget;
        this.casServicePath = environment.casServiceTarget.concat(environment.casServiceCheck);
        this.casValidateUrl = environment.casServer.concat('/p3/serviceValidate');
        this.casGatewayAutorizacion = environment.casGatewayAutorizacion;
        this.casGatewayAccounting = environment.casGatewayAccounting;
        this.httpHeaders = new HttpHeaders({
            'sso': 'true'
        });
    }
    /**
     * Redirige al cas server
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     */
    SsoService.prototype.goToCAS = function () {
        this.removeData();
        var casUrlLogin = this.casServerLogin.concat('?service=' + this.casServicePath);
        this.redirect(casUrlLogin);
    };
    /**
     * Limpia datos de sesión existente
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     */
    SsoService.prototype.removeData = function () {
        this.secureStorage.clearSession();
    };
    /**
     * Valida el ticket recibido por cas server
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     *
     * @param ticket
     */
    SsoService.prototype.validateTicket = function (ticket) {
        var casValidateTicket = this.casValidateUrl.concat('?service=' + this.casServicePath + '&ticket=' + ticket);
        return this.http.get(casValidateTicket, { headers: this.httpHeaders, responseType: 'text' });
    };
    /**
     * Valida si el usuario tiene autorización
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     *
     * @param request
     */
    SsoService.prototype.autorizacionSso = function (request) {
        return this.http.post(this.casGatewayAutorizacion, request, { headers: this.httpHeaders });
    };
    /**
     * Método para redirigir a una pagina externa
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     *
     * @param {string} url
     * @param {string} target
     * @returns {Promise<boolean>}
     */
    SsoService.prototype.redirect = function (url, target) {
        if (target === void 0) { target = '_parent'; }
        return new Promise(function (resolve, reject) {
            try {
                resolve(!!window.open(url, target));
            }
            catch (e) {
                reject(e);
            }
        });
    };
    SsoService.prototype.accounting = function (request) {
        return this.http.post(this.casGatewayAccounting, request, { headers: this.httpHeaders });
    };
    SsoService.ctorParameters = function () { return [
        { type: Router },
        { type: HttpClient },
        { type: SecureSessionCasService }
    ]; };
    SsoService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SsoService_Factory() { return new SsoService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(i3.SecureSessionCasService)); }, token: SsoService, providedIn: "root" });
    SsoService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], SsoService);
    return SsoService;
}());
export { SsoService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc28tdGVsY29uZXQvIiwic291cmNlcyI6WyJzcmMvYXBwL19zZXJ2aWNlL3Nzby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRzdELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBRXJFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFLM0Q7SUFZRSxvQkFBb0IsTUFBYyxFQUFVLElBQWdCLEVBQVUsYUFBc0M7UUFBeEYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFYNUcsbUJBQWMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxxQkFBZ0IsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsbUJBQWMsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsRixtQkFBYyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDckUsMkJBQXNCLEdBQUcsV0FBVyxDQUFDLHNCQUFzQixDQUFDO1FBQzVELHlCQUFvQixHQUFHLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztRQUVoRCxnQkFBVyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQ3BDLEtBQUssRUFBRSxNQUFNO1NBQ2QsQ0FBQyxDQUFDO0lBR0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw0QkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILCtCQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxtQ0FBYyxHQUFkLFVBQWUsTUFBYztRQUMzQixJQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUM5RyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILG9DQUFlLEdBQWYsVUFBZ0IsT0FBMkI7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBcUIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUMvRyxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSyw2QkFBUSxHQUFoQixVQUFpQixHQUFXLEVBQUUsTUFBMEI7UUFBMUIsdUJBQUEsRUFBQSxrQkFBMEI7UUFDdEQsT0FBTyxJQUFJLE9BQU8sQ0FBVSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQzFDLElBQUk7Z0JBQ0YsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1g7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQVcsT0FBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7O2dCQW5FMkIsTUFBTTtnQkFBZ0IsVUFBVTtnQkFBeUIsdUJBQXVCOzs7SUFaakcsVUFBVTtRQUh0QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csVUFBVSxDQWdGdEI7cUJBNUZEO0NBNEZDLEFBaEZELElBZ0ZDO1NBaEZZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0F1dG9yaXphY2lvblNzb1JlcX0gZnJvbSAnLi4vX3JlcXVlc3QvYXV0b3JpemFjaW9uLXNzby1yZXEnO1xuaW1wb3J0IHtBdXRvcml6YWNpb25Tc29SZXN9IGZyb20gJy4uL19yZXNwb25zZS9hdXRvcml6YWNpb24tc3NvLXJlcyc7XG5pbXBvcnQge1NlY3VyZVNlc3Npb25DYXNTZXJ2aWNlfSBmcm9tICcuL3NlY3VyZS1zZXNzaW9uLWNhcy5zZXJ2aWNlJztcbmltcG9ydCB7QWNjb3VudGluZ1Nzb1JlcX0gZnJvbSAnLi4vX3JlcXVlc3QvYWNjb3VudGluZy1zc28tcmVxJztcbmltcG9ydCB7ZW52aXJvbm1lbnR9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNzb1NlcnZpY2Uge1xuICBjYXNTZXJ2ZXJMb2dpbiA9IGVudmlyb25tZW50LmNhc1NlcnZlci5jb25jYXQoJy9sb2dpbicpO1xuICBjYXNTZXJ2aWNlVGFyZ2V0ID0gZW52aXJvbm1lbnQuY2FzU2VydmljZVRhcmdldDtcbiAgY2FzU2VydmljZVBhdGggPSBlbnZpcm9ubWVudC5jYXNTZXJ2aWNlVGFyZ2V0LmNvbmNhdChlbnZpcm9ubWVudC5jYXNTZXJ2aWNlQ2hlY2spO1xuICBjYXNWYWxpZGF0ZVVybCA9IGVudmlyb25tZW50LmNhc1NlcnZlci5jb25jYXQoJy9wMy9zZXJ2aWNlVmFsaWRhdGUnKTtcbiAgY2FzR2F0ZXdheUF1dG9yaXphY2lvbiA9IGVudmlyb25tZW50LmNhc0dhdGV3YXlBdXRvcml6YWNpb247XG4gIGNhc0dhdGV3YXlBY2NvdW50aW5nID0gZW52aXJvbm1lbnQuY2FzR2F0ZXdheUFjY291bnRpbmc7XG5cbiAgcHJpdmF0ZSBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgJ3Nzbyc6ICd0cnVlJ1xuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgc2VjdXJlU3RvcmFnZTogU2VjdXJlU2Vzc2lvbkNhc1NlcnZpY2UpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRpcmlnZSBhbCBjYXMgc2VydmVyXG4gICAqIEBhdXRvciBNYXJsb24gUGzDumFzIDxtcGx1YXNAdGVsY29uZXQuZWM+XG4gICAqIEB2ZXJzaW9uIDEuMFxuICAgKi9cbiAgZ29Ub0NBUygpIHtcbiAgICB0aGlzLnJlbW92ZURhdGEoKTtcbiAgICBjb25zdCBjYXNVcmxMb2dpbiA9IHRoaXMuY2FzU2VydmVyTG9naW4uY29uY2F0KCc/c2VydmljZT0nICsgdGhpcy5jYXNTZXJ2aWNlUGF0aCk7XG4gICAgdGhpcy5yZWRpcmVjdChjYXNVcmxMb2dpbik7XG4gIH1cblxuICAvKipcbiAgICogTGltcGlhIGRhdG9zIGRlIHNlc2nDs24gZXhpc3RlbnRlXG4gICAqIEBhdXRvciBNYXJsb24gUGzDumFzIDxtcGx1YXNAdGVsY29uZXQuZWM+XG4gICAqIEB2ZXJzaW9uIDEuMFxuICAgKi9cbiAgcmVtb3ZlRGF0YSgpIHtcbiAgICB0aGlzLnNlY3VyZVN0b3JhZ2UuY2xlYXJTZXNzaW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhIGVsIHRpY2tldCByZWNpYmlkbyBwb3IgY2FzIHNlcnZlclxuICAgKiBAYXV0b3IgTWFybG9uIFBsw7phcyA8bXBsdWFzQHRlbGNvbmV0LmVjPlxuICAgKiBAdmVyc2lvbiAxLjBcbiAgICpcbiAgICogQHBhcmFtIHRpY2tldFxuICAgKi9cbiAgdmFsaWRhdGVUaWNrZXQodGlja2V0OiBTdHJpbmcpIHtcbiAgICBjb25zdCBjYXNWYWxpZGF0ZVRpY2tldCA9IHRoaXMuY2FzVmFsaWRhdGVVcmwuY29uY2F0KCc/c2VydmljZT0nICsgdGhpcy5jYXNTZXJ2aWNlUGF0aCArICcmdGlja2V0PScgKyB0aWNrZXQpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGNhc1ZhbGlkYXRlVGlja2V0LCB7aGVhZGVyczogdGhpcy5odHRwSGVhZGVycywgcmVzcG9uc2VUeXBlOiAndGV4dCd9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGEgc2kgZWwgdXN1YXJpbyB0aWVuZSBhdXRvcml6YWNpw7NuXG4gICAqIEBhdXRvciBNYXJsb24gUGzDumFzIDxtcGx1YXNAdGVsY29uZXQuZWM+XG4gICAqIEB2ZXJzaW9uIDEuMFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgKi9cbiAgYXV0b3JpemFjaW9uU3NvKHJlcXVlc3Q6IEF1dG9yaXphY2lvblNzb1JlcSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxBdXRvcml6YWNpb25Tc29SZXM+KHRoaXMuY2FzR2F0ZXdheUF1dG9yaXphY2lvbiwgcmVxdWVzdCwge2hlYWRlcnM6IHRoaXMuaHR0cEhlYWRlcnN9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNw6l0b2RvIHBhcmEgcmVkaXJpZ2lyIGEgdW5hIHBhZ2luYSBleHRlcm5hXG4gICAqIEBhdXRvciBNYXJsb24gUGzDumFzIDxtcGx1YXNAdGVsY29uZXQuZWM+XG4gICAqIEB2ZXJzaW9uIDEuMFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXRcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBwcml2YXRlIHJlZGlyZWN0KHVybDogc3RyaW5nLCB0YXJnZXQ6IHN0cmluZyA9ICdfcGFyZW50Jyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXNvbHZlKCEhd2luZG93Lm9wZW4odXJsLCB0YXJnZXQpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWNjb3VudGluZyhyZXF1ZXN0OiBBY2NvdW50aW5nU3NvUmVxKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5jYXNHYXRld2F5QWNjb3VudGluZywgcmVxdWVzdCwge2hlYWRlcnM6IHRoaXMuaHR0cEhlYWRlcnN9KTtcbiAgfVxufVxuIl19