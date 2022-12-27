const d = document;

export default function ajaxMarvel(elem) {
  const $div = d.querySelector(elem),
    $fragment = d.createDocumentFragment(),
    texto = "image_not_available";

  async function getData() {
    const $loader = d.querySelector(`${elem} .loader`);
    $loader.classList.remove("none");

    try {
      let res = await fetch(
          "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=072cd79c13ba43f12865fc729ab63940&hash=3b478ad5d35bb2facdb225f639e26441"
        ),
        json = await res.json(),
        data = json.data.results;

      data.forEach((el) => {
        let index = el.thumbnail.path.search(texto);
        if (index === -1) {
          const $figure = d.createElement("figure");
          $figure.classList.add("card");
          $figure.innerHTML = `
        <img src="${el.thumbnail.path}.${el.thumbnail.extension}" alt="${el.name}">
          <figcaption>${el.name}</figcaption>
          `;
          $fragment.appendChild($figure);
        }
      });
      $div.appendChild($fragment);
      $loader.classList.add("none");
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  getData();
}
