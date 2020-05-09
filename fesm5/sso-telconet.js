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

var SECRET_KEY = 'T3lc0n3tC@sM@rL0n';
var StorageService = /** @class */ (function () {
    function StorageService() {
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
    StorageService.ɵprov = ɵɵdefineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
    StorageService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], StorageService);
    return StorageService;
}());

var SecureSessionCasService = /** @class */ (function () {
    function SecureSessionCasService(storageService, cookieService) {
        this.storageService = storageService;
        this.cookieService = cookieService;
        this.ssoSessionCok = 'SSO_SESSIONID';
        this.key = 'userSSO';
    }
    SecureSessionCasService.prototype.setSession = function (value) {
        this.storageService.secureStorage.setItem(this.key, value);
    };
    SecureSessionCasService.prototype.getSession = function () {
        try {
            return JSON.parse(this.storageService.secureStorage.getItem(this.key));
        }
        catch (error) {
            return null;
        }
    };
    SecureSessionCasService.prototype.clearSession = function () {
        this.storageService.secureStorage.clear();
    };
    SecureSessionCasService.prototype.getSsoSessionId = function () {
        return this.cookieService.get(this.ssoSessionCok);
    };
    SecureSessionCasService.prototype.setSsoSessionId = function (value) {
        this.cookieService.set(this.ssoSessionCok, value, null, '/');
    };
    /**
     * Verifica si existe usuario autenticado
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     */
    SecureSessionCasService.prototype.validateAuthSso = function () {
        return !!(this.getSession() && this.getSsoSessionId());
    };
    SecureSessionCasService.ctorParameters = function () { return [
        { type: StorageService },
        { type: CookieService }
    ]; };
    SecureSessionCasService.ɵprov = ɵɵdefineInjectable({ factory: function SecureSessionCasService_Factory() { return new SecureSessionCasService(ɵɵinject(StorageService), ɵɵinject(CookieService)); }, token: SecureSessionCasService, providedIn: "root" });
    SecureSessionCasService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], SecureSessionCasService);
    return SecureSessionCasService;
}());

var environment = {
    production: false,
    casServer: 'https://sso.telconet.ec/cas',
    casServiceTarget: 'http://localhost:4200/',
    casServiceCheck: 'sso/check',
    casGatewayAutorizacion: 'http://gw-cas.telconet.ec:9000/gateway/autorizacion',
    casGatewayAccounting: 'http://gw-cas.telconet.ec:9000/check_sso',
};

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
    SsoService.ɵprov = ɵɵdefineInjectable({ factory: function SsoService_Factory() { return new SsoService(ɵɵinject(Router), ɵɵinject(HttpClient), ɵɵinject(SecureSessionCasService)); }, token: SsoService, providedIn: "root" });
    SsoService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], SsoService);
    return SsoService;
}());

var AccountingSsoReq = /** @class */ (function () {
    function AccountingSsoReq() {
    }
    return AccountingSsoReq;
}());

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
    SsoGuard.ɵprov = ɵɵdefineInjectable({ factory: function SsoGuard_Factory() { return new SsoGuard(ɵɵinject(SsoService), ɵɵinject(SecureSessionCasService)); }, token: SsoGuard, providedIn: "root" });
    SsoGuard = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], SsoGuard);
    return SsoGuard;
}());

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

var UserSSO = /** @class */ (function () {
    function UserSSO() {
    }
    return UserSSO;
}());

var AutorizacionSsoReq = /** @class */ (function () {
    function AutorizacionSsoReq() {
    }
    return AutorizacionSsoReq;
}());

var AutorizacionSsoRes = /** @class */ (function () {
    function AutorizacionSsoRes() {
    }
    return AutorizacionSsoRes;
}());

var SsoCheckComponent = /** @class */ (function () {
    function SsoCheckComponent(route, router, ssoService, spinnerService, secureStorage) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.ssoService = ssoService;
        this.spinnerService = spinnerService;
        this.secureStorage = secureStorage;
        this.userSSO = new UserSSO();
        this.autorizacionReq = new AutorizacionSsoReq();
        this.casServiceTarget = environment.casServiceTarget;
        this.route.queryParams.subscribe(function (params) {
            _this.ticket = params.ticket;
        });
    }
    SsoCheckComponent.prototype.ngOnInit = function () {
        this.spinner();
        this.validarTicket();
    };
    SsoCheckComponent.prototype.spinner = function () {
        this.spinnerService.show();
    };
    /**
     * Método que valida el ticket SSO
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     */
    SsoCheckComponent.prototype.validarTicket = function () {
        var _this = this;
        if (this.secureStorage.validateAuthSso()) {
            this.router.navigate(['/']);
        }
        else {
            this.ssoService.validateTicket(this.ticket).subscribe(function (response) {
                response = response.replace(/cas:/g, '');
                var res;
                parseString(response, function (error, result) {
                    res = result.serviceResponse;
                });
                if (res.authenticationFailure) {
                    _this.ssoService.goToCAS();
                }
                else {
                    _this.userSSO.username = res.authenticationSuccess[0].user[0];
                    _this.userSSO.cedula = res.authenticationSuccess[0].attributes[0].cedula[0];
                    _this.userSSO.nombreCompleto = res.authenticationSuccess[0].attributes[0].displayName[0];
                    _this.userSSO.correo = res.authenticationSuccess[0].attributes[0].mail[0];
                    _this.userSSO.nombres = res.authenticationSuccess[0].attributes[0].cn[0];
                    _this.userSSO.apellidos = res.authenticationSuccess[0].attributes[0].sn[0];
                    _this.userSSO.cargo = res.authenticationSuccess[0].attributes[0].cargo[0];
                    _this.userSSO.uidLdap = res.authenticationSuccess[0].attributes[0].uidNumber[0];
                    _this.secureStorage.setSession(JSON.stringify(_this.userSSO));
                    _this.autorizacionReq.userLogin = _this.userSSO.username;
                    _this.autorizacionReq.serviceTarget = _this.casServiceTarget;
                    _this.autorizacionReq.ipCliente = '127.0.0.1';
                    _this.autorizacionReq.serviceTicket = _this.ticket;
                    _this.ssoService.autorizacionSso(_this.autorizacionReq).subscribe(function (response) {
                        if (!response || response.codError != null) {
                            _this.ssoService.removeData();
                            alert('Existe un problema de conexión, Por favor comunicarse con el Departamento de Sistemas.');
                        }
                        else {
                            _this.secureStorage.setSsoSessionId(response.casSesionId);
                        }
                        _this.router.navigate(['/']);
                    });
                }
            });
        }
    };
    SsoCheckComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Router },
        { type: SsoService },
        { type: NgxSpinnerService },
        { type: SecureSessionCasService }
    ]; };
    SsoCheckComponent = __decorate([
        Component({
            selector: 'app-sso-check',
            template: "\n    <ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"large\" color=\"#fff\" type=\"ball-atom\" [fullScreen]=\"true\"></ngx-spinner>\n  ",
            styles: ['']
        })
    ], SsoCheckComponent);
    return SsoCheckComponent;
}());

var routes = [
    { path: 'sso/check', component: SsoCheckComponent }
];
var SsoRoutingModule = /** @class */ (function () {
    function SsoRoutingModule() {
    }
    SsoRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], SsoRoutingModule);
    return SsoRoutingModule;
}());

var SsoModule = /** @class */ (function () {
    function SsoModule() {
    }
    SsoModule = __decorate([
        NgModule({
            declarations: [SsoCheckComponent], imports: [
                CommonModule, SsoRoutingModule, NgxSpinnerModule
            ], providers: [CookieService]
        })
    ], SsoModule);
    return SsoModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { AccountingSsoReq, AutorizacionSsoReq, AutorizacionSsoRes, SecureSessionCasService, SsoCheckComponent, SsoGuard, SsoInterceptor, SsoModule, SsoRoutingModule, SsoService, StorageService, UserSSO };
//# sourceMappingURL=sso-telconet.js.map
