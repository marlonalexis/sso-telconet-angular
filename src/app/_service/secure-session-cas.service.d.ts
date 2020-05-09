import { StorageService } from './storage.service';
import { UserSSO } from '../_model/user-sso';
import { CookieService } from 'ngx-cookie-service';
export declare class SecureSessionCasService {
    private storageService;
    private cookieService;
    constructor(storageService: StorageService, cookieService: CookieService);
    ssoSessionCok: string;
    key: string;
    setSession(value: string): void;
    getSession(): UserSSO;
    clearSession(): void;
    getSsoSessionId(): string;
    setSsoSessionId(value: string): void;
    /**
     * Verifica si existe usuario autenticado
     * @autor Marlon Plúas <mpluas@telconet.ec>
     * @version 1.0
     */
    validateAuthSso(): boolean;
}
