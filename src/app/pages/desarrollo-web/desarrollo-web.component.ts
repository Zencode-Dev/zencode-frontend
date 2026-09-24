import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { FeatureGridComponent } from '../../components/feature-grid/feature-grid.component';
import { RelatedProjectsComponent } from '../../components/related-projects/related-projects.component';
import { CtaBandComponent } from '../../components/cta-band/cta-band.component';
import { SeoService, SITE_URL, pageUrl } from '../../services/seo.service';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-desarrollo-web',
  standalone: true,
  imports: [PageHeaderComponent, FeatureGridComponent, RelatedProjectsComponent, CtaBandComponent],
  templateUrl: './desarrollo-web.component.html',
})
export class DesarrolloWebComponent implements OnInit {
  relatedProjects = PROJECTS.filter((p) => ['Rufina Web', 'Zshop'].includes(p.title));

  features = [
    {
      icon: '🖥️',
      title: 'Sitios institucionales',
      desc: 'Presentamos tu marca online con un diseño propio, sin plantillas genéricas, pensado para transmitir confianza a tus clientes.',
    },
    {
      icon: '🛒',
      title: 'E-commerce a medida',
      desc: 'Tiendas online adaptadas a tu catálogo y tu forma de vender, sin las limitaciones de un builder genérico.',
    },
    {
      icon: '📄',
      title: 'Landing pages',
      desc: 'Páginas enfocadas en un objetivo puntual: captar leads, vender un producto o promocionar un servicio.',
    },
    {
      icon: '⚙️',
      title: 'Portales y paneles web',
      desc: 'Aplicaciones web con lógica propia (login, paneles, formularios dinámicos) más allá de un sitio informativo.',
    },
  ];

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Desarrollo Web a Medida en Argentina | Zencode',
      description:
        'Diseño y desarrollo de sitios web, landing pages y e-commerce a medida para empresas en Argentina. Sin plantillas genéricas. Pedí tu presupuesto sin cargo.',
      path: 'desarrollo-web',
      breadcrumbs: [
        { name: 'Inicio', path: '' },
        { name: 'Desarrollo Web', path: 'desarrollo-web' },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Desarrollo web a medida',
        name: 'Desarrollo web y aplicaciones web a medida',
        description:
          'Diseño y desarrollo de sitios institucionales, landing pages, e-commerce y portales web a medida.',
        provider: { '@type': 'Organization', name: 'Zencode', url: `${SITE_URL}/` },
        areaServed: { '@type': 'Country', name: 'Argentina' },
        url: pageUrl('desarrollo-web'),
      },
    });
  }
}
