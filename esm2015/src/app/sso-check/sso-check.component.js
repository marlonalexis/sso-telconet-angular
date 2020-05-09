import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { SsoService } from '../_service/sso.service';
import * as xml2js from 'xml2js';
import { UserSSO } from '../_model/user-sso';
import { AutorizacionSsoReq } from '../_request/autorizacion-sso-req';
import { SecureSessionCasService } from '../_service/secure-session-cas.service';
import { environment } from '../../environments/environment';
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
                xml2js.parseString(response, (error, result) => {
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
export { SsoCheckComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NvLWNoZWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzby10ZWxjb25ldC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvc3NvLWNoZWNrL3Nzby1jaGVjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFRM0QsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFNNUIsWUFBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLFVBQXNCLEVBQ3RCLGNBQWlDLEVBQ2pDLGFBQXNDO1FBSnRDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFUMUQsWUFBTyxHQUFZLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakMsb0JBQWUsR0FBdUIsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQy9ELHFCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztR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QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ3hTcGlubmVyU2VydmljZX0gZnJvbSAnbmd4LXNwaW5uZXInO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtTc29TZXJ2aWNlfSBmcm9tICcuLi9fc2VydmljZS9zc28uc2VydmljZSc7XG5pbXBvcnQgKiBhcyB4bWwyanMgZnJvbSAneG1sMmpzJztcbmltcG9ydCB7VXNlclNTT30gZnJvbSAnLi4vX21vZGVsL3VzZXItc3NvJztcbmltcG9ydCB7QXV0b3JpemFjaW9uU3NvUmVxfSBmcm9tICcuLi9fcmVxdWVzdC9hdXRvcml6YWNpb24tc3NvLXJlcSc7XG5pbXBvcnQge1NlY3VyZVNlc3Npb25DYXNTZXJ2aWNlfSBmcm9tICcuLi9fc2VydmljZS9zZWN1cmUtc2Vzc2lvbi1jYXMuc2VydmljZSc7XG5pbXBvcnQge2Vudmlyb25tZW50fSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc3NvLWNoZWNrJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmd4LXNwaW5uZXIgYmRDb2xvcj1cInJnYmEoNTEsNTEsNTEsMC44KVwiIHNpemU9XCJsYXJnZVwiIGNvbG9yPVwiI2ZmZlwiIHR5cGU9XCJiYWxsLWF0b21cIiBbZnVsbFNjcmVlbl09XCJ0cnVlXCI+PC9uZ3gtc3Bpbm5lcj5cbiAgYCwgc3R5bGVzOiBbJyddXG59KVxuZXhwb3J0IGNsYXNzIFNzb0NoZWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXNlclNTTzogVXNlclNTTyA9IG5ldyBVc2VyU1NPKCk7XG4gIGF1dG9yaXphY2lvblJlcTogQXV0b3JpemFjaW9uU3NvUmVxID0gbmV3IEF1dG9yaXphY2lvblNzb1JlcSgpO1xuICBjYXNTZXJ2aWNlVGFyZ2V0ID0gZW52aXJvbm1lbnQuY2FzU2VydmljZVRhcmdldDtcbiAgdGlja2V0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgc3NvU2VydmljZTogU3NvU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzcGlubmVyU2VydmljZTogTmd4U3Bpbm5lclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2VjdXJlU3RvcmFnZTogU2VjdXJlU2Vzc2lvbkNhc1NlcnZpY2UpIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy50aWNrZXQgPSBwYXJhbXMudGlja2V0O1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyKCk7XG4gICAgdGhpcy52YWxpZGFyVGlja2V0KCk7XG4gIH1cblxuICBzcGlubmVyKCkge1xuICAgIHRoaXMuc3Bpbm5lclNlcnZpY2Uuc2hvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE3DqXRvZG8gcXVlIHZhbGlkYSBlbCB0aWNrZXQgU1NPXG4gICAqIEBhdXRvciBNYXJsb24gUGzDumFzIDxtcGx1YXNAdGVsY29uZXQuZWM+XG4gICAqIEB2ZXJzaW9uIDEuMFxuICAgKi9cbiAgdmFsaWRhclRpY2tldCgpIHtcbiAgICBpZiAodGhpcy5zZWN1cmVTdG9yYWdlLnZhbGlkYXRlQXV0aFNzbygpKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3NvU2VydmljZS52YWxpZGF0ZVRpY2tldCh0aGlzLnRpY2tldCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZS5yZXBsYWNlKC9jYXM6L2csICcnKTtcbiAgICAgICAgbGV0IHJlcztcbiAgICAgICAgeG1sMmpzLnBhcnNlU3RyaW5nKHJlc3BvbnNlLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHJlcyA9IHJlc3VsdC5zZXJ2aWNlUmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzLmF1dGhlbnRpY2F0aW9uRmFpbHVyZSkge1xuICAgICAgICAgIHRoaXMuc3NvU2VydmljZS5nb1RvQ0FTKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51c2VyU1NPLnVzZXJuYW1lID0gcmVzLmF1dGhlbnRpY2F0aW9uU3VjY2Vzc1swXS51c2VyWzBdO1xuICAgICAgICAgIHRoaXMudXNlclNTTy5jZWR1bGEgPSByZXMuYXV0aGVudGljYXRpb25TdWNjZXNzWzBdLmF0dHJpYnV0ZXNbMF0uY2VkdWxhWzBdO1xuICAgICAgICAgIHRoaXMudXNlclNTTy5ub21icmVDb21wbGV0byA9IHJlcy5hdXRoZW50aWNhdGlvblN1Y2Nlc3NbMF0uYXR0cmlidXRlc1swXS5kaXNwbGF5TmFtZVswXTtcbiAgICAgICAgICB0aGlzLnVzZXJTU08uY29ycmVvID0gcmVzLmF1dGhlbnRpY2F0aW9uU3VjY2Vzc1swXS5hdHRyaWJ1dGVzWzBdLm1haWxbMF07XG4gICAgICAgICAgdGhpcy51c2VyU1NPLm5vbWJyZXMgPSByZXMuYXV0aGVudGljYXRpb25TdWNjZXNzWzBdLmF0dHJpYnV0ZXNbMF0uY25bMF07XG4gICAgICAgICAgdGhpcy51c2VyU1NPLmFwZWxsaWRvcyA9IHJlcy5hdXRoZW50aWNhdGlvblN1Y2Nlc3NbMF0uYXR0cmlidXRlc1swXS5zblswXTtcbiAgICAgICAgICB0aGlzLnVzZXJTU08uY2FyZ28gPSByZXMuYXV0aGVudGljYXRpb25TdWNjZXNzWzBdLmF0dHJpYnV0ZXNbMF0uY2FyZ29bMF07XG4gICAgICAgICAgdGhpcy51c2VyU1NPLnVpZExkYXAgPSByZXMuYXV0aGVudGljYXRpb25TdWNjZXNzWzBdLmF0dHJpYnV0ZXNbMF0udWlkTnVtYmVyWzBdO1xuICAgICAgICAgIHRoaXMuc2VjdXJlU3RvcmFnZS5zZXRTZXNzaW9uKEpTT04uc3RyaW5naWZ5KHRoaXMudXNlclNTTykpO1xuICAgICAgICAgIHRoaXMuYXV0b3JpemFjaW9uUmVxLnVzZXJMb2dpbiA9IHRoaXMudXNlclNTTy51c2VybmFtZTtcbiAgICAgICAgICB0aGlzLmF1dG9yaXphY2lvblJlcS5zZXJ2aWNlVGFyZ2V0ID0gdGhpcy5jYXNTZXJ2aWNlVGFyZ2V0O1xuICAgICAgICAgIHRoaXMuYXV0b3JpemFjaW9uUmVxLmlwQ2xpZW50ZSA9ICcxMjcuMC4wLjEnO1xuICAgICAgICAgIHRoaXMuYXV0b3JpemFjaW9uUmVxLnNlcnZpY2VUaWNrZXQgPSB0aGlzLnRpY2tldDtcbiAgICAgICAgICB0aGlzLnNzb1NlcnZpY2UuYXV0b3JpemFjaW9uU3NvKHRoaXMuYXV0b3JpemFjaW9uUmVxKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5jb2RFcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3NvU2VydmljZS5yZW1vdmVEYXRhKCk7XG4gICAgICAgICAgICAgIGFsZXJ0KCdFeGlzdGUgdW4gcHJvYmxlbWEgZGUgY29uZXhpw7NuLCBQb3IgZmF2b3IgY29tdW5pY2Fyc2UgY29uIGVsIERlcGFydGFtZW50byBkZSBTaXN0ZW1hcy4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2VjdXJlU3RvcmFnZS5zZXRTc29TZXNzaW9uSWQocmVzcG9uc2UuY2FzU2VzaW9uSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==