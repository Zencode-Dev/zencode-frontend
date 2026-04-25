import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { StepsComponent } from './components/steps/steps.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    StepsComponent,
    ProjectsComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    WhatsappButtonComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-services></app-services>
    <app-steps></app-steps>
    <app-projects></app-projects>
    <app-faq></app-faq>
    <app-contact></app-contact>
    <app-footer></app-footer>
    <app-whatsapp-button></app-whatsapp-button>
  `,
})
export class AppComponent {}
