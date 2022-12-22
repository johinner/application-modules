const d = document,
  w = window;

export default function scrollTopButton(btn) {
  const $crollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    
    (scrollTop > 370)
      ? $crollBtn.classList.remove('hidden')
      : $crollBtn.classList.add('hidden');
  });

  d.addEventListener("click", (e) => {
    if(e.target.matches(btn)){
      w.scrollTo({
        behavior: 'smooth',
        top: 0
      })
    }
  });
}
