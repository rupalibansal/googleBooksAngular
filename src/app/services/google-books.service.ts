// src/app/services/google-books.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleBooksService {
  private API_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<any> {
    return this.http.get(`${this.API_URL}?q=${query}`);
  }

  getBookById(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }
}
