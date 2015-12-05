import {Component, Input} from 'angular2/angular2';

// Put styles directly into the template
@Component({
  selector: 'profile-card',
  templateUrl: './components/profile-card/profile-card.html'
})
export class ProfileCardComponent {
  @Input() person;
}
