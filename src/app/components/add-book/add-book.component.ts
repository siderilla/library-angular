import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { type Book } from '../../models/book';
import { BookService } from '../../../services/book.service';
import { CommonModule } from '@angular/common';



@Component({
	selector: 'app-add-book',
	imports: [FormsModule, CommonModule],
	templateUrl: './add-book.component.html',
	styleUrl: './add-book.component.scss'
})
export class AddBookComponent {
	newBook: Partial<Book> = {
		title: '',
		authors: [{ name: '' }],
		summaries: [''],
		"image/jpeg": ''
	}

	constructor(private bookService: BookService, private router: Router) { }

	submit() {
		this.bookService.addBook(this.newBook);
		this.router.navigate(['/']);
	}
};