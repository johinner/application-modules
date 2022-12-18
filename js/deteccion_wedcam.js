const d = document,
  w = window;

export default function wedCam(id) {
  const $video = d.getElementById(id);

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getDisplayMedia({ video: true, audio: true })
      .then((stream) => {
        console.log(stream);
        $video.srcOLject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`);
      });
  }
}
