import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-feature-grid',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './feature-grid.component.html',
  styleUrl: './feature-grid.component.scss',
})
export class FeatureGridComponent {
  @Input({ required: true }) heading!: string;
  @Input() subheading = '';
  @Input({ required: true }) items: FeatureItem[] = [];
  /** Nivel del heading visible: por defecto h2 (usar h3 si la sección ya está dentro de otro h2). */
  @Input() headingLevel: 'h2' | 'h3' = 'h2';
}
