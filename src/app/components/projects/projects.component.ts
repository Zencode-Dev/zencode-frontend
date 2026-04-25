import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Project[]>('http://192.168.1.85:3000/api/projects').subscribe({
      next: (data) => (this.projects = data),
      error: () => (this.projects = []),
    });
  }
}
