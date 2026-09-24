import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;
  servicesOpen = false;

  serviceLinks = [
    { label: 'Desarrollo Web', path: '/desarrollo-web' },
    { label: 'Software a Medida', path: '/software-a-medida' },
    { label: 'Aplicaciones Móviles', path: '/aplicaciones-moviles' },
    { label: 'IA & Automatización', path: '/inteligencia-artificial-y-automatizacion' },
  ];

  constructor(readonly theme: ThemeService) {}

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) this.servicesOpen = false;
  }

  closeMenu() {
    this.menuOpen = false;
    this.servicesOpen = false;
  }

  toggleServices() {
    this.servicesOpen = !this.servicesOpen;
  }
}
