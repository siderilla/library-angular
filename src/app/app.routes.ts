import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AddBookComponent } from './components/add-book/add-book.component';


export const routes: Routes = [

	{ path: '', component: HomepageComponent }, // traccia percorso root per homepage
	{ path: 'detail/:id', component: BookDetailComponent}, // traccia percorso pagina detail con parametro dinamico
	{ path: 'add', component: AddBookComponent}

];
