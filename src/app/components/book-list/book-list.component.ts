// src/app/components/book-list/book-list.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  imports: [CommonModule],
})
export class BookListComponent {
  private _books: any[] = [];

  @Input()
  set books(value: any[]) {
    this._books = value;
    console.log('Books updated:', this._books);
  }

  get books(): any[] {
    return this._books;
  }
}
