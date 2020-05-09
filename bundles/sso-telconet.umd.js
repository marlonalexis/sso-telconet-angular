(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common/http'), require('secure-web-storage'), require('crypto-js'), require('ngx-cookie-service'), require('ngx-spinner'), require('xml2js'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('sso-telconet', ['exports', '@angular/core', '@angular/router', '@angular/common/http', 'secure-web-storage', 'crypto-js', 'ngx-cookie-service', 'ngx-spinner', 'xml2js', '@angular/common'], factory) :
    (global = global || self, factory(global['sso-telconet'] = {}, global.ng.core, global.ng.router, global.ng.common.http, global.secureWebStorage, global.cryptoJs, global.ngxCookieService, global.ngxSpinner, global.xml2js, global.ng.common));
}(this, (function (exports, core, router, http, secureWebStorage, cryptoJs, ngxCookieService, ngxSpinner, xml2js, common) { 'use strict';

    secureWebStorage = secureWebStorage && Object.prototype.hasOwnProperty.call(secureWebStorage, 'default') ? secureWebStorage['default'] : secureWebStorage;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var SECRET_KEY = 'T3lc0n3tC@sM@rL0n';
    var StorageService = /** @class */ (function () {
        function StorageService() {
            this.secureStorage = new secureWebStorage(localStorage, {
                hash: function hash(key) {
                    key = cryptoJs.SHA256(key, SECRET_KEY);
                    return key.toString();
                }, encrypt: function encrypt(data) {
                    data = cryptoJs.AES.encrypt(data, SECRET_KEY);
                    data = data.toString();
                    return data;
                }, decrypt: function decrypt(data) {
                    data = cryptoJs.AES.decrypt(data, SECRET_KEY);
                    data = data.toString(cryptoJs.enc.Utf8);
                    return data;
                }
            });
        }
        StorageService.ɵprov = core.ɵɵdefineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
        StorageService = __decorate([
            core.Injectable({
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
            { type: ngxCookieService.CookieService }
        ]; };
        SecureSessionCasService.ɵprov = core.ɵɵdefineInjectable({ factory: function SecureSessionCasService_Factory() { return new SecureSessionCasService(core.ɵɵinject(StorageService), core.ɵɵinject(ngxCookieService.CookieService)); }, token: SecureSessionCasService, providedIn: "root" });
        SecureSessionCasService = __decorate([
            core.Injectable({
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
        function SsoService(router, http$1, secureStorage) {
            this.router = router;
            this.http = http$1;
            this.secureStorage = secureStorage;
            this.casServerLogin = environment.casServer.concat('/login');
            this.casServiceTarget = environment.casServiceTarget;
            this.casServicePath = environment.casServiceTarget.concat(environment.casServiceCheck);
            this.casValidateUrl = environment.casServer.concat('/p3/serviceValidate');
            this.casGatewayAutorizacion = environment.casGatewayAutorizacion;
            this.casGatewayAccounting = environment.casGatewayAccounting;
            this.httpHeaders = new http.HttpHeaders({
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
            { type: router.Router },
            { type: http.HttpClient },
            { type: SecureSessionCasService }
        ]; };
        SsoService.ɵprov = core.ɵɵdefineInjectable({ factory: function SsoService_Factory() { return new SsoService(core.ɵɵinject(router.Router), core.ɵɵinject(http.HttpClient), core.ɵɵinject(SecureSessionCasService)); }, token: SsoService, providedIn: "root" });
        SsoService = __decorate([
            core.Injectable({
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
        SsoGuard.ɵprov = core.ɵɵdefineInjectable({ factory: function SsoGuard_Factory() { return new SsoGuard(core.ɵɵinject(SsoService), core.ɵɵinject(SecureSessionCasService)); }, token: SsoGuard, providedIn: "root" });
        SsoGuard = __decorate([
            core.Injectable({
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
            core.Injectable()
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
                    xml2js.parseString(response, function (error, result) {
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
            { type: router.ActivatedRoute },
            { type: router.Router },
            { type: SsoService },
            { type: ngxSpinner.NgxSpinnerService },
            { type: SecureSessionCasService }
        ]; };
        SsoCheckComponent = __decorate([
            core.Component({
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
            core.NgModule({
                imports: [router.RouterModule.forRoot(routes)],
                exports: [router.RouterModule]
            })
        ], SsoRoutingModule);
        return SsoRoutingModule;
    }());

    var SsoModule = /** @class */ (function () {
        function SsoModule() {
        }
        SsoModule = __decorate([
            core.NgModule({
                declarations: [SsoCheckComponent], imports: [
                    common.CommonModule, SsoRoutingModule, ngxSpinner.NgxSpinnerModule
                ], providers: [ngxCookieService.CookieService]
            })
        ], SsoModule);
        return SsoModule;
    }());

    exports.AccountingSsoReq = AccountingSsoReq;
    exports.AutorizacionSsoReq = AutorizacionSsoReq;
    exports.AutorizacionSsoRes = AutorizacionSsoRes;
    exports.SecureSessionCasService = SecureSessionCasService;
    exports.SsoCheckComponent = SsoCheckComponent;
    exports.SsoGuard = SsoGuard;
    exports.SsoInterceptor = SsoInterceptor;
    exports.SsoModule = SsoModule;
    exports.SsoRoutingModule = SsoRoutingModule;
    exports.SsoService = SsoService;
    exports.StorageService = StorageService;
    exports.UserSSO = UserSSO;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sso-telconet.umd.js.map
