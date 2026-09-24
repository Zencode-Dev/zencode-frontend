import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { SeoService, SITE_URL } from '../../services/seo.service';

@Component({
  selector: 'app-politica-privacidad',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './politica-privacidad.component.html',
})
export class PoliticaPrivacidadComponent implements OnInit {
  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Política de Privacidad | Zencode',
      description: 'Cómo Zencode trata los datos que enviás a través del formulario de contacto.',
      path: 'politica-de-privacidad',
      breadcrumbs: [
        { name: 'Inicio', path: '' },
        { name: 'Política de Privacidad', path: 'politica-de-privacidad' },
      ],
    });
  }
}
