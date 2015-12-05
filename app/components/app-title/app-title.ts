import {Component} from 'angular2/angular2';

// Styling with `styles` properties
@Component({
  selector: 'app-title',
  template: `
    <h1 class="title">Demo of Styling Angular2 Components</h1>
  `,
  styles: [`
    .title {
      margin-bottom: 3rem;
    }
  `]
})
export class AppTitleComponent {}
