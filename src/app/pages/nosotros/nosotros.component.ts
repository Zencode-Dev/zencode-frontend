import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { CtaBandComponent } from '../../components/cta-band/cta-band.component';
import { SeoService, SITE_URL, pageUrl } from '../../services/seo.service';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [PageHeaderComponent, CtaBandComponent],
  templateUrl: './nosotros.component.html',
})
export class NosotrosComponent implements OnInit {
  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Sobre Zencode | Empresa Argentina de Desarrollo de Software',
      description:
        'Zencode es una empresa argentina de desarrollo de software. Conocé cómo trabajamos, qué tecnologías usamos y cómo encaramos cada proyecto.',
      path: 'nosotros',
      breadcrumbs: [
        { name: 'Inicio', path: '' },
        { name: 'Nosotros', path: 'nosotros' },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        url: pageUrl('nosotros'),
        about: { '@type': 'Organization', name: 'Zencode', url: `${SITE_URL}/` },
      },
    });
  }
}
