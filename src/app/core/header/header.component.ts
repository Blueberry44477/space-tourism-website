import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NAVIGATION_ITEMS } from '../config/navigation.config';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  protected navItems = signal(NAVIGATION_ITEMS).asReadonly();
  private readonly _isMenuOpen = signal<boolean>(false);
  public readonly isMenuOpen = computed(() => this._isMenuOpen());

  public toggleMenu() { this._isMenuOpen.update(state => !state); }
  public closeMenu() {this._isMenuOpen.set(false); }
}
