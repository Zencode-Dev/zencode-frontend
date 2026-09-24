import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export const SITE_URL = 'https://zencode.com.ar';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo-zencode.png`;

/** URL absoluta y canónica de una página. El hosting sirve cada ruta como
 * carpeta con index.html, por lo que la barra final es la forma definitiva. */
export function pageUrl(path: string): string {
  return path ? `${SITE_URL}/${path}/` : `${SITE_URL}/`;
}

export interface BreadcrumbItem {
  /** Nombre visible del nivel. */
  name: string;
  /** Ruta relativa al dominio, sin barra inicial. Vacío = home. */
  path: string;
}

export interface SeoPage {
  /** Title tag completo, ya con el sufijo de marca si corresponde. */
  title: string;
  /** Meta description, 120-160 caracteres recomendado. */
  description: string;
  /** Ruta relativa (sin barra inicial). Vacío = home ('/'). */
  path: string;
  /** Estructura de datos JSON-LD adicional para esta página (Service, CollectionPage, FAQPage, etc.). */
  jsonLd?: object | object[];
  /** Breadcrumbs visibles/estructurados. Si se omite, no se emite BreadcrumbList. */
  breadcrumbs?: BreadcrumbItem[];
  /** Por defecto 'index, follow'. Usar 'noindex, follow' en páginas de error/utilitarias. */
  robots?: string;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly doc: Document,
  ) {}

  setPage(page: SeoPage): void {
    const url = pageUrl(page.path);
    const image = page.image ?? DEFAULT_OG_IMAGE;
    const robots = page.robots ?? 'index, follow';

    this.title.setTitle(page.title);

    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ name: 'robots', content: robots });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Zencode' });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:locale', content: 'es_AR' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(url);

    const schemas: object[] = [];
    if (page.jsonLd) {
      schemas.push(...(Array.isArray(page.jsonLd) ? page.jsonLd : [page.jsonLd]));
    }
    if (page.breadcrumbs?.length) {
      schemas.push(this.buildBreadcrumbSchema(page.breadcrumbs));
    }
    this.setJsonLd(schemas);
  }

  private setCanonical(url: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private buildBreadcrumbSchema(items: BreadcrumbItem[]): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: pageUrl(item.path),
      })),
    };
  }

  private setJsonLd(schemas: object[]): void {
    this.doc.head
      .querySelectorAll('script[data-seo-jsonld]')
      .forEach((el) => el.remove());

    schemas.forEach((schema) => {
      const script = this.doc.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-seo-jsonld', 'true');
      script.textContent = JSON.stringify(schema);
      this.doc.head.appendChild(script);
    });
  }
}
