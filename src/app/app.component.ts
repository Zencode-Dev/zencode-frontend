import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroPrincipal1Component } from './components/hero-principal1/hero-principal1.component';
import { HeroPrincipal2Component } from './components/hero-principal2/hero-principal2.component';
import { Services1Component } from './components/services1/services1.component';
import { Services2Component } from './components/services2/services2.component';
import { Steps1Component } from './components/steps1/steps1.component';
import { Steps2Component } from './components/steps2/steps2.component';
import { CtaBandComponent } from './components/cta-band/cta-band.component';
import { Projects1Component } from './components/projects1/projects1.component';
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
    HeroPrincipal1Component,
    HeroPrincipal2Component,
    Services1Component,
    Services2Component,
    Steps1Component,
    Steps2Component,
    CtaBandComponent,
    Projects1Component,
    Projects2Component,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    WhatsappButtonComponent,
  ],
  template: `
    <app-navbar></app-navbar>

    <!-- Variantes de hero: se muestra una sola por vez.
         Cambiá "activeHero" para comparar diseños sin perder ninguno. -->
    <app-hero-principal1 *ngIf="activeHero === 'principal1'"></app-hero-principal1>
    <app-hero-principal2 *ngIf="activeHero === 'principal2'"></app-hero-principal2>

    <!-- Variantes de Servicios: se muestra una sola por vez. -->
    <app-services1 *ngIf="activeServices === 'servicios1'"></app-services1>
    <app-services2 *ngIf="activeServices === 'servicios2'"></app-services2>

    <!-- Variantes de Proceso: se muestra una sola por vez. -->
    <app-steps1 *ngIf="activeSteps === 'steps1'"></app-steps1>
    <app-steps2 *ngIf="activeSteps === 'steps2'"></app-steps2>

    <app-cta-band></app-cta-band>

    <!-- Variantes de Proyectos: se muestra una sola por vez. -->
    <app-projects1 *ngIf="activeProjects === 'projects1'"></app-projects1>
    <app-projects2 *ngIf="activeProjects === 'projects2'"></app-projects2>
    <app-faq></app-faq>
    <app-contact></app-contact>
    <app-footer></app-footer>
    <app-whatsapp-button></app-whatsapp-button>
  `,
})
export class AppComponent {
  activeHero: 'principal1' | 'principal2' = 'principal2';
  activeServices: 'servicios1' | 'servicios2' = 'servicios2';
  activeSteps: 'steps1' | 'steps2' = 'steps2';
  activeProjects: 'projects1' | 'projects2' = 'projects2';
}
