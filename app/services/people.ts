import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import 'rxjs/operator/map';

@Injectable()
export class PeopleService {
  constructor(http:Http) {
    // this.people = http.get('https://randomuser.me/api/?lego&results=4').map(res => res.json().results);
    this.people = http.get('api/people.json').map(res => res.json().results);
  }
}
