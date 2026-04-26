import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss',
})
export class WhatsappButtonComponent {
  // Reemplazá con el número real (código de país sin +, sin espacios)
  readonly phone = '+543471330560';
  readonly message = encodeURIComponent('Hola Zencode! Me interesa saber más sobre sus servicios');
  readonly url = `https://wa.me/${this.phone}?text=${this.message}`;
}
