const d = document,
  w = window;

export default function responseMedia(id, mq, modileContent, desktopContent) {
  let breakpoint = w.matchMedia(mq);

  const responsive = (e) => {
    e.matches
      ? (d.getElementById(id).innerHTML = desktopContent)
      : (d.getElementById(id).innerHTML = modileContent);
  };
  breakpoint.addListener(responsive);
  responsive(breakpoint);
}
