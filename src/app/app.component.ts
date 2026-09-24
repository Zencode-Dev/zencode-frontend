import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, WhatsappButtonComponent],
  template: `
    <a class="skip-link" href="#main-content">Saltar al contenido</a>
    <app-navbar></app-navbar>
    <main id="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <app-whatsapp-button></app-whatsapp-button>
  `,
})
export class AppComponent {}
