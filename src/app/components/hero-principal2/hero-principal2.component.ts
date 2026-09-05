import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero-principal2',
  imports: [],
  templateUrl: './hero-principal2.component.html',
  styleUrl: './hero-principal2.component.scss',
})
export class HeroPrincipal2Component implements AfterViewInit, OnDestroy {
  @ViewChild('eyebrow') eyebrow?: ElementRef<HTMLElement>;
  @ViewChild('headline') headline?: ElementRef<HTMLElement>;
  @ViewChild('desc') desc?: ElementRef<HTMLElement>;
  @ViewChild('actions') actions?: ElementRef<HTMLElement>;
  @ViewChild('stats') stats?: ElementRef<HTMLElement>;
  @ViewChild('visual') visual?: ElementRef<HTMLElement>;
  @ViewChild('magneticBtn') magneticBtn?: ElementRef<HTMLElement>;
  @ViewChildren('cardPerf, cardTech, cardSpeed, cardResponsive') floatCards?: QueryList<ElementRef<HTMLElement>>;

  private cleanupMagnetic?: () => void;
  private parallaxTrigger?: ScrollTrigger;

  ngAfterViewInit() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (this.visual) {
      tl.from(this.visual.nativeElement, { scale: 0.85, opacity: 0, duration: 0.9 }, 0);
    }
    if (this.eyebrow) {
      tl.from(this.eyebrow.nativeElement, { y: 14, opacity: 0, duration: 0.5 }, 0.1);
    }
    if (this.headline) {
      tl.from(this.headline.nativeElement, { y: 24, opacity: 0, duration: 0.7 }, 0.2);
    }
    if (this.desc) {
      tl.from(this.desc.nativeElement, { y: 16, opacity: 0, duration: 0.6 }, '-=0.4');
    }
    if (this.actions) {
      tl.from(this.actions.nativeElement.children, { y: 16, opacity: 0, duration: 0.5 }, '-=0.3');
    }
    if (this.stats) {
      tl.from(this.stats.nativeElement.children, { y: 14, opacity: 0, duration: 0.4, stagger: 0.08 }, '-=0.2');
    }
    if (this.floatCards?.length) {
      tl.from(
        this.floatCards.map((c) => c.nativeElement),
        { scale: 0.6, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'back.out(1.6)' },
        '-=0.3'
      );
    }

    this.setupMagneticButton();
    this.setupParallax();
  }

  private setupMagneticButton() {
    const btn = this.magneticBtn?.nativeElement;
    if (!btn || window.matchMedia('(pointer: coarse)').matches) return;

    const moveX = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3.out' });
    const moveY = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3.out' });

    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      moveX(relX * 0.3);
      moveY(relY * 0.3);
    };

    const onLeave = () => {
      moveX(0);
      moveY(0);
    };

    btn.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', onLeave);

    this.cleanupMagnetic = () => {
      btn.removeEventListener('mousemove', onMove);
      btn.removeEventListener('mouseleave', onLeave);
    };
  }

  private setupParallax() {
    if (!this.visual || window.matchMedia('(pointer: coarse)').matches) return;

    this.parallaxTrigger = ScrollTrigger.create({
      trigger: '.hero2',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.6,
      onUpdate: (self) => {
        gsap.set(this.visual!.nativeElement, { y: self.progress * 50 });
      },
    });
  }

  ngOnDestroy() {
    this.cleanupMagnetic?.();
    this.parallaxTrigger?.kill();
  }
}
