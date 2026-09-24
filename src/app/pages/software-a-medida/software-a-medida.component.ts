import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { FeatureGridComponent } from '../../components/feature-grid/feature-grid.component';
import { RelatedProjectsComponent } from '../../components/related-projects/related-projects.component';
import { CtaBandComponent } from '../../components/cta-band/cta-band.component';
import { SeoService, SITE_URL, pageUrl } from '../../services/seo.service';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-software-a-medida',
  standalone: true,
  imports: [PageHeaderComponent, FeatureGridComponent, RelatedProjectsComponent, CtaBandComponent],
  templateUrl: './software-a-medida.component.html',
})
export class SoftwareAMedidaComponent implements OnInit {
  relatedProjects = PROJECTS.filter((p) => ['ZSphere', 'ZConnect'].includes(p.title));

  features = [
    {
      icon: '🧩',
      title: 'Sistemas de gestión propios',
      desc: 'Ventas, stock, turnos, clientes: un sistema que se adapta a tu forma de trabajar, en vez de forzarte a vos a adaptarte a él.',
    },
    {
      icon: '🔗',
      title: 'Integraciones',
      desc: 'Conectamos tu software con las herramientas que ya usás (facturación, pagos, WhatsApp, otros sistemas internos).',
    },
    {
      icon: '📈',
      title: 'Escalable a tu ritmo',
      desc: 'Empezamos por lo esencial y vamos sumando módulos y funciones a medida que tu operación lo necesita.',
    },
    {
      icon: '🛠️',
      title: 'Soporte y evolución',
      desc: 'El software no termina en la entrega: acompañamos con mantenimiento y nuevas funcionalidades cuando el negocio crece.',
    },
  ];

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Software y Sistemas a Medida para Empresas | Zencode Argentina',
      description:
        'Desarrollamos software y sistemas a medida para empresas: gestión, ventas, stock e integraciones propias. Sistemas empresariales que se adaptan a tu operación.',
      path: 'software-a-medida',
      breadcrumbs: [
        { name: 'Inicio', path: '' },
        { name: 'Software a Medida', path: 'software-a-medida' },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Software y sistemas empresariales a medida',
        name: 'Software y sistemas a medida para empresas',
        description:
          'Desarrollo de sistemas de gestión, ventas, stock e integraciones a medida para empresas argentinas.',
        provider: { '@type': 'Organization', name: 'Zencode', url: `${SITE_URL}/` },
        areaServed: { '@type': 'Country', name: 'Argentina' },
        url: pageUrl('software-a-medida'),
      },
    });
  }
}
