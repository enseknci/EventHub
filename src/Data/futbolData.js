import gsRize from "./FutbolPicture/gs-rize.jpg";
import sivasAlanya from "./FutbolPicture/sivas-alanya.jpg";
import fbPendik from "./FutbolPicture/fb-pendik.jpg";
import gaziantepBjk from "./FutbolPicture/gaziantep-bjk.jpg";
import boluGiresun from "./FutbolPicture/bolu-giresun.jpg";
import bodrumBolu from "./FutbolPicture/bodrum-bolu.jpg";

const futbolData = [
  {
    name: "Galatasaray A.Ş - Çaykur Rizespor A.Ş",
    date: "2024-03-10",
    time: "19:00",
    location: "Rams Park Stadyumu",
    ticketsAvailable: true,
    ticketPrice: 120,
    image: gsRize,
  },
  {
    name: "EMS Yapı Sivasspor - Corendon Alanyaspor ",
    date: "2024-03-09",
    time: "13:30",
    location: "4 Eylül Stadyumu",
    ticketsAvailable: false,
    ticketPrice: null,
    image: sivasAlanya,
  },
  {
    name: "Fenerbahçe - Pendikspor",
    date: "2024-03-20",
    time: "19:30",
    location: "Şükrü Saracoğlu Stadyumu",
    ticketsAvailable: true,
    ticketPrice: 120,
    image: fbPendik,
  },
  {
    name: "Gaziantep FK - Beşiktaş",
    date: "2024-03-25",
    time: "19:30",
    location: "Kalyon Stadyumu",
    ticketsAvailable: true,
    ticketPrice: 300,
    image: gaziantepBjk,
  },
  {
    name: "Boluspor - Giresunspor",
    date: "2024-03-26",
    time: "20:00",
    location: "Bolu Atatürk Stadyumu",
    ticketsAvailable: true,
    ticketPrice: 120,
    image: boluGiresun,
  },
  {
    name: "Bodrumspor- Boluspor",
    date: "2024-04-20",
    time: "20:00",
    location: "Bodrum İlçe Stadyumu",
    image: bodrumBolu,
  },
];

export default futbolData;
