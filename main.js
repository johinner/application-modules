import slider from "./components/carrusel.js";
import countdown from "./components/cuenta_regresiva.js";
import userDeviceInfo from "./components/deteccion_dispositivos.js";
import networkStatus from "./components/deteccion_red.js";
import wedCam from "./components/deteccion_wedcam.js";
import searchFilters from "./components/filtro_busqueda.js";
import getGeolocation from "./components/geolocalizacion.js";
import hamburgeMenu from "./components/menu_hamburguesa.js";
import speechReader from "./components/narrador.js";
import responseMedia from "./components/objeto_responsive.js";
import responsiveTester from "./components/prueba_responsive.js";
import scrollTopButton from "./components/scrollTopButton.js";
import scrollSpy from "./components/scroll_spia.js";
import draw from "./components/sorteo.js";
import { moveBall } from "./components/teclado.js";
import darkTheme from "./components/tema_oscuro.js";
import contactFromValidations from "./components/validaciones_fromulario.js";
import smartVideo from "./components/video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgeMenu(".panel-btn", ".panel", ".menu a");
  scrollTopButton(".scroll-top-btn");
  /*responseMedia(
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
  );*/

  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  //wedCam("wedcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFromValidations();
  countdown("countdown", "05 06,2023, 0:0:00", "Feliz cumple Johinner");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();

d.addEventListener("keydown", (e) => {
  moveBall(e, ".ball", ".stage");
});
