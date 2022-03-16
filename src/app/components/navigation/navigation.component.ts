import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  open$ = true;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    console.log(this.isHandset$);
  }

  isMobileDisplay() {
    window.innerWidth < 768 ? (this.open$ = false) : (this.open$ = true);
  }

  closeSidebar() {
    const isHandset = this.breakpointObserver.isMatched('(max-width: 768px)');
    if (isHandset) {
      this.matDrawer.close();
    }
  }
}
