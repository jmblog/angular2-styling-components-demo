import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {PeopleService} from '../../services/people';
import {ProfileCardComponent} from '../profile-card/profile-card';

// Use `styleUrls` property
@Component({
  selector: 'profile-cards-list',
  templateUrl: './components/profile-cards-list/profile-cards-list.html',
  styleUrls: ['./components/profile-cards-list/profile-cards-list.css'],
  providers: [PeopleService],
  directives: [CORE_DIRECTIVES, ProfileCardComponent]
})
export class ProfileCardsListComponent {
  constructor(public peopleService:PeopleService) {
    peopleService.people
      .subscribe(people => this.people = people);
  }
}
