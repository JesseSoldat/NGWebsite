import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'navbar',
	templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
	projectName: string;

	constructor(){
		this.projectName = "JLab Website"
	}
}