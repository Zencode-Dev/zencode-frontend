import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  constructor(private http: HttpClient) {}

  submit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.status = 'loading';

    this.http.post('http://192.168.1.85:3000/api/contact', this.form).subscribe({
      next: () => {
        this.status = 'success';
        this.form = { name: '', email: '', message: '' };
      },
      error: () => (this.status = 'error'),
    });
  }
}
