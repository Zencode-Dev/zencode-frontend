// Copia estática sincronizada a mano con backend/projects.json.
// Se usa para que el HTML pre-renderizado (SSG) incluya los proyectos reales
// sin depender de un fetch al backend en tiempo de build.
// Si se agrega/edita un proyecto real en el backend, actualizar también acá.

export type ProjectStatus = 'completed' | 'in-progress';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  status: ProjectStatus;
  ctaLabel?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'ZConnect',
    description:
      'Sistema de chat interno empresarial que conecta a todo tu equipo en tiempo real, sin depender de internet ni de las redes personales de cada empleado. Ideal para plantas, depósitos y operaciones donde la comunicación rápida es crítica: mensajes instantáneos, cero uso de dispositivos personales en el piso de trabajo y un entorno más seguro, con menos distracciones y menos riesgo de accidentes.',
    image: '/projects/zconnect.png',
    tags: ['Angular', 'NestJS', 'Tauri'],
    url: '',
    status: 'in-progress',
  },
  {
    id: 2,
    title: 'ZSphere',
    description:
      'Sistema de ventas moderno y flexible, pensado para adaptarse a cualquier tipo de negocio. Personalizá procesos, pantallas y funciones a tu gusto para tener una herramienta de venta que trabaja como vos trabajás, no al revés.',
    image: '/projects/zsphere.png',
    tags: ['Angular', 'Node.js'],
    url: '',
    status: 'in-progress',
  },
  {
    id: 3,
    title: 'Wapia',
    description:
      'Bots inteligentes para WhatsApp, potenciados con IA y armados a medida según lo que tu negocio necesite: asistente personal, atención de delivery, ventas o soporte al cliente. Automatizá las conversaciones que hoy te quitan tiempo y dejá que la IA responda, tome pedidos y cierre ventas las 24 horas. Registrate y probalo gratis por 14 días, sin tarjeta.',
    image: '/projects/wapia.png',
    tags: ['Node.js', 'WhatsApp API', 'IA / Claude'],
    url: 'https://wapia.com.ar',
    status: 'completed',
  },
  {
    id: 4,
    title: 'Rufina Web',
    description:
      'Sitio web desarrollado para Rufina Estética, centro de belleza, cosmética y cuidado personal en Armstrong, Santa Fe. Una web pensada para mostrar sus servicios —maquillaje, depilación tradicional, limpieza facial y masajes relajantes— y facilitar el contacto directo por WhatsApp, con una presentación prolija que refleja la identidad de la marca y ayuda a captar y fidelizar clientas.',
    image: '/projects/rufina.png',
    tags: ['Angular'],
    url: 'https://rufinaestetica.com.ar',
    status: 'completed',
  },
  {
    id: 5,
    title: 'Zshop',
    description:
      'Tu tienda online, hecha a medida y sin plantillas genéricas. Diseñamos y desarrollamos un e-commerce propio para cada negocio, adaptado a tu marca, tus productos y la forma en que querés vender.',
    image: '/projects/zshop.png',
    tags: ['Angular', 'Node.js'],
    url: '',
    status: 'in-progress',
  },
];
