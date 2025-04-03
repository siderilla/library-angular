export interface Book {

	id: number;
	title: string;
	authors: {
		name: string;
	}[];
	summaries: string[];
	"image/jpeg": string;

}
