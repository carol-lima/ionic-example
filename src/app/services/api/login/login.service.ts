import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(
        private http: HttpClient,
        private menuCtrl: MenuController) {
    }

    // Faz o login do usuário
    login(param) {
        return this.http.post<any>(`${environment.apiUrl}/login`, param)
            .pipe(map((retorno) => {
                if (retorno && retorno.token) {
                    localStorage.setItem('currentUser', JSON.stringify(retorno));
                }

                return retorno;
            }));
    }

    // Verifica se o usuário está logado
    isLogged() {
        if (localStorage.getItem('currentUser') !== null && localStorage.getItem('currentUser') !== undefined) {
            return true;
        } else {
            this.menuCtrl.enable(false);
            
            return null;
        }
    }

    // Retorna os dados do usuário
    public get currentUserValue() {
        if (localStorage.getItem('currentUser') !== null && localStorage.getItem('currentUser') !== undefined) {
            return JSON.parse(localStorage.getItem('currentUser'));
        } else {
            return null;
        }
    }

    // Desloga o usuário do app
    logout() {
        this.menuCtrl.enable(false);

        localStorage.removeItem('currentUser');
    }
}
