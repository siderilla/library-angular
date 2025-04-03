import { Component, Input } from '@angular/core';
import { type Book } from '../../models/book';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
	@Input() book!: Book;
}
