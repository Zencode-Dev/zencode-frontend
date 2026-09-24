import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { FAQS } from '../../data/faqs.data';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  activeIndex: number | null = null;
  faqs = FAQS;

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
