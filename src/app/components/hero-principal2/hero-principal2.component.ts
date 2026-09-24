import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { animate, createTimeline, onScroll, set, stagger } from 'animejs';

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
  private parallaxScroll?: ReturnType<typeof onScroll>;

  ngAfterViewInit() {
    if (typeof window === 'undefined') return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const tl = createTimeline({ defaults: { ease: 'outCubic' } });

    if (this.visual) {
      tl.add(this.visual.nativeElement, { scale: [0.85, 1], opacity: [0, 1], duration: 900 }, 0);
    }
    if (this.eyebrow) {
      tl.add(this.eyebrow.nativeElement, { y: [14, 0], opacity: [0, 1], duration: 500 }, 100);
    }
    if (this.headline) {
      tl.add(this.headline.nativeElement, { y: [24, 0], opacity: [0, 1], duration: 700 }, 200);
    }
    if (this.desc) {
      tl.add(this.desc.nativeElement, { y: [16, 0], opacity: [0, 1], duration: 600 }, '-=400');
    }
    if (this.actions) {
      tl.add(this.actions.nativeElement.children, { y: [16, 0], opacity: [0, 1], duration: 500 }, '-=300');
    }
    if (this.stats) {
      tl.add(
        this.stats.nativeElement.children,
        { y: [14, 0], opacity: [0, 1], duration: 400, delay: stagger(80) },
        '-=200'
      );
    }
    if (this.floatCards?.length) {
      tl.add(
        this.floatCards.map((c) => c.nativeElement),
        { scale: [0.6, 1], opacity: [0, 1], duration: 600, delay: stagger(120), ease: 'outBack' },
        '-=300'
      );
    }

    this.setupMagneticButton();
    this.setupParallax();
  }

  private setupMagneticButton() {
    const btn = this.magneticBtn?.nativeElement;
    if (!btn || window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      animate(btn, { x: relX * 0.3, y: relY * 0.3, duration: 400, ease: 'outCubic' });
    };

    const onLeave = () => {
      animate(btn, { x: 0, y: 0, duration: 400, ease: 'outCubic' });
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

    const trigger = this.visual.nativeElement.closest('.hero2') as HTMLElement;
    if (!trigger) return;

    this.parallaxScroll = onScroll({
      target: trigger,
      enter: 'top top',
      leave: 'top end',
      onUpdate: (self) => {
        set(this.visual!.nativeElement, { y: self.progress * 50 });
      },
    });
  }

  ngOnDestroy() {
    this.cleanupMagnetic?.();
    this.parallaxScroll?.revert();
  }
}
