import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(10, 'nmc Company', 'http://portfolio.dipeshbarakoti.com', 'Ruby on Rails', 150, 120, 15,'dipesh@devcamp.com')
	proposalTwo: Proposal = new Proposal(45, 'pcp Company', 'http://portfolio.dipeshbarakoti.com', 'Ruby on Rails', 150, 120, 15,'dipesh@devcamp.com')
	proposalThree: Proposal = new Proposal(450, 'xyz Company', 'http://portfolio.dipeshbarakoti.com', 'Ruby on Rails', 150, 120, 15,'dipesh@devcamp.com')

	proposals: Proposal[] = [this.proposalOne,
													 this.proposalTwo,
													 this.proposalThree
	]
}