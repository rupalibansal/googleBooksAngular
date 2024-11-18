// src/app/components/book-search/book-search.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { GoogleBooksService } from '../../services/google-books.service';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    BookListComponent,
  ],
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent {
  query: string = 'flower';
  books: any[] = [];

  constructor(private googleBooksService: GoogleBooksService) {}

  searchBooks() {
    console.log('debug point');
    this.googleBooksService.searchBooks(this.query).subscribe((data: any) => {
      this.books = data.items;
    });
  }
}
