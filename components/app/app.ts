import {Component} from 'angular2/angular2';
import {AppTitleComponent} from '../app-title/app-title';
import {ProfileCardsListComponent} from '../profile-cards-list/profile-cards-list';

@Component({
  selector: 'my-app',
  template: `
    <app-title></app-title>
    <profile-cards-list></profile-cards-list>
  `,
  directives: [AppTitleComponent, ProfileCardsListComponent]
})
export class AppComponent {}
