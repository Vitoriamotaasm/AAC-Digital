import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pictograma } from '../models/pictograma.model';

@Injectable({
    providedIn: 'root'
})
export class PictogramaService {
    private apiUrl = 'http://localhost:8080/api/pictogramas';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Pictograma[]> {
        return this.http.get<Pictograma[]>(this.apiUrl);
    }

    create(pictograma: Partial<Pictograma>): Observable<Pictograma> {
        return this.http.post<Pictograma>(this.apiUrl, pictograma);
    }

    update(id: string, pictograma: Partial<Pictograma>): Observable<Pictograma> {
        return this.http.put<Pictograma>(`${this.apiUrl}/${id}`, pictograma);
    }

    delete(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
