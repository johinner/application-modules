const d = document;

export default function scrollSpy() {
  const $section = d.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const detectado = d.querySelector(`a[data-scroll-spy][href="#${id}"]`);

      entry.isIntersecting
        ? detectado.classList.add("active")
        : detectado.classList.remove("active");
    });
  };

  const observer = new IntersectionObserver(cb, {
    //root
    //rootMargin: "-250px",
    threshold: [0.5, 0.7],
  });

  $section.forEach((el) => observer.observe(el));
}
