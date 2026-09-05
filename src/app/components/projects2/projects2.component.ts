import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { animate, onScroll } from 'animejs';
import { environment } from '../../../environments/environment';
import { RevealDirective } from '../../directives/reveal.directive';

type ProjectStatus = 'completed' | 'in-progress';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  status: ProjectStatus;
}

type FilterValue = 'all' | ProjectStatus;

@Component({
  selector: 'app-projects2',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects2.component.html',
  styleUrl: './projects2.component.scss',
})
export class Projects2Component implements OnInit, OnDestroy {
  @ViewChild('viewport') viewport?: ElementRef<HTMLElement>;
  @ViewChild('track') track?: ElementRef<HTMLElement>;
  @ViewChildren('slide') slides?: QueryList<ElementRef<HTMLElement>>;

  projects: Project[] = [];
  activeFilter: FilterValue = 'all';
  currentIndex = 0;

  filters: { value: FilterValue; label: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'completed', label: 'Finalizados' },
    { value: 'in-progress', label: 'En desarrollo' },
  ];

  private reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  private autoTimer?: ReturnType<typeof setInterval>;
  private initialized = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Project[]>(`${environment.apiUrl}/api/projects`).subscribe({
      next: (data) => {
        this.projects = data;
        setTimeout(() => this.initCarousel());
      },
      error: () => (this.projects = []),
    });
  }

  private initCarousel() {
    if (this.initialized || !this.viewport) return;
    this.initialized = true;

    if (!this.reduceMotion) {
      animate(this.viewport.nativeElement.closest('.carousel')!, {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 700,
        ease: 'outExpo',
        autoplay: onScroll({
          target: this.viewport.nativeElement,
          enter: 'bottom-=10% top',
        }),
      });
    }

    this.startAutoAdvance();
  }

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter((p) => p.status === this.activeFilter);
  }

  setFilter(value: FilterValue) {
    if (value === this.activeFilter) return;
    this.activeFilter = value;
    this.currentIndex = 0;
    setTimeout(() => this.moveTrack(0, false), 0);
    this.resetAutoAdvance();
  }

  prev() {
    const len = this.filteredProjects.length;
    if (len < 2) return;
    this.goTo((this.currentIndex - 1 + len) % len);
  }

  next() {
    const len = this.filteredProjects.length;
    if (len < 2) return;
    this.goTo((this.currentIndex + 1) % len);
  }

  goTo(i: number) {
    this.currentIndex = i;
    this.moveTrack(i, true);
    this.resetAutoAdvance();
  }

  statusLabel(status: ProjectStatus): string {
    return status === 'completed' ? 'Finalizado' : 'En desarrollo';
  }

  private moveTrack(i: number, smooth: boolean) {
    const slide = this.slides?.get(i)?.nativeElement;
    const track = this.track?.nativeElement;
    if (!slide || !track) return;

    const offset = -slide.offsetLeft;

    if (!smooth || this.reduceMotion) {
      track.style.transform = `translateX(${offset}px)`;
      return;
    }

    animate(track, {
      translateX: offset,
      duration: 500,
      ease: 'outExpo',
    });
  }

  private startAutoAdvance() {
    if (this.reduceMotion) return;
    this.autoTimer = setInterval(() => {
      if (this.filteredProjects.length > 1) this.next();
    }, 5000);
  }

  private resetAutoAdvance() {
    if (this.autoTimer) clearInterval(this.autoTimer);
    this.startAutoAdvance();
  }

  ngOnDestroy() {
    if (this.autoTimer) clearInterval(this.autoTimer);
  }
}
