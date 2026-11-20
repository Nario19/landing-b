export const companyName = "Corporación San Carlos Tours";

export const navigation = [
  { href: "/nosotros/", label: "Nosotros" },
  { href: "/servicios/", label: "Servicios" },
  { href: "/rutas/", label: "Rutas y tarifas" },
  { href: "/flota/", label: "Flota" },
  { href: "/comunicados/", label: "Comunicados" },
  { href: "/objetos-perdidos/", label: "Objetos perdidos" },
  { href: "/reclamaciones/", label: "Quejas" },
];

interface Route {
  id: string;
  origin: string;
  destination: string;
  corridor: string;
  stops: string[];
  hours: string;
  frequency: string;
  fare: number;
}

export const routes: Route[] = [
  {
    id: "R1",
    origin: "Huancayo",
    destination: "El Tambo",
    corridor: "Av. Real",
    stops: ["Huancayo Centro", "Av. Real", "El Tambo"],
    hours: "06:00–21:00",
    frequency: "Cada 15 min",
    fare: 2,
  },
  {
    id: "R2",
    origin: "Huancayo",
    destination: "Chilca",
    corridor: "Av. Real",
    stops: ["Huancayo Centro", "Av. Real", "Chilca"],
    hours: "06:30–20:30",
    frequency: "Cada 20 min",
    fare: 2,
  },
  {
    id: "R3",
    origin: "Huancayo",
    destination: "Pilcomayo",
    corridor: "Puente La Breña",
    stops: ["Huancayo Centro", "Puente La Breña", "Pilcomayo"],
    hours: "07:00–20:00",
    frequency: "Cada 25 min",
    fare: 3,
  },
];

export const services = [
  {
    title: "Viajes compartidos",
    text: "Varios pasajeros pueden viajar en el mismo vehículo y cada uno paga por su trayecto.",
  },
  {
    title: "Recorridos establecidos",
    text: "Los autos siguen un recorrido que une puntos de embarque y descenso.",
  },
  {
    title: "Información al pasajero",
    text: "Consulta los recorridos, horarios y tarifas antes de salir.",
  },
];

export const questions = [
  {
    title: "¿Cómo funciona un auto colectivo?",
    text: "Es un auto compartido que sigue una ruta establecida. Cada pasajero paga por su trayecto.",
  },
  {
    title: "¿Los horarios y tarifas de la página son oficiales?",
    text: "Por ahora son ejemplos para mostrar cómo se presentará la información. Los datos del servicio se publicarán después de su confirmación.",
  },
  {
    title: "¿Qué información debo guardar si ocurre un incidente?",
    text: "Anota la fecha, la hora aproximada, la ruta, lo sucedido y la placa de la unidad si la conoces.",
  },
];
