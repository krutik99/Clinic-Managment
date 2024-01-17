// menu-bar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  isMenuVisible = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
