import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
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
