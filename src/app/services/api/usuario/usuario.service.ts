import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    url: string;

    constructor(private http: HttpClient) {
        this.url = environment.apiUrl + '/usuario'
    }

    // Cria um novo registro
    Incluir(params) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
            })
        };

        return this.http.post(this.url, params, httpOptions).map((resultado) => {
            return resultado;
        },
        (erro) => {
            return erro;
        });
    }

    // Cria um novo registro
    RedefinirSenha(params) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
            })
        };

        return this.http.post(this.url, params, httpOptions).map((resultado) => {
            return resultado;
        },
        (erro) => {
            return erro;
        });
    }

    // Cria um novo registro
    Ativar(id, params) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
            })
        };

        return this.http.put(this.url + '/ativar/' + id, params, httpOptions).map((resultado) => {
            return resultado;
        },
        (erro) => {
            return erro;
        });
    }

    // Cria um novo registro
    Alterar(id, params) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
            })
        };

        return this.http.put(this.url + '/' + id, params, httpOptions).map((resultado) => {
            return resultado;
        },
        (erro) => {
            return erro;
        });
    }
}
