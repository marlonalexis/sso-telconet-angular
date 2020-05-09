import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsoRoutingModule } from './sso.routing.module';
import { SsoCheckComponent } from './sso-check/sso-check.component';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerModule } from 'ngx-spinner';
let SsoModule = class SsoModule {
};
SsoModule = __decorate([
    NgModule({
        declarations: [SsoCheckComponent], imports: [
            CommonModule, SsoRoutingModule, NgxSpinnerModule
        ], providers: [CookieService]
    })
], SsoModule);
export { SsoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nzby10ZWxjb25ldC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvc3NvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQU83QyxJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFTO0NBQ3JCLENBQUE7QUFEWSxTQUFTO0lBTHJCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsT0FBTyxFQUFFO1lBQzFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0I7U0FDakQsRUFBRSxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDOUIsQ0FBQztHQUNXLFNBQVMsQ0FDckI7U0FEWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7U3NvUm91dGluZ01vZHVsZX0gZnJvbSAnLi9zc28ucm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHtTc29DaGVja0NvbXBvbmVudH0gZnJvbSAnLi9zc28tY2hlY2svc3NvLWNoZWNrLmNvbXBvbmVudCc7XG5pbXBvcnQge0Nvb2tpZVNlcnZpY2V9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5pbXBvcnQge05neFNwaW5uZXJNb2R1bGV9IGZyb20gJ25neC1zcGlubmVyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU3NvQ2hlY2tDb21wb25lbnRdLCBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLCBTc29Sb3V0aW5nTW9kdWxlLCBOZ3hTcGlubmVyTW9kdWxlXG4gIF0sIHByb3ZpZGVyczogW0Nvb2tpZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNzb01vZHVsZSB7XG59XG4iXX0=