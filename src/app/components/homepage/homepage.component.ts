import { Component } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { type Book } from '../../models/book';
import { BookCardComponent } from '../book-card/book-card.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-homepage',
  imports: [BookCardComponent, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
	books: Book[] = []

	constructor(private BookService: BookService) {
		this.books = this.BookService.getBooks();
	}
}
