import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { FeatureGridComponent } from '../../components/feature-grid/feature-grid.component';
import { RelatedProjectsComponent } from '../../components/related-projects/related-projects.component';
import { CtaBandComponent } from '../../components/cta-band/cta-band.component';
import { SeoService, SITE_URL, pageUrl } from '../../services/seo.service';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-ia-automatizacion',
  standalone: true,
  imports: [PageHeaderComponent, FeatureGridComponent, RelatedProjectsComponent, CtaBandComponent],
  templateUrl: './ia-automatizacion.component.html',
})
export class IaAutomatizacionComponent implements OnInit {
  relatedProjects = PROJECTS.filter((p) => p.title === 'Wapia');

  features = [
    {
      icon: '🤖',
      title: 'Bots con IA para WhatsApp',
      desc: 'Asistentes que responden consultas, toman pedidos o dan soporte 24 horas, entrenados con la información de tu negocio.',
    },
    {
      icon: '⚙️',
      title: 'Automatización de tareas repetitivas',
      desc: 'Identificamos procesos manuales de tu operación y los automatizamos para liberar tiempo de tu equipo.',
    },
    {
      icon: '🔌',
      title: 'IA integrada a tus sistemas',
      desc: 'Sumamos capacidades de inteligencia artificial dentro del software o sitio que ya tenés, en vez de una herramienta separada.',
    },
  ];

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Inteligencia Artificial para Empresas y Automatización de Procesos | Zencode',
      description:
        'Implementamos inteligencia artificial para empresas y automatización de procesos: bots con IA para WhatsApp, integraciones y automatización de tareas repetitivas.',
      path: 'inteligencia-artificial-y-automatizacion',
      breadcrumbs: [
        { name: 'Inicio', path: '' },
        { name: 'IA y Automatización', path: 'inteligencia-artificial-y-automatizacion' },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Inteligencia artificial y automatización de procesos',
        name: 'Inteligencia artificial para empresas y automatización de procesos',
        description:
          'Bots con inteligencia artificial, automatización de procesos e integración de IA en sistemas empresariales existentes.',
        provider: { '@type': 'Organization', name: 'Zencode', url: `${SITE_URL}/` },
        areaServed: { '@type': 'Country', name: 'Argentina' },
        url: pageUrl('inteligencia-artificial-y-automatizacion'),
      },
    });
  }
}
