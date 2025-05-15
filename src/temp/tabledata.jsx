import Inscripciones from "../files/studentSections/Inscripciones";

export const tabs = [
  { clave: 'primero', titulo: 'Primero' },
  { clave: 'segundo', titulo: 'Segundo' },
  { clave: 'tercero', titulo: 'Tercero' },
];

export const tabledata = {
  primero: [
    { id: 1, nombre: 'Jhon', estado: 'Activo' },
    { id: 2, nombre: 'Brayner', estado: 'Inactivo' },
  ],
  segundo: [
    { id: 3, nombre: 'Carlos', estado: 'Activo' },
    { id: 4, nombre: 'Laura', estado: 'Inactivo' },
  ],
  tercero: [
    { id: 5, nombre: 'Pedro', estado: 'Activo' },
    { id: 6, nombre: 'María', estado: 'Inactivo' },
  ],
};

export const studentsInscripciones = {
  primero: [
    { Nombre: 'Nombre del Alumno', CURP: 'AELA010623MOCBPLA5', Status: 'Documentación Faltante' },
    { Nombre: 'Nombre del Alumno', CURP: 'AELA010623MOCBPLA5', Status: 'Pago Faltante' },
  ],
  segundo: [
    { Nombre: 'Nombre del Alumno', CURP: 'AELA010623MOCBPLA5', Status: 'Pago Faltante' },
    { Nombre: 'Nombre del Alumno', CURP: 'AELA010623MOCBPLA5', Status: 'Documentación Faltante' },
  ],
  tercero: [
    { Nombre: 'Nombre del Alumno', CURP: 'AELA010623MOCBPLA5', Status: 'Pago Faltante' },
    { Nombre: 'Nombre del Alumno', CURP: 'AELA010623MOCBPLA5', Status: 'Documentación Faltante' },
  ],
}



export const studentActions = [
  'Preinscripciones',
  'Inscripciones',
  'Baja Temporal',
  'Cambio de Grupo',
  'Expediente del alumno',
  'Baja definitiva'
]



export const eventList = [
  {
    title: 'Junta Padres de Familia',
    colorT: '#e5254b',
    date: '2025-06-01'
  },
  {
    title: 'Junta de Consejo Técnico',
    colorT: '#ea7000',
    date: '2025-06-07'
  },
  {
    title: 'Reunión Programada',
    colorT: '#038100',
    date: '2025-06-12'
  },
  {
    title: 'Reunión con Proveedores',
    colorT: '#174ea6',
    date: '2025-06-15'
  },
  {
    title: 'Firma de Boletas',
    colorT: '#ffc30f',
    date: '2025-06-20'
  }
];

export const notificationsElements = [
  { user: 'Docente', icon: 'icon9', info: 'Creó un evento' },
  { user: 'Administrador', icon: 'icon1', info: 'Agendó una reunión' },
  { user: 'Docente', icon: 'icon4', info: 'Solicita información' },
  { user: 'Administrador', icon: 'icon3', info: 'Creó un evento' },
  { user: 'Docente', icon: 'icon6', info: 'Agendó una reunión' },
  { user: 'Administrador', icon: 'icon2', info: 'Solicita información' },
  { user: 'Docente', icon: 'icon10', info: 'Creó un evento' },
  { user: 'Administrador', icon: 'icon5', info: 'Agendó una reunión' },
  { user: 'Docente', icon: 'icon7', info: 'Solicita información' },
  { user: 'Administrador', icon: 'icon8', info: 'Creó un evento' },
]

export const sideBarContent = {
  directivos: [
    { title: 'Alumnos', icon: 'child_care', navname: '/alumnos' },
    { title: 'Plantilla', icon: 'group', navname: '/plantilla' },
    { title: 'Proveedores', icon: 'storefront', navname: '/proveedores' },
    { title: 'Eventos', icon: 'calendar_month', navname: '/eventos' },
    { title: 'Documentos', icon: 'description', navname: '/documentos' },
    { title: 'Balance', icon: 'payments', navname: '/balance' },
    { title: 'Usuarios', icon: 'group_add', navname: '/usuarios' }
  ],
  padres_familia: [
    { title: 'Acceso', icon: 'key', navname: '/acceso' },
    { title: 'Monitoreo', icon: 'camera_video', navname: '/monitoreo' },
    { title: 'Pagos', icon: 'payments', navname: '/pagos' },
    { title: 'Permisos', icon: 'description', navname: '/permisos' }
  ]
}

export const studentSections ={
  'Inscripciones': <Inscripciones></Inscripciones>
}


