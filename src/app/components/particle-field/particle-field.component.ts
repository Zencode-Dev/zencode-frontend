import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

@Component({
  selector: 'app-particle-field',
  standalone: true,
  template: `<canvas #canvas class="particle-canvas"></canvas>`,
  styles: [
    `
      :host {
        position: absolute;
        inset: 0;
        display: block;
        z-index: 0;
        pointer-events: none;
      }
      .particle-canvas {
        width: 100%;
        height: 100%;
        display: block;
      }
    `,
  ],
})
export class ParticleFieldComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @Input() density = 0.00009;
  @Input() maxParticles = 90;
  @Input() linkDistance = 130;
  @Input() color = '184, 130, 235';

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private raf = 0;
  private resizeObserver?: ResizeObserver;
  private width = 0;
  private height = 0;
  private reduceMotion = false;

  ngAfterViewInit() {
    this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    this.ctx = ctx;

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas.parentElement ?? canvas);
    this.resize();

    if (!this.reduceMotion) {
      this.raf = requestAnimationFrame(this.tick);
    } else {
      this.draw();
    }
  }

  private resize() {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;
    if (!parent) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = parent.clientWidth;
    this.height = parent.clientHeight;
    canvas.width = this.width * dpr;
    canvas.height = this.height * dpr;
    canvas.style.width = `${this.width}px`;
    canvas.style.height = `${this.height}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(this.maxParticles, Math.round(this.width * this.height * this.density));
    this.particles = Array.from({ length: count }, () => this.makeParticle());
  }

  private makeParticle(): Particle {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.6 + 0.6,
    };
  }

  private tick = () => {
    this.step();
    this.draw();
    this.raf = requestAnimationFrame(this.tick);
  };

  private step() {
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;
    }
  }

  private draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const a = this.particles[i];
      for (let j = i + 1; j < this.particles.length; j++) {
        const b = this.particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.linkDistance) {
          const opacity = 1 - dist / this.linkDistance;
          ctx.strokeStyle = `rgba(${this.color}, ${opacity * 0.35})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const p of this.particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, 0.75)`;
      ctx.fill();
    }
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.raf);
    this.resizeObserver?.disconnect();
  }
}
