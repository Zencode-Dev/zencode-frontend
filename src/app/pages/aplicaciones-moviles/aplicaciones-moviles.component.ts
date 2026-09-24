import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { FeatureGridComponent } from '../../components/feature-grid/feature-grid.component';
import { CtaBandComponent } from '../../components/cta-band/cta-band.component';
import { SeoService, SITE_URL, pageUrl } from '../../services/seo.service';

@Component({
  selector: 'app-aplicaciones-moviles',
  standalone: true,
  imports: [PageHeaderComponent, FeatureGridComponent, CtaBandComponent],
  templateUrl: './aplicaciones-moviles.component.html',
})
export class AplicacionesMovilesComponent implements OnInit {
  features = [
    {
      icon: '📱',
      title: 'Apps para tu negocio',
      desc: 'Aplicaciones móviles pensadas para un caso de uso concreto: pedidos, turnos, seguimiento, o una operación interna de tu empresa.',
    },
    {
      icon: '🔄',
      title: 'Integradas con tu sistema',
      desc: 'La app no es una isla: la conectamos con tu sitio web, tu sistema de gestión o las APIs que ya uses.',
    },
    {
      icon: '🎨',
      title: 'Diseño de interfaz propio',
      desc: 'UI pensada para uso móvil real: simple, rápida de usar y coherente con la identidad de tu marca.',
    },
  ];

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Desarrollo de Aplicaciones Móviles | Zencode Argentina',
      description:
        'Desarrollo de aplicaciones móviles a medida para empresas en Argentina, integradas con tu sistema o sitio web. Contanos tu proyecto y te asesoramos sin cargo.',
      path: 'aplicaciones-moviles',
      breadcrumbs: [
        { name: 'Inicio', path: '' },
        { name: 'Aplicaciones Móviles', path: 'aplicaciones-moviles' },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Desarrollo de aplicaciones móviles',
        name: 'Desarrollo de aplicaciones móviles a medida',
        description: 'Desarrollo de aplicaciones móviles a medida, integradas con sistemas y sitios web existentes.',
        provider: { '@type': 'Organization', name: 'Zencode', url: `${SITE_URL}/` },
        areaServed: { '@type': 'Country', name: 'Argentina' },
        url: pageUrl('aplicaciones-moviles'),
      },
    });
  }
}
