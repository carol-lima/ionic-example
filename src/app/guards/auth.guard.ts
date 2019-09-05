import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/api/login/login.service';
import { MenuController } from '@ionic/angular';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private menuCtrl: MenuController,
        private router: Router,
        private loginService: LoginService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.loginService.currentUserValue;

        if (currentUser) {
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        this.menuCtrl.enable(false);
        return false;
    }
}
