import { Component, OnInit } from '@angular/core';
import { HeroPrincipal2Component } from '../../components/hero-principal2/hero-principal2.component';
import { Services2Component } from '../../components/services2/services2.component';
import { Steps2Component } from '../../components/steps2/steps2.component';
import { CtaBandComponent } from '../../components/cta-band/cta-band.component';
import { Projects2Component } from '../../components/projects2/projects2.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { SeoService, SITE_URL, DEFAULT_OG_IMAGE } from '../../services/seo.service';
import { FAQS } from '../../data/faqs.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroPrincipal2Component,
    Services2Component,
    Steps2Component,
    CtaBandComponent,
    Projects2Component,
    FaqComponent,
    ContactComponent,
  ],
  template: `
    <app-hero-principal2></app-hero-principal2>
    <app-services2></app-services2>
    <app-steps2></app-steps2>
    <app-cta-band></app-cta-band>
    <app-projects2></app-projects2>
    <app-faq></app-faq>
    <app-contact></app-contact>
  `,
})
export class HomeComponent implements OnInit {
  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Zencode — Desarrollo de Software y Soluciones Tecnológicas en Argentina',
      description:
        'Zencode es una empresa argentina de desarrollo de software: sitios y aplicaciones web, sistemas a medida, apps móviles e inteligencia artificial para empresas. Presupuesto sin cargo.',
      path: '',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Zencode',
          url: 'https://zencode.com.ar/',
          inLanguage: 'es-AR',
          publisher: { '@type': 'Organization', name: 'Zencode' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Zencode',
          image: DEFAULT_OG_IMAGE,
          url: `${SITE_URL}/`,
          telephone: '+54 9 3471 330560',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Río de Janeiro 478',
            addressLocality: 'Las Rosas',
            addressRegion: 'Santa Fe',
            postalCode: 'S2520CMJ',
            addressCountry: 'AR',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '1',
          },
          sameAs: ['https://share.google/DmWOrSm05AsspPfHO'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        },
      ],
    });
  }
}
