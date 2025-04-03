import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../services/book.service';
import { type Book } from '../../models/book';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-book-detail',
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
	book?: Book;

	constructor(private route: ActivatedRoute, private bookService: BookService) {
		const bookId = Number(this.route.snapshot.paramMap.get('id'));
		this.book = this.bookService.getBookById(bookId);
	}
}


// ActivatedRoute serve per leggere il parametro :id dalla URL
// route.snapshot.paramMap.get('id') prende l’id dalla rotta
// getBookById(id) cerca nel tuo array dataBooks