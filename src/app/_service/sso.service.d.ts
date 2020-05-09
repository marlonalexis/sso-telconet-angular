import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AutorizacionSsoReq } from '../_request/autorizacion-sso-req';
import { AutorizacionSsoRes } from '../_response/autorizacion-sso-res';
import { SecureSessionCasService } from './secure-session-cas.service';
import { AccountingSsoReq } from '../_request/accounting-sso-req';
export declare class SsoService {
    private router;
    private http;
    private secureStorage;
    casServerLogin: string;
    casServiceTarget: string;
    casServicePath: string;
    casValidateUrl: string;
    casGatewayAutorizacion: string;
    casGatewayAccounting: string;
    private httpHeaders;
    constructor(router: Router, http: HttpClient, secureStorage: SecureSessionCasService);
    /**
     * Redirige al cas server
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     */
    goToCAS(): void;
    /**
     * Limpia datos de sesión existente
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     */
    removeData(): void;
    /**
     * Valida el ticket recibido por cas server
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     *
     * @param ticket
     */
    validateTicket(ticket: String): import("rxjs").Observable<string>;
    /**
     * Valida si el usuario tiene autorización
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     *
     * @param request
     */
    autorizacionSso(request: AutorizacionSsoReq): import("rxjs").Observable<AutorizacionSsoRes>;
    /**
     * Método para redirigir a una pagina externa
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     *
     * @param {string} url
     * @param {string} target
     * @returns {Promise<boolean>}
     */
    private redirect;
    accounting(request: AccountingSsoReq): import("rxjs").Observable<any>;
}
