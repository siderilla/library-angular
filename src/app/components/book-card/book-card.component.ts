import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-book-card',
	standalone: true,
	imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
	templateUrl: './book-card.component.html',
	styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
	@Input() book: any;
}
