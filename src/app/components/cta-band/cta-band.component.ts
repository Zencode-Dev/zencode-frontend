import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-cta-band',
  standalone: true,
  imports: [RevealDirective, RouterLink],
  templateUrl: './cta-band.component.html',
  styleUrl: './cta-band.component.scss',
})
export class CtaBandComponent {
  @Input() text = '¿Listo para empezar? El primer paso es una charla sin costo.';
  @Input() buttonLabel = 'Agendá tu consulta →';
  @Input() href = '/contacto';
}
