export type Service = {
  id: string;
  tag: string;
  name: string;
  category: string;
  summary: string;
  includes: string[];
  deliverable: string;
};

export const services: Service[] = [
  {
    id: "auditoria",
    tag: "01",
    name: "Auditoría express",
    category: "Revisión técnica",
    summary: "Abro el código de tu sitio o diseño generado con IA, encuentro los errores y te digo exactamente qué arreglar.",
    includes: ["Revisión de rendimiento y velocidad", "Errores de diseño responsivo", "SEO básico y accesibilidad", "Riesgos antes de publicar"],
    deliverable: "Informe con diagnóstico y recomendaciones priorizadas.",
  },
  {
    id: "responsivo",
    tag: "02",
    name: "Arreglo responsivo",
    category: "Desarrollo",
    summary: "Tu página se ve perfecta en celular, tablet y computador. Sin elementos rotos ni textos cortados.",
    includes: ["Ajuste en todos los tamaños de pantalla", "Corrección de menús y formularios", "Imágenes optimizadas", "Pruebas en dispositivos reales"],
    deliverable: "Sitio funcionando bien en cualquier dispositivo.",
  },
  {
    id: "ia-produccion",
    tag: "03",
    name: "De IA a producción",
    category: "Desarrollo e implementación",
    summary: "Tomo el diseño que hiciste con IA y lo convierto en un sitio real, publicado y listo para clientes.",
    includes: ["Limpieza y orden del código", "Dominio y publicación", "Formularios y analítica", "Optimización para buscadores"],
    deliverable: "Sitio publicado y funcionando en tu dominio.",
  },
  {
    id: "backend",
    tag: "04",
    name: "Con backend",
    category: "Desarrollo e implementación",
    summary: "Cuando tu proyecto necesita más: usuarios, base de datos, pagos o paneles de administración.",
    includes: ["Registro e inicio de sesión", "Base de datos", "Pagos e integraciones", "Panel de administración"],
    deliverable: "Aplicación web completa y funcionando.",
  },
  {
    id: "creacion-desde-cero",
    tag: "05",
    name: "Creación desde cero",
    category: "Diseño y desarrollo web",
    summary: "Creo tu sitio web desde la idea, con una estructura y diseño hechos para las necesidades de tu negocio.",
    includes: ["Definición de estructura y contenido", "Diseño adaptable a celular y computador", "Desarrollo de páginas y formularios", "Preparación para publicar"],
    deliverable: "Sitio web nuevo y funcional, listo para presentar tu negocio.",
  },
  {
    id: "mantenimiento",
    tag: "06",
    name: "Mantenimiento mensual",
    category: "Soporte técnico",
    summary: "Me encargo de que tu sitio siga funcionando: cambios, actualizaciones y respuesta rápida ante fallas.",
    includes: ["Cambios menores de contenido", "Copias de seguridad", "Monitoreo y corrección de errores", "Soporte por chat"],
    deliverable: "Tranquilidad: tu sitio siempre al día.",
  },
];

export const steps = [
  { n: "01", title: "Me cuentas", text: "Me envías tu diseño, enlace o idea. Conversamos 20 minutos sobre lo que necesitas." },
  { n: "02", title: "Revisión", text: "Abro tu código, encuentro los errores y te entrego una propuesta clara: qué arreglaré, en cuánto tiempo y a qué precio." },
  { n: "03", title: "Construcción", text: "Desarrollo y te muestro avances. Tú apruebas antes de publicar." },
  { n: "04", title: "Entrega", text: "Tu sitio queda publicado y funcionando. Si quieres, sigo con el mantenimiento mensual." },
];
