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
export { SsoCheckComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NvLWNoZWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzby10ZWxjb25ldC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvc3NvLWNoZWNrL3Nzby1jaGVjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFRM0Q7SUFNRSwyQkFBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLFVBQXNCLEVBQ3RCLGNBQWlDLEVBQ2pDLGFBQXNDO1FBSjFELGlCQVFDO1FBUm1CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFUMUQsWUFBTyxHQUFZLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakMsb0JBQWUsR0FBdUIsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQy9ELHFCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQVE5QyxJQUFJLENBQUMsS0FB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U0FyRVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05neFNwaW5uZXJTZXJ2aWNlfSBmcm9tICduZ3gtc3Bpbm5lcic7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1Nzb1NlcnZpY2V9IGZyb20gJy4uL19zZXJ2aWNlL3Nzby5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIHhtbDJqcyBmcm9tICd4bWwyanMnO1xuaW1wb3J0IHtVc2VyU1NPfSBmcm9tICcuLi9fbW9kZWwvdXNlci1zc28nO1xuaW1wb3J0IHtBdXRvcml6YWNpb25Tc29SZXF9IGZyb20gJy4uL19yZXF1ZXN0L2F1dG9yaXphY2lvbi1zc28tcmVxJztcbmltcG9ydCB7U2VjdXJlU2Vzc2lvbkNhc1NlcnZpY2V9IGZyb20gJy4uL19zZXJ2aWNlL3NlY3VyZS1zZXNzaW9uLWNhcy5zZXJ2aWNlJztcbmltcG9ydCB7ZW52aXJvbm1lbnR9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zc28tY2hlY2snLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZ3gtc3Bpbm5lciBiZENvbG9yPVwicmdiYSg1MSw1MSw1MSwwLjgpXCIgc2l6ZT1cImxhcmdlXCIgY29sb3I9XCIjZmZmXCIgdHlwZT1cImJhbGwtYXRvbVwiIFtmdWxsU2NyZWVuXT1cInRydWVcIj48L25neC1zcGlubmVyPlxuICBgLCBzdHlsZXM6IFsnJ11cbn0pXG5leHBvcnQgY2xhc3MgU3NvQ2hlY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1c2VyU1NPOiBVc2VyU1NPID0gbmV3IFVzZXJTU08oKTtcbiAgYXV0b3JpemFjaW9uUmVxOiBBdXRvcml6YWNpb25Tc29SZXEgPSBuZXcgQXV0b3JpemFjaW9uU3NvUmVxKCk7XG4gIGNhc1NlcnZpY2VUYXJnZXQgPSBlbnZpcm9ubWVudC5jYXNTZXJ2aWNlVGFyZ2V0O1xuICB0aWNrZXQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzc29TZXJ2aWNlOiBTc29TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHNwaW5uZXJTZXJ2aWNlOiBOZ3hTcGlubmVyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzZWN1cmVTdG9yYWdlOiBTZWN1cmVTZXNzaW9uQ2FzU2VydmljZSkge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLnRpY2tldCA9IHBhcmFtcy50aWNrZXQ7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXIoKTtcbiAgICB0aGlzLnZhbGlkYXJUaWNrZXQoKTtcbiAgfVxuXG4gIHNwaW5uZXIoKSB7XG4gICAgdGhpcy5zcGlubmVyU2VydmljZS5zaG93KCk7XG4gIH1cblxuICAvKipcbiAgICogTcOpdG9kbyBxdWUgdmFsaWRhIGVsIHRpY2tldCBTU09cbiAgICogQGF1dG9yIE1hcmxvbiBQbMO6YXMgPG1wbHVhc0B0ZWxjb25ldC5lYz5cbiAgICogQHZlcnNpb24gMS4wXG4gICAqL1xuICB2YWxpZGFyVGlja2V0KCkge1xuICAgIGlmICh0aGlzLnNlY3VyZVN0b3JhZ2UudmFsaWRhdGVBdXRoU3NvKCkpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zc29TZXJ2aWNlLnZhbGlkYXRlVGlja2V0KHRoaXMudGlja2V0KS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLnJlcGxhY2UoL2NhczovZywgJycpO1xuICAgICAgICBsZXQgcmVzO1xuICAgICAgICB4bWwyanMucGFyc2VTdHJpbmcocmVzcG9uc2UsIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgcmVzID0gcmVzdWx0LnNlcnZpY2VSZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXMuYXV0aGVudGljYXRpb25GYWlsdXJlKSB7XG4gICAgICAgICAgdGhpcy5zc29TZXJ2aWNlLmdvVG9DQVMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVzZXJTU08udXNlcm5hbWUgPSByZXMuYXV0aGVudGljYXRpb25TdWNjZXNzWzBdLnVzZXJbMF07XG4gICAgICAgICAgdGhpcy51c2VyU1NPLmNlZHVsYSA9IHJlcy5hdXRoZW50aWNhdGlvblN1Y2Nlc3NbMF0uYXR0cmlidXRlc1swXS5jZWR1bGFbMF07XG4gICAgICAgICAgdGhpcy51c2VyU1NPLm5vbWJyZUNvbXBsZXRvID0gcmVzLmF1dGhlbnRpY2F0aW9uU3VjY2Vzc1swXS5hdHRyaWJ1dGVzWzBdLmRpc3BsYXlOYW1lWzBdO1xuICAgICAgICAgIHRoaXMudXNlclNTTy5jb3JyZW8gPSByZXMuYXV0aGVudGljYXRpb25TdWNjZXNzWzBdLmF0dHJpYnV0ZXNbMF0ubWFpbFswXTtcbiAgICAgICAgICB0aGlzLnVzZXJTU08ubm9tYnJlcyA9IHJlcy5hdXRoZW50aWNhdGlvblN1Y2Nlc3NbMF0uYXR0cmlidXRlc1swXS5jblswXTtcbiAgICAgICAgICB0aGlzLnVzZXJTU08uYXBlbGxpZG9zID0gcmVzLmF1dGhlbnRpY2F0aW9uU3VjY2Vzc1swXS5hdHRyaWJ1dGVzWzBdLnNuWzBdO1xuICAgICAgICAgIHRoaXMudXNlclNTTy5jYXJnbyA9IHJlcy5hdXRoZW50aWNhdGlvblN1Y2Nlc3NbMF0uYXR0cmlidXRlc1swXS5jYXJnb1swXTtcbiAgICAgICAgICB0aGlzLnVzZXJTU08udWlkTGRhcCA9IHJlcy5hdXRoZW50aWNhdGlvblN1Y2Nlc3NbMF0uYXR0cmlidXRlc1swXS51aWROdW1iZXJbMF07XG4gICAgICAgICAgdGhpcy5zZWN1cmVTdG9yYWdlLnNldFNlc3Npb24oSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyU1NPKSk7XG4gICAgICAgICAgdGhpcy5hdXRvcml6YWNpb25SZXEudXNlckxvZ2luID0gdGhpcy51c2VyU1NPLnVzZXJuYW1lO1xuICAgICAgICAgIHRoaXMuYXV0b3JpemFjaW9uUmVxLnNlcnZpY2VUYXJnZXQgPSB0aGlzLmNhc1NlcnZpY2VUYXJnZXQ7XG4gICAgICAgICAgdGhpcy5hdXRvcml6YWNpb25SZXEuaXBDbGllbnRlID0gJzEyNy4wLjAuMSc7XG4gICAgICAgICAgdGhpcy5hdXRvcml6YWNpb25SZXEuc2VydmljZVRpY2tldCA9IHRoaXMudGlja2V0O1xuICAgICAgICAgIHRoaXMuc3NvU2VydmljZS5hdXRvcml6YWNpb25Tc28odGhpcy5hdXRvcml6YWNpb25SZXEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlIHx8IHJlc3BvbnNlLmNvZEVycm9yICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5zc29TZXJ2aWNlLnJlbW92ZURhdGEoKTtcbiAgICAgICAgICAgICAgYWxlcnQoJ0V4aXN0ZSB1biBwcm9ibGVtYSBkZSBjb25leGnDs24sIFBvciBmYXZvciBjb211bmljYXJzZSBjb24gZWwgRGVwYXJ0YW1lbnRvIGRlIFNpc3RlbWFzLicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZWN1cmVTdG9yYWdlLnNldFNzb1Nlc3Npb25JZChyZXNwb25zZS5jYXNTZXNpb25JZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19