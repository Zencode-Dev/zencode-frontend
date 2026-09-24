import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../data/projects.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-related-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './related-projects.component.html',
  styleUrl: './related-projects.component.scss',
})
export class RelatedProjectsComponent {
  @Input({ required: true }) projects: Project[] = [];
  @Input() heading = 'Casos relacionados';
}
