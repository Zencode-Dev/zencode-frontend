import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { CtaBandComponent } from '../../components/cta-band/cta-band.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { SeoService, SITE_URL, pageUrl } from '../../services/seo.service';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-casos-de-exito',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeaderComponent, CtaBandComponent, RevealDirective],
  templateUrl: './casos-de-exito.component.html',
  styleUrl: './casos-de-exito.component.scss',
})
export class CasosDeExitoComponent implements OnInit {
  projects = PROJECTS;

  statusLabel(status: string): string {
    return status === 'completed' ? 'Finalizado' : 'En desarrollo';
  }

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Casos de Éxito y Proyectos Desarrollados | Zencode',
      description:
        'Conocé los proyectos reales que desarrollamos: sistemas de gestión, bots con IA, sitios web y e-commerce a medida para empresas argentinas.',
      path: 'casos-de-exito',
      breadcrumbs: [
        { name: 'Inicio', path: '' },
        { name: 'Casos de Éxito', path: 'casos-de-exito' },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Casos de éxito de Zencode',
        url: pageUrl('casos-de-exito'),
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: this.projects.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'CreativeWork',
              name: p.title,
              description: p.description,
              image: `${SITE_URL}${p.image}`,
              ...(p.url ? { url: p.url } : {}),
            },
          })),
        },
      },
    });
  }
}
