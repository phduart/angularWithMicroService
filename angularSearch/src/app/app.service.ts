import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class AppService {

    constructor(private http: HttpClient) {}

    getPessoas() {
        return this.http.get('http://127.0.0.1:8080/api/getPessoas');
    }

    deletePessoas(id: String) {
        console.log('http://127.0.0.1:8080/api/deletePessoa/'+id);
        return this.http.delete('http://127.0.0.1:8080/api/deletePessoa/'+id).subscribe();
    }
}