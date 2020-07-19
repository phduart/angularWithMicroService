import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class AppService {

    constructor(private http: HttpClient) {}

    getPessoas() {
        return this.http.get('http://127.0.0.1:8080/api/getPessoas');
    }
}