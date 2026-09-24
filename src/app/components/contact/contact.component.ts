import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  /** En false oculta el título propio (para páginas que ya muestran su H1/intro con app-page-header). */
  @Input() showHeading = true;
  form = { name: '', email: '', message: '' };
  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  constructor(private http: HttpClient) {}

  submit(contactForm: NgForm) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.form.name || !this.form.email || !this.form.message) return;
    if (!emailRegex.test(this.form.email)) return;
    this.status = 'loading';

    this.http.post(`${environment.apiUrl}/api/contact`, this.form).subscribe({
      next: () => {
        this.status = 'success';
        contactForm.resetForm({ name: '', email: '', message: '' });
      },
      error: () => (this.status = 'error'),
    });
  }
}
