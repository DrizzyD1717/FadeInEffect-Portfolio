const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        "animate__fadeInUpBig",
        entry.isIntersecting
      );
      console.log(entry);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: "0" }
);

const cards = document.querySelectorAll(".addEffect");
console.log(cards);

cards.forEach((card) => {
  observer.observe(card);
});
