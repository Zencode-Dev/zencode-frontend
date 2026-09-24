import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Crumb {
  label: string;
  path?: string;
}

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  @Input({ required: true }) heading!: string;
  @Input() eyebrow = '';
  @Input() intro = '';
  @Input({ required: true }) crumbs: Crumb[] = [];
}
