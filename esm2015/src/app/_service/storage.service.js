import { __decorate } from "tslib";
import * as CryptoJS from 'crypto-js';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const SecureStorage = require('secure-web-storage');
const SECRET_KEY = 'T3lc0n3tC@sM@rL0n';
let StorageService = class StorageService {
    constructor() {
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
};
StorageService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
StorageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StorageService);
export { StorageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3NvLXRlbGNvbmV0LyIsInNvdXJjZXMiOlsic3JjL2FwcC9fc2VydmljZS9zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBQ3RDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRXpDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3BELE1BQU0sVUFBVSxHQUFHLG1CQUFtQixDQUFDO0FBS3ZDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFDekI7UUFHTyxrQkFBYSxHQUFHLElBQUksYUFBYSxDQUFDLFlBQVksRUFBRTtZQUNyRCxJQUFJLEVBQUUsU0FBUyxJQUFJLENBQUMsR0FBRztnQkFDckIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsT0FBTyxDQUFDLElBQUk7Z0JBQy9CLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQzlDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLE9BQU8sQ0FBQyxJQUFJO2dCQUMvQixJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLElBQUksQ0FBQztZQUNkLENBQUM7U0FDRixDQUFDLENBQUM7SUFmSCxDQUFDO0NBZ0JGLENBQUE7O0FBbEJZLGNBQWM7SUFIMUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGNBQWMsQ0FrQjFCO1NBbEJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgU2VjdXJlU3RvcmFnZSA9IHJlcXVpcmUoJ3NlY3VyZS13ZWItc3RvcmFnZScpO1xuY29uc3QgU0VDUkVUX0tFWSA9ICdUM2xjMG4zdENAc01Ackwwbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBwdWJsaWMgc2VjdXJlU3RvcmFnZSA9IG5ldyBTZWN1cmVTdG9yYWdlKGxvY2FsU3RvcmFnZSwge1xuICAgIGhhc2g6IGZ1bmN0aW9uIGhhc2goa2V5KSB7XG4gICAgICBrZXkgPSBDcnlwdG9KUy5TSEEyNTYoa2V5LCBTRUNSRVRfS0VZKTtcbiAgICAgIHJldHVybiBrZXkudG9TdHJpbmcoKTtcbiAgICB9LCBlbmNyeXB0OiBmdW5jdGlvbiBlbmNyeXB0KGRhdGEpIHtcbiAgICAgIGRhdGEgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChkYXRhLCBTRUNSRVRfS0VZKTtcbiAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LCBkZWNyeXB0OiBmdW5jdGlvbiBkZWNyeXB0KGRhdGEpIHtcbiAgICAgIGRhdGEgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChkYXRhLCBTRUNSRVRfS0VZKTtcbiAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=