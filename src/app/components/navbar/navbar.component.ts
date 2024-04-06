import { Component, signal } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  openNav = signal<boolean>(true);

  constructor(private breakPointObserver: BreakpointObserver) {
    this.breakPointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          this.openNav.set(false);
        } else {
          this.openNav.set(true);
        }
      });
  }

  toggleNav() {
    this.openNav.set(!this.openNav());
  }
}
