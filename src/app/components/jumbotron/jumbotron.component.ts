import { Component } from '@angular/core'

@Component ({
	moduleId: module.id,
	selector: 'jumbotron',
	templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent {
	jbtHeading: string;
	jbtText: string;
	jbtBtnText: string;
	jbtBtnUrl: string;

	constructor(){
		this.jbtHeading = "Welcome to JLab";
		this.jbtHeading = "Learning Angular 2";
		this.jbtBtnText = 'My Github';
		this.jbtBtnUrl = 	'https://github.com/JesseSoldat';
	}

}