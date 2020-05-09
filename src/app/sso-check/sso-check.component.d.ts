import { OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { SsoService } from '../_service/sso.service';
import { UserSSO } from '../_model/user-sso';
import { AutorizacionSsoReq } from '../_request/autorizacion-sso-req';
import { SecureSessionCasService } from '../_service/secure-session-cas.service';
export declare class SsoCheckComponent implements OnInit {
    private route;
    private router;
    private ssoService;
    private spinnerService;
    private secureStorage;
    userSSO: UserSSO;
    autorizacionReq: AutorizacionSsoReq;
    casServiceTarget: string;
    ticket: string;
    constructor(route: ActivatedRoute, router: Router, ssoService: SsoService, spinnerService: NgxSpinnerService, secureStorage: SecureSessionCasService);
    ngOnInit(): void;
    spinner(): void;
    /**
     * Método que valida el ticket SSO
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     */
    validarTicket(): void;
}
