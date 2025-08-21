import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Relatorio } from '../models/relatorio.model';

@Injectable({
    providedIn: 'root'
})
export class RelatorioService {
    private apiUrl = 'http://localhost:8080/api/relatorios';

    constructor(private http: HttpClient) { }

    getByUser(userId: string): Observable<Relatorio[]> {
        return this.http.get<Relatorio[]>(`${this.apiUrl}/usuario/${userId}`);
    }
}
