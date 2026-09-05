import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-services1',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './services1.component.html',
  styleUrl: './services1.component.scss',
})
export class Services1Component {
  services = [
    {
      icon: '🎨',
      title: 'Diseño personalizado',
      desc: 'Creamos el diseño ideal para tu marca. Sin plantillas, 100% a medida.',
    },
    {
      icon: '⚡',
      title: 'Desarrollo rápido',
      desc: 'Sitios optimizados, rápidos y con las últimas tecnologías del mercado.',
    },
    {
      icon: '📱',
      title: 'Responsive & Mobile',
      desc: 'Tu web se ve perfecta en cualquier dispositivo, desde móvil hasta desktop.',
    },
    {
      icon: '🔒',
      title: 'Seguridad & SEO',
      desc: 'Implementamos buenas prácticas de seguridad y posicionamiento en buscadores.',
    },
    {
      icon: '🛠️',
      title: 'Mantenimiento',
      desc: 'Te acompañamos después del lanzamiento con soporte y actualizaciones.',
    },
    {
      icon: '🚀',
      title: 'Deploy & Hosting',
      desc: 'Nos encargamos de publicar y mantener tu sitio en línea sin complicaciones.',
    },
  ];
}
