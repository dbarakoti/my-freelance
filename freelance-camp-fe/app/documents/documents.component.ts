import { Component } from '@angular/core';
import { Document } form './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	documents: Document[] = [
		{
			title: "My First Doc",
			description: 'asdfasdfdasdfdsf',
			file_url: 'http://google.com',
			updated_at: '07/31/17',
			image_url: 'http://google.com',
		},
		{
			title: "My Second Doc",
			description: 'asdfasdfdasdfdsf',
			file_url: 'http://google.com',
			updated_at: '07/31/17',
			image_url: 'http://google.com',
		},
			{
			title: "My Last Doc",
			description: 'asdfasdfdasdfdsf',
			file_url: 'http://google.com',
			updated_at: '07/31/17',
			image_url: 'http://google.com',
		},
	]
}