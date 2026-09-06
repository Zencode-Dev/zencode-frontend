import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroPrincipal2Component } from './components/hero-principal2/hero-principal2.component';
import { Services2Component } from './components/services2/services2.component';
import { Steps2Component } from './components/steps2/steps2.component';
import { CtaBandComponent } from './components/cta-band/cta-band.component';
import { Projects2Component } from './components/projects2/projects2.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroPrincipal2Component,
    Services2Component,
    Steps2Component,
    CtaBandComponent,
    Projects2Component,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    WhatsappButtonComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero-principal2></app-hero-principal2>
    <app-services2></app-services2>
    <app-steps2></app-steps2>
    <app-cta-band></app-cta-band>
    <app-projects2></app-projects2>
    <app-faq></app-faq>
    <app-contact></app-contact>
    <app-footer></app-footer>
    <app-whatsapp-button></app-whatsapp-button>
  `,
})
export class AppComponent {}
