import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
  selector: 'app-projects1',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects1.component.html',
  styleUrl: './projects1.component.scss',
})
export class Projects1Component implements OnInit {
  projects: Project[] = [];
  activeFilter: FilterValue = 'all';
  isSwitching = false;

  filters: { value: FilterValue; label: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'completed', label: 'Finalizados' },
    { value: 'in-progress', label: 'En desarrollo' },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Project[]>(`${environment.apiUrl}/api/projects`).subscribe({
      next: (data) => (this.projects = data),
      error: () => (this.projects = []),
    });
  }

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter((p) => p.status === this.activeFilter);
  }

  setFilter(value: FilterValue) {
    if (value === this.activeFilter) return;
    this.isSwitching = true;
    window.setTimeout(() => {
      this.activeFilter = value;
      this.isSwitching = false;
    }, 200);
  }

  statusLabel(status: ProjectStatus): string {
    return status === 'completed' ? 'Finalizado' : 'En desarrollo';
  }
}
