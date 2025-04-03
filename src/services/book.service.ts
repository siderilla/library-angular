import { Injectable } from '@angular/core';
import { dataBooks } from '../data-books';
import { type Book } from '../app/models/book';


@Injectable({
	providedIn: 'root'
})
export class BookService {
	constructor() {

	}

	getBooks(): Book[] {
		const saved = localStorage.getItem('books');
		return saved ? JSON.parse(saved) : dataBooks;
	}


	getBookById(id: number): Book | undefined {
		return dataBooks.find(book => book.id === id);
	}

	addBook(book: Partial<Book>) {
		const newBook: any = {
			id: Date.now(),
			title: book.title || '',
			authors: book.authors || [{ name: '', birth_year: null, death_year: null }],
			summaries: book.summaries || [''],
			translators: [],
			bookshelves: [],
			copyright: false,
			media_type: 'Text',
			["image/jpeg"]: book["image/jpeg"] || ''
		};

		dataBooks.push(newBook);
		localStorage.setItem('books', JSON.stringify(dataBooks));
	}
}
