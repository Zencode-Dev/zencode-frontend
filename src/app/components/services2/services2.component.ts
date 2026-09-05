import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, onScroll } from 'animejs';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-services2',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './services2.component.html',
  styleUrl: './services2.component.scss',
})
export class Services2Component implements AfterViewInit, OnDestroy {
  @ViewChild('switcher') switcher?: ElementRef<HTMLElement>;
  @ViewChild('list') list?: ElementRef<HTMLElement>;
  @ViewChild('indicator') indicator?: ElementRef<HTMLElement>;
  @ViewChild('panel') panel?: ElementRef<HTMLElement>;
  @ViewChildren('item') itemEls?: QueryList<ElementRef<HTMLElement>>;

  services = [
    {
      icon: '🎨',
      title: 'Diseño personalizado',
      desc: 'Creamos el diseño ideal para tu marca. Sin plantillas, 100% a medida.',
      metric: { label: 'Satisfacción', value: 100 },
      tags: ['Paleta a medida', 'Tipografías', 'UI/UX'],
    },
    {
      icon: '⚡',
      title: 'Desarrollo rápido',
      desc: 'Sitios optimizados, rápidos y con las últimas tecnologías del mercado.',
      metric: { label: 'Page Speed', value: 98 },
      tags: ['Código optimizado', 'Lazy loading', 'Cache'],
    },
    {
      icon: '📱',
      title: 'Responsive & Mobile',
      desc: 'Tu web se ve perfecta en cualquier dispositivo, desde móvil hasta desktop.',
      metric: { label: 'Compatibilidad', value: 100 },
      tags: ['Mobile-first', 'Tablet', 'Desktop'],
    },
    {
      icon: '🔒',
      title: 'Seguridad & SEO',
      desc: 'Implementamos buenas prácticas de seguridad y posicionamiento en buscadores.',
      metric: { label: 'SEO Score', value: 95 },
      tags: ['SSL', 'Backups automáticos', 'Meta tags'],
    },
    {
      icon: '🛠️',
      title: 'Mantenimiento',
      desc: 'Te acompañamos después del lanzamiento con soporte y actualizaciones.',
      metric: { label: 'Uptime', value: 99 },
      tags: ['Monitoreo 24/7', 'Actualizaciones', 'Soporte'],
    },
    {
      icon: '🚀',
      title: 'Deploy & Hosting',
      desc: 'Nos encargamos de publicar y mantener tu sitio en línea sin complicaciones.',
      metric: { label: 'Automatización', value: 100 },
      tags: ['CI/CD', 'SSL incluido', 'Backups'],
    },
  ];

  activeIndex = 0;
  ringPct = 0;

  private reduceMotion = false;
  private autoTimer?: ReturnType<typeof setInterval>;
  private switching = false;

  ngAfterViewInit() {
    this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    requestAnimationFrame(() => this.moveIndicator(0, false));
    this.animateRing(this.services[0].metric.value);

    if (!this.reduceMotion && this.switcher) {
      animate(this.switcher.nativeElement, {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 700,
        ease: 'outExpo',
        autoplay: onScroll({
          target: this.switcher.nativeElement,
          enter: 'bottom-=10% top',
        }),
      });
    }

    this.startAutoAdvance();
  }

  select(i: number) {
    if (i === this.activeIndex || this.switching) {
      this.resetAutoAdvance();
      return;
    }
    this.switching = true;
    this.moveIndicator(i, true);

    if (this.reduceMotion || !this.panel) {
      this.activeIndex = i;
      this.ringPct = this.services[i].metric.value;
      this.switching = false;
    } else {
      animate(this.panel.nativeElement, {
        opacity: [1, 0],
        translateY: [0, -10],
        duration: 180,
        ease: 'inQuad',
        onComplete: () => {
          this.activeIndex = i;
          this.animateRing(this.services[i].metric.value);
          animate(this.panel!.nativeElement, {
            opacity: [0, 1],
            translateY: [10, 0],
            duration: 320,
            ease: 'outQuad',
            onComplete: () => (this.switching = false),
          });
        },
      });
    }

    this.resetAutoAdvance();
  }

  private moveIndicator(i: number, smooth: boolean) {
    const item = this.itemEls?.get(i)?.nativeElement;
    const list = this.list?.nativeElement;
    const indicator = this.indicator?.nativeElement;
    if (!item || !list || !indicator) return;

    const itemRect = item.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    const top = itemRect.top - listRect.top;

    if (!smooth || this.reduceMotion) {
      indicator.style.transform = `translateY(${top}px)`;
      indicator.style.height = `${itemRect.height}px`;
      return;
    }

    animate(indicator, {
      translateY: top,
      height: itemRect.height,
      duration: 400,
      ease: 'outQuad',
    });
  }

  private animateRing(target: number) {
    if (this.reduceMotion) {
      this.ringPct = target;
      return;
    }
    const proxy = { pct: 0 };
    animate(proxy, {
      pct: target,
      duration: 900,
      ease: 'outExpo',
      onUpdate: () => (this.ringPct = Math.round(proxy.pct)),
    });
  }

  private startAutoAdvance() {
    if (this.reduceMotion) return;
    this.autoTimer = setInterval(() => {
      const next = (this.activeIndex + 1) % this.services.length;
      this.select(next);
    }, 4500);
  }

  private resetAutoAdvance() {
    if (this.autoTimer) clearInterval(this.autoTimer);
    this.startAutoAdvance();
  }

  ngOnDestroy() {
    if (this.autoTimer) clearInterval(this.autoTimer);
  }
}
