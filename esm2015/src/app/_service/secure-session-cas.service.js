import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { CookieService } from 'ngx-cookie-service';
import * as i0 from "@angular/core";
import * as i1 from "./storage.service";
import * as i2 from "ngx-cookie-service";
let SecureSessionCasService = class SecureSessionCasService {
    constructor(storageService, cookieService) {
        this.storageService = storageService;
        this.cookieService = cookieService;
        this.ssoSessionCok = 'SSO_SESSIONID';
        this.key = 'userSSO';
    }
    setSession(value) {
        this.storageService.secureStorage.setItem(this.key, value);
    }
    getSession() {
        try {
            return JSON.parse(this.storageService.secureStorage.getItem(this.key));
        }
        catch (error) {
            return null;
        }
    }
    clearSession() {
        this.storageService.secureStorage.clear();
    }
    getSsoSessionId() {
        return this.cookieService.get(this.ssoSessionCok);
    }
    setSsoSessionId(value) {
        this.cookieService.set(this.ssoSessionCok, value, null, '/');
    }
    /**
     * Verifica si existe usuario autenticado
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     */
    validateAuthSso() {
        return !!(this.getSession() && this.getSsoSessionId());
    }
};
SecureSessionCasService.ctorParameters = () => [
    { type: StorageService },
    { type: CookieService }
];
SecureSessionCasService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SecureSessionCasService_Factory() { return new SecureSessionCasService(i0.ɵɵinject(i1.StorageService), i0.ɵɵinject(i2.CookieService)); }, token: SecureSessionCasService, providedIn: "root" });
SecureSessionCasService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SecureSessionCasService);
export { SecureSessionCasService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLXNlc3Npb24tY2FzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zc28tdGVsY29uZXQvIiwic291cmNlcyI6WyJzcmMvYXBwL19zZXJ2aWNlL3NlY3VyZS1zZXNzaW9uLWNhcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFLakQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFDbEMsWUFBb0IsY0FBOEIsRUFBVSxhQUE0QjtRQUFwRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUd4RixrQkFBYSxHQUFHLGVBQWUsQ0FBQztRQUNoQyxRQUFHLEdBQVcsU0FBUyxDQUFDO0lBSHhCLENBQUM7SUFLRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUk7WUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxlQUFlLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxlQUFlO1FBQ2IsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNGLENBQUE7O1lBdENxQyxjQUFjO1lBQXlCLGFBQWE7OztBQUQ3RSx1QkFBdUI7SUFIbkMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHVCQUF1QixDQXVDbkM7U0F2Q1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3RvcmFnZVNlcnZpY2V9IGZyb20gJy4vc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7VXNlclNTT30gZnJvbSAnLi4vX21vZGVsL3VzZXItc3NvJztcbmltcG9ydCB7Q29va2llU2VydmljZX0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VjdXJlU2Vzc2lvbkNhc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSwgcHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlKSB7XG4gIH1cblxuICBzc29TZXNzaW9uQ29rID0gJ1NTT19TRVNTSU9OSUQnO1xuICBrZXk6IHN0cmluZyA9ICd1c2VyU1NPJztcblxuICBzZXRTZXNzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNlY3VyZVN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0U2Vzc2lvbigpOiBVc2VyU1NPIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5zdG9yYWdlU2VydmljZS5zZWN1cmVTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJTZXNzaW9uKCkge1xuICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2VjdXJlU3RvcmFnZS5jbGVhcigpO1xuICB9XG5cbiAgZ2V0U3NvU2Vzc2lvbklkKCkge1xuICAgIHJldHVybiB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KHRoaXMuc3NvU2Vzc2lvbkNvayk7XG4gIH1cblxuICBzZXRTc29TZXNzaW9uSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuY29va2llU2VydmljZS5zZXQodGhpcy5zc29TZXNzaW9uQ29rLCB2YWx1ZSwgbnVsbCwgJy8nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmljYSBzaSBleGlzdGUgdXN1YXJpbyBhdXRlbnRpY2Fkb1xuICAgKiBAYXV0b3IgTWFybG9uIFBsw7phcyA8bXBsdWFzQHRlbGNvbmV0LmVjPlxuICAgKiBAdmVyc2lvbiAxLjBcbiAgICovXG4gIHZhbGlkYXRlQXV0aFNzbygpIHtcbiAgICByZXR1cm4gISEodGhpcy5nZXRTZXNzaW9uKCkgJiYgdGhpcy5nZXRTc29TZXNzaW9uSWQoKSk7XG4gIH1cbn1cbiJdfQ==