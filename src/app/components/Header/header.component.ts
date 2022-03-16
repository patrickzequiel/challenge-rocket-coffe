import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = 'angular';
  active = true;
  isMobileDisplay() {
    return window.innerWidth < 768;
  }
}
