import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  activeIndex: number | null = null;

  faqs = [
    {
      question: '¿Cuánto tiempo tarda en desarrollarse un sitio web?',
      answer:
        'El tiempo varía según la complejidad del proyecto. Un sitio institucional o landing page suele estar listo en 2 a 4 semanas. Proyectos más complejos con funcionalidades a medida pueden llevar entre 4 y 8 semanas. Siempre acordamos un plazo claro antes de arrancar.',
    },
    {
      question: '¿Puedo pedir cambios una vez que el sitio esté listo?',
      answer:
        'Sí. Incluimos una ronda de revisiones dentro del proceso de desarrollo para ajustar detalles. Además, ofrecemos planes de mantenimiento para que puedas solicitar cambios y actualizaciones cuando lo necesites.',
    },
    {
      question: '¿Qué necesito tener listo antes de empezar el proyecto?',
      answer:
        'Lo básico es tener claro el objetivo del sitio y contar con el contenido principal: textos, imágenes y logo. Si no los tenés, podemos asesorarte. La consulta inicial es gratuita y sin compromiso.',
    },
    {
      question: '¿El sitio va a funcionar bien en celular y tablet?',
      answer:
        'Sí, todos nuestros desarrollos son 100% responsive. Diseñamos y probamos cada sección para que se vea y funcione de forma óptima en cualquier dispositivo, desde un teléfono hasta un monitor de escritorio.',
    },
    {
      question: '¿Quién se encarga del hosting y el dominio?',
      answer:
        'Nos ocupamos nosotros. Gestionamos el alta del dominio, la configuración del hosting y el deploy del sitio. También podemos trabajar con proveedores que ya tengas contratados si lo preferís.',
    },
  ];

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
