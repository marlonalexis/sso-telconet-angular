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
let SsoService = class SsoService {
    constructor(router, http, secureStorage) {
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
    goToCAS() {
        this.removeData();
        const casUrlLogin = this.casServerLogin.concat('?service=' + this.casServicePath);
        this.redirect(casUrlLogin);
    }
    /**
     * Limpia datos de sesión existente
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     */
    removeData() {
        this.secureStorage.clearSession();
    }
    /**
     * Valida el ticket recibido por cas server
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     *
     * @param ticket
     */
    validateTicket(ticket) {
        const casValidateTicket = this.casValidateUrl.concat('?service=' + this.casServicePath + '&ticket=' + ticket);
        return this.http.get(casValidateTicket, { headers: this.httpHeaders, responseType: 'text' });
    }
    /**
     * Valida si el usuario tiene autorización
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     *
     * @param request
     */
    autorizacionSso(request) {
        return this.http.post(this.casGatewayAutorizacion, request, { headers: this.httpHeaders });
    }
    /**
     * Método para redirigir a una pagina externa
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     *
     * @param {string} url
     * @param {string} target
     * @returns {Promise<boolean>}
     */
    redirect(url, target = '_parent') {
        return new Promise((resolve, reject) => {
            try {
                resolve(!!window.open(url, target));
            }
            catch (e) {
                reject(e);
            }
        });
    }
    accounting(request) {
        return this.http.post(this.casGatewayAccounting, request, { headers: this.httpHeaders });
    }
};
SsoService.ctorParameters = () => [
    { type: Router },
    { type: HttpClient },
    { type: SecureSessionCasService }
];
SsoService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SsoService_Factory() { return new SsoService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(i3.SecureSessionCasService)); }, token: SsoService, providedIn: "root" });
SsoService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SsoService);
export { SsoService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc28tdGVsY29uZXQvIiwic291cmNlcyI6WyJzcmMvYXBwL19zZXJ2aWNlL3Nzby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRzdELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBRXJFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFLM0QsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQVlyQixZQUFvQixNQUFjLEVBQVUsSUFBZ0IsRUFBVSxhQUFzQztRQUF4RixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQVg1RyxtQkFBYyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELHFCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxtQkFBYyxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xGLG1CQUFjLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNyRSwyQkFBc0IsR0FBRyxXQUFXLENBQUMsc0JBQXNCLENBQUM7UUFDNUQseUJBQW9CLEdBQUcsV0FBVyxDQUFDLG9CQUFvQixDQUFDO1FBRWhELGdCQUFXLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDcEMsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDLENBQUM7SUFHSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE9BQU87UUFDTCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsVUFBVTtRQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGNBQWMsQ0FBQyxNQUFjO1FBQzNCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzlHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsZUFBZSxDQUFDLE9BQTJCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQXFCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDL0csQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ssUUFBUSxDQUFDLEdBQVcsRUFBRSxTQUFpQixTQUFTO1FBQ3RELE9BQU8sSUFBSSxPQUFPLENBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDOUMsSUFBSTtnQkFDRixPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDckM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDWDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQztDQUNGLENBQUE7O1lBcEU2QixNQUFNO1lBQWdCLFVBQVU7WUFBeUIsdUJBQXVCOzs7QUFaakcsVUFBVTtJQUh0QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csVUFBVSxDQWdGdEI7U0FoRlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QXV0b3JpemFjaW9uU3NvUmVxfSBmcm9tICcuLi9fcmVxdWVzdC9hdXRvcml6YWNpb24tc3NvLXJlcSc7XG5pbXBvcnQge0F1dG9yaXphY2lvblNzb1Jlc30gZnJvbSAnLi4vX3Jlc3BvbnNlL2F1dG9yaXphY2lvbi1zc28tcmVzJztcbmltcG9ydCB7U2VjdXJlU2Vzc2lvbkNhc1NlcnZpY2V9IGZyb20gJy4vc2VjdXJlLXNlc3Npb24tY2FzLnNlcnZpY2UnO1xuaW1wb3J0IHtBY2NvdW50aW5nU3NvUmVxfSBmcm9tICcuLi9fcmVxdWVzdC9hY2NvdW50aW5nLXNzby1yZXEnO1xuaW1wb3J0IHtlbnZpcm9ubWVudH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3NvU2VydmljZSB7XG4gIGNhc1NlcnZlckxvZ2luID0gZW52aXJvbm1lbnQuY2FzU2VydmVyLmNvbmNhdCgnL2xvZ2luJyk7XG4gIGNhc1NlcnZpY2VUYXJnZXQgPSBlbnZpcm9ubWVudC5jYXNTZXJ2aWNlVGFyZ2V0O1xuICBjYXNTZXJ2aWNlUGF0aCA9IGVudmlyb25tZW50LmNhc1NlcnZpY2VUYXJnZXQuY29uY2F0KGVudmlyb25tZW50LmNhc1NlcnZpY2VDaGVjayk7XG4gIGNhc1ZhbGlkYXRlVXJsID0gZW52aXJvbm1lbnQuY2FzU2VydmVyLmNvbmNhdCgnL3AzL3NlcnZpY2VWYWxpZGF0ZScpO1xuICBjYXNHYXRld2F5QXV0b3JpemFjaW9uID0gZW52aXJvbm1lbnQuY2FzR2F0ZXdheUF1dG9yaXphY2lvbjtcbiAgY2FzR2F0ZXdheUFjY291bnRpbmcgPSBlbnZpcm9ubWVudC5jYXNHYXRld2F5QWNjb3VudGluZztcblxuICBwcml2YXRlIGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAnc3NvJzogJ3RydWUnXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBzZWN1cmVTdG9yYWdlOiBTZWN1cmVTZXNzaW9uQ2FzU2VydmljZSkge1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZGlyaWdlIGFsIGNhcyBzZXJ2ZXJcbiAgICogQGF1dG9yIE1hcmxvbiBQbMO6YXMgPG1wbHVhc0B0ZWxjb25ldC5lYz5cbiAgICogQHZlcnNpb24gMS4wXG4gICAqL1xuICBnb1RvQ0FTKCkge1xuICAgIHRoaXMucmVtb3ZlRGF0YSgpO1xuICAgIGNvbnN0IGNhc1VybExvZ2luID0gdGhpcy5jYXNTZXJ2ZXJMb2dpbi5jb25jYXQoJz9zZXJ2aWNlPScgKyB0aGlzLmNhc1NlcnZpY2VQYXRoKTtcbiAgICB0aGlzLnJlZGlyZWN0KGNhc1VybExvZ2luKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaW1waWEgZGF0b3MgZGUgc2VzacOzbiBleGlzdGVudGVcbiAgICogQGF1dG9yIE1hcmxvbiBQbMO6YXMgPG1wbHVhc0B0ZWxjb25ldC5lYz5cbiAgICogQHZlcnNpb24gMS4wXG4gICAqL1xuICByZW1vdmVEYXRhKCkge1xuICAgIHRoaXMuc2VjdXJlU3RvcmFnZS5jbGVhclNlc3Npb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGEgZWwgdGlja2V0IHJlY2liaWRvIHBvciBjYXMgc2VydmVyXG4gICAqIEBhdXRvciBNYXJsb24gUGzDumFzIDxtcGx1YXNAdGVsY29uZXQuZWM+XG4gICAqIEB2ZXJzaW9uIDEuMFxuICAgKlxuICAgKiBAcGFyYW0gdGlja2V0XG4gICAqL1xuICB2YWxpZGF0ZVRpY2tldCh0aWNrZXQ6IFN0cmluZykge1xuICAgIGNvbnN0IGNhc1ZhbGlkYXRlVGlja2V0ID0gdGhpcy5jYXNWYWxpZGF0ZVVybC5jb25jYXQoJz9zZXJ2aWNlPScgKyB0aGlzLmNhc1NlcnZpY2VQYXRoICsgJyZ0aWNrZXQ9JyArIHRpY2tldCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoY2FzVmFsaWRhdGVUaWNrZXQsIHtoZWFkZXJzOiB0aGlzLmh0dHBIZWFkZXJzLCByZXNwb25zZVR5cGU6ICd0ZXh0J30pO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYSBzaSBlbCB1c3VhcmlvIHRpZW5lIGF1dG9yaXphY2nDs25cbiAgICogQGF1dG9yIE1hcmxvbiBQbMO6YXMgPG1wbHVhc0B0ZWxjb25ldC5lYz5cbiAgICogQHZlcnNpb24gMS4wXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0XG4gICAqL1xuICBhdXRvcml6YWNpb25Tc28ocmVxdWVzdDogQXV0b3JpemFjaW9uU3NvUmVxKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PEF1dG9yaXphY2lvblNzb1Jlcz4odGhpcy5jYXNHYXRld2F5QXV0b3JpemFjaW9uLCByZXF1ZXN0LCB7aGVhZGVyczogdGhpcy5odHRwSGVhZGVyc30pO1xuICB9XG5cbiAgLyoqXG4gICAqIE3DqXRvZG8gcGFyYSByZWRpcmlnaXIgYSB1bmEgcGFnaW5hIGV4dGVybmFcbiAgICogQGF1dG9yIE1hcmxvbiBQbMO6YXMgPG1wbHVhc0B0ZWxjb25ldC5lYz5cbiAgICogQHZlcnNpb24gMS4wXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIHByaXZhdGUgcmVkaXJlY3QodXJsOiBzdHJpbmcsIHRhcmdldDogc3RyaW5nID0gJ19wYXJlbnQnKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc29sdmUoISF3aW5kb3cub3Blbih1cmwsIHRhcmdldCkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhY2NvdW50aW5nKHJlcXVlc3Q6IEFjY291bnRpbmdTc29SZXEpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLmNhc0dhdGV3YXlBY2NvdW50aW5nLCByZXF1ZXN0LCB7aGVhZGVyczogdGhpcy5odHRwSGVhZGVyc30pO1xuICB9XG59XG4iXX0=