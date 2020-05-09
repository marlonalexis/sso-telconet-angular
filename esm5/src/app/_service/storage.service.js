import { __decorate } from "tslib";
import * as CryptoJS from 'crypto-js';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var SecureStorage = require('secure-web-storage');
var SECRET_KEY = 'T3lc0n3tC@sM@rL0n';
var StorageService = /** @class */ (function () {
    function StorageService() {
        this.secureStorage = new SecureStorage(localStorage, {
            hash: function hash(key) {
                key = CryptoJS.SHA256(key, SECRET_KEY);
                return key.toString();
            }, encrypt: function encrypt(data) {
                data = CryptoJS.AES.encrypt(data, SECRET_KEY);
                data = data.toString();
                return data;
            }, decrypt: function decrypt(data) {
                data = CryptoJS.AES.decrypt(data, SECRET_KEY);
                data = data.toString(CryptoJS.enc.Utf8);
                return data;
            }
        });
    }
    StorageService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
    StorageService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], StorageService);
    return StorageService;
}());
export { StorageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvLXRlbGNvbmV0LyIsInNvdXJjZXMiOlsic3JjL2FwcC9fc2VydmljZS9zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBQ3RDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRXpDLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3BELElBQU0sVUFBVSxHQUFHLG1CQUFtQixDQUFDO0FBS3ZDO0lBQ0U7UUFHTyxrQkFBYSxHQUFHLElBQUksYUFBYSxDQUFDLFlBQVksRUFBRTtZQUNyRCxJQUFJLEVBQUUsU0FBUyxJQUFJLENBQUMsR0FBRztnQkFDckIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsT0FBTyxDQUFDLElBQUk7Z0JBQy9CLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQzlDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLE9BQU8sQ0FBQyxJQUFJO2dCQUMvQixJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLElBQUksQ0FBQztZQUNkLENBQUM7U0FDRixDQUFDLENBQUM7SUFmSCxDQUFDOztJQUZVLGNBQWM7UUFIMUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGNBQWMsQ0FrQjFCO3lCQTNCRDtDQTJCQyxBQWxCRCxJQWtCQztTQWxCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IFNlY3VyZVN0b3JhZ2UgPSByZXF1aXJlKCdzZWN1cmUtd2ViLXN0b3JhZ2UnKTtcbmNvbnN0IFNFQ1JFVF9LRVkgPSAnVDNsYzBuM3RDQHNNQHJMMG4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgcHVibGljIHNlY3VyZVN0b3JhZ2UgPSBuZXcgU2VjdXJlU3RvcmFnZShsb2NhbFN0b3JhZ2UsIHtcbiAgICBoYXNoOiBmdW5jdGlvbiBoYXNoKGtleSkge1xuICAgICAga2V5ID0gQ3J5cHRvSlMuU0hBMjU2KGtleSwgU0VDUkVUX0tFWSk7XG4gICAgICByZXR1cm4ga2V5LnRvU3RyaW5nKCk7XG4gICAgfSwgZW5jcnlwdDogZnVuY3Rpb24gZW5jcnlwdChkYXRhKSB7XG4gICAgICBkYXRhID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoZGF0YSwgU0VDUkVUX0tFWSk7XG4gICAgICBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSwgZGVjcnlwdDogZnVuY3Rpb24gZGVjcnlwdChkYXRhKSB7XG4gICAgICBkYXRhID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoZGF0YSwgU0VDUkVUX0tFWSk7XG4gICAgICBkYXRhID0gZGF0YS50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH0pO1xufVxuIl19