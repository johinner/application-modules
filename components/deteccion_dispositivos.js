const d = document,
  n = navigator,
  ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/ipone|ipad|ipod/i),
      window: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.window();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      window: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.window();
      },
    },
    isBrowser = {
      chorome: () => ua.match(/chorome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chorome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.edge() ||
          this.ia()
        );
      },
    };

  $id.innerHTML = `
  <ul>
    <li> User Agent: <b>${ua}</b></li>
    <li> Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
    <li> Navegador: <b>${isBrowser.any()}</b></li>
  </ul>`
  !isMobile.android()
    ? $id.innerHTML += "<p><mark>Este contenido solo esta disponible para Android</mark></p>"
    : $id.innerHTML += "<p><mark>Estas en el mundo de Android</mark></p>";
}
