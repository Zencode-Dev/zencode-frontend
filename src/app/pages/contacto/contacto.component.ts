import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { SeoService, SITE_URL, pageUrl } from '../../services/seo.service';

@Component({
  selector: 'app-contacto-page',
  standalone: true,
  imports: [PageHeaderComponent, ContactComponent],
  templateUrl: './contacto.component.html',
})
export class ContactoComponent implements OnInit {
  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Contacto | Zencode — Desarrollo de Software en Argentina',
      description:
        'Contactá a Zencode para tu proyecto de software, sitio web o sistema a medida. Respondemos en menos de 24 horas. Consulta inicial sin costo.',
      path: 'contacto',
      breadcrumbs: [
        { name: 'Inicio', path: '' },
        { name: 'Contacto', path: 'contacto' },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        url: pageUrl('contacto'),
        about: { '@type': 'Organization', name: 'Zencode', url: `${SITE_URL}/` },
      },
    });
  }
}
