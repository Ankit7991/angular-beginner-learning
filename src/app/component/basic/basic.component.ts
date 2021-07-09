import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-basic',
	templateUrl: './basic.component.html',
	styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

	name: string = 'Dwayne Johnson';


	greetings (name: string): string {
		return `Welcome ${name?.split(' ')?.[0] || `Mr. Unknown`}.`;
	}

	getHeight() {
		return window.innerHeight;
	}

	

	
	strong (input: any): any {
		return `<b>${input}</b>`
	}
	
	constructor() { }
	
	ngOnInit(): void {
	}

}
