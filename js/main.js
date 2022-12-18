import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import wedCam from "./deteccion_wedcam.js";
import searchFilters from "./filtro_busqueda.js";
import getGeolocation from "./geolocalizacion.js";
import responseMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import scrollTopButton from "./scrollTopButton.js";
import draw from "./sorteo.js";
import darkTheme from "./tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  scrollTopButton(".scroll-top-btn");
  responseMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank" rel="noopener"> Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responseMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/5YADyoGx32C2gZ9D9" target="_blank" rel="noopener"> Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15768.766384900271!2d-73.81953222273664!3d8.861747897691655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5e0aea2dd76745%3A0x9361780a2ba1170e!2sTamalameque%2C%20Cesar!5e0!3m2!1ses!2sco!4v1671158249665!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  //wedCam("wedcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
