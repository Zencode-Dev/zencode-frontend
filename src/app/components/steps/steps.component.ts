import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss',
})
export class StepsComponent {
  steps = [
    {
      num: '01',
      icon: '💬',
      title: 'Consulta inicial',
      desc: 'Nos reunimos para conocerte a vos y a tu negocio. Entendemos tus objetivos, tu público y lo que necesitás comunicar.',
      details: [
        'Reunión sin costo ni compromiso',
        'Análisis de tu competencia y mercado',
        'Definición de objetivos y alcance del proyecto',
      ],
    },
    {
      num: '02',
      icon: '🎨',
      title: 'Propuesta & diseño',
      desc: 'Creamos una propuesta visual completa y personalizada. Cada elemento es pensado para representar tu marca de forma única.',
      details: [
        'Paleta de colores y tipografías a medida',
        'Wireframes y bocetos de la estructura',
        'Revisión y aprobación antes de desarrollar',
      ],
    },
    {
      num: '03',
      icon: '⚙️',
      title: 'Desarrollo',
      desc: 'Llevamos el diseño a código. Usamos tecnologías modernas para garantizar velocidad, seguridad y una experiencia fluida.',
      details: [
        'Código limpio, escalable y bien estructurado',
        'Optimización de rendimiento y SEO técnico',
        'Diseño 100% responsive para todos los dispositivos',
      ],
    },
    {
      num: '04',
      icon: '🔍',
      title: 'Revisión & ajustes',
      desc: 'Trabajamos codo a codo con vos para pulir cada detalle. Tu feedback es parte fundamental del proceso.',
      details: [
        'Rondas de revisión incluidas en el presupuesto',
        'Pruebas en distintos navegadores y dispositivos',
        'Ajustes hasta que el resultado sea perfecto',
      ],
    },
    {
      num: '05',
      icon: '🚀',
      title: 'Lanzamiento & soporte',
      desc: 'Publicamos tu sitio, configuramos el dominio y te acompañamos en el arranque. No te dejamos solo después de entregar.',
      details: [
        'Deploy y configuración del hosting',
        'Capacitación para gestionar tu propio contenido',
        'Soporte post-lanzamiento incluido',
      ],
    },
    {
      num: '06',
      icon: '🛡️',
      title: 'Hosting & mantenimiento',
      desc: 'Nos ocupamos de que tu sitio esté siempre en línea, seguro y actualizado. Podés elegir el plan que mejor se adapte a tu negocio.',
      details: [
        'Hosting gestionado por nuestro equipo',
        'Plan de abono mensual con actualizaciones incluidas',
        'Cambios y mejoras a pedido cuando los necesités',
      ],
    },
  ];
}
