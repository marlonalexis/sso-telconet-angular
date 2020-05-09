import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, ɵɵinject, Component, NgModule } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import secureWebStorage from 'secure-web-storage';
import { SHA256, AES, enc } from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { parseString } from 'xml2js';
import { CommonModule } from '@angular/common';

const SECRET_KEY = 'T3lc0n3tC@sM@rL0n';
let StorageService = class StorageService {
    constructor() {
        this.secureStorage = new secureWebStorage(localStorage, {
            hash: function hash(key) {
                key = SHA256(key, SECRET_KEY);
                return key.toString();
            }, encrypt: function encrypt(data) {
                data = AES.encrypt(data, SECRET_KEY);
                data = data.toString();
                return data;
            }, decrypt: function decrypt(data) {
                data = AES.decrypt(data, SECRET_KEY);
                data = data.toString(enc.Utf8);
                return data;
            }
        });
    }
};
StorageService.ɵprov = ɵɵdefineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
StorageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StorageService);

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
SecureSessionCasService.ɵprov = ɵɵdefineInjectable({ factory: function SecureSessionCasService_Factory() { return new SecureSessionCasService(ɵɵinject(StorageService), ɵɵinject(CookieService)); }, token: SecureSessionCasService, providedIn: "root" });
SecureSessionCasService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SecureSessionCasService);

const environment = {
    production: false,
    casServer: 'https://sso.telconet.ec/cas',
    casServiceTarget: 'http://localhost:4200/',
    casServiceCheck: 'sso/check',
    casGatewayAutorizacion: 'http://gw-cas.telconet.ec:9000/gateway/autorizacion',
    casGatewayAccounting: 'http://gw-cas.telconet.ec:9000/check_sso',
};

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
SsoService.ɵprov = ɵɵdefineInjectable({ factory: function SsoService_Factory() { return new SsoService(ɵɵinject(Router), ɵɵinject(HttpClient), ɵɵinject(SecureSessionCasService)); }, token: SsoService, providedIn: "root" });
SsoService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SsoService);

class AccountingSsoReq {
}

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
SsoGuard.ɵprov = ɵɵdefineInjectable({ factory: function SsoGuard_Factory() { return new SsoGuard(ɵɵinject(SsoService), ɵɵinject(SecureSessionCasService)); }, token: SsoGuard, providedIn: "root" });
SsoGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SsoGuard);

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

class UserSSO {
}

class AutorizacionSsoReq {
}

class AutorizacionSsoRes {
}

let SsoCheckComponent = class SsoCheckComponent {
    constructor(route, router, ssoService, spinnerService, secureStorage) {
        this.route = route;
        this.router = router;
        this.ssoService = ssoService;
        this.spinnerService = spinnerService;
        this.secureStorage = secureStorage;
        this.userSSO = new UserSSO();
        this.autorizacionReq = new AutorizacionSsoReq();
        this.casServiceTarget = environment.casServiceTarget;
        this.route.queryParams.subscribe(params => {
            this.ticket = params.ticket;
        });
    }
    ngOnInit() {
        this.spinner();
        this.validarTicket();
    }
    spinner() {
        this.spinnerService.show();
    }
    /**
     * Método que valida el ticket SSO
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     */
    validarTicket() {
        if (this.secureStorage.validateAuthSso()) {
            this.router.navigate(['/']);
        }
        else {
            this.ssoService.validateTicket(this.ticket).subscribe(response => {
                response = response.replace(/cas:/g, '');
                let res;
                parseString(response, (error, result) => {
                    res = result.serviceResponse;
                });
                if (res.authenticationFailure) {
                    this.ssoService.goToCAS();
                }
                else {
                    this.userSSO.username = res.authenticationSuccess[0].user[0];
                    this.userSSO.cedula = res.authenticationSuccess[0].attributes[0].cedula[0];
                    this.userSSO.nombreCompleto = res.authenticationSuccess[0].attributes[0].displayName[0];
                    this.userSSO.correo = res.authenticationSuccess[0].attributes[0].mail[0];
                    this.userSSO.nombres = res.authenticationSuccess[0].attributes[0].cn[0];
                    this.userSSO.apellidos = res.authenticationSuccess[0].attributes[0].sn[0];
                    this.userSSO.cargo = res.authenticationSuccess[0].attributes[0].cargo[0];
                    this.userSSO.uidLdap = res.authenticationSuccess[0].attributes[0].uidNumber[0];
                    this.secureStorage.setSession(JSON.stringify(this.userSSO));
                    this.autorizacionReq.userLogin = this.userSSO.username;
                    this.autorizacionReq.serviceTarget = this.casServiceTarget;
                    this.autorizacionReq.ipCliente = '127.0.0.1';
                    this.autorizacionReq.serviceTicket = this.ticket;
                    this.ssoService.autorizacionSso(this.autorizacionReq).subscribe(response => {
                        if (!response || response.codError != null) {
                            this.ssoService.removeData();
                            alert('Existe un problema de conexión, Por favor comunicarse con el Departamento de Sistemas.');
                        }
                        else {
                            this.secureStorage.setSsoSessionId(response.casSesionId);
                        }
                        this.router.navigate(['/']);
                    });
                }
            });
        }
    }
};
SsoCheckComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Router },
    { type: SsoService },
    { type: NgxSpinnerService },
    { type: SecureSessionCasService }
];
SsoCheckComponent = __decorate([
    Component({
        selector: 'app-sso-check',
        template: `
    <ngx-spinner bdColor="rgba(51,51,51,0.8)" size="large" color="#fff" type="ball-atom" [fullScreen]="true"></ngx-spinner>
  `,
        styles: ['']
    })
], SsoCheckComponent);

const routes = [
    { path: 'sso/check', component: SsoCheckComponent }
];
let SsoRoutingModule = class SsoRoutingModule {
};
SsoRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], SsoRoutingModule);

let SsoModule = class SsoModule {
};
SsoModule = __decorate([
    NgModule({
        declarations: [SsoCheckComponent], imports: [
            CommonModule, SsoRoutingModule, NgxSpinnerModule
        ], providers: [CookieService]
    })
], SsoModule);

/**
 * Generated bundle index. Do not edit.
 */

export { AccountingSsoReq, AutorizacionSsoReq, AutorizacionSsoRes, SecureSessionCasService, SsoCheckComponent, SsoGuard, SsoInterceptor, SsoModule, SsoRoutingModule, SsoService, StorageService, UserSSO };
//# sourceMappingURL=sso-telconet.js.map
