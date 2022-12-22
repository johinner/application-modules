const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const success = (position) => {
    let coord = position.coords;
    $id.innerHTML = `<p>Tu posicion actual es:</p>
    <ul>
    <li>Latitud: <b>${coord.latitude}</b></li>
    <li>Longitud: <b>${coord.longitude}</b></li>
    <li>Precision: <b>${coord.accuracy}</b>metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coord.latitude},${coord.longitude},20z" target='_blank' rel="noopener">Ver en Google Maps</a>`;
  };
  const error = (err) => {
    $id.innerHTML = `<p><mark>User denied Geolocatio <br> ${err}</mark></p>`;
  };

  n.geolocation.getCurrentPosition(success, error, options);
}
