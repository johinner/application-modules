const d = document,
  w = window;

export default function smartVideo() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? entry.target.play() : entry.target.pause();

      w.addEventListener("viibilitychange", (e) =>
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };
  const observer = new IntersectionObserver(cb, { threshold: 0.8 });

  $videos.forEach((el) => observer.observe(el));
}
