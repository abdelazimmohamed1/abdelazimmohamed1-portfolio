const nav = document.getElementById("nav"),
  menu = document.getElementById("menu"),
  links = document.getElementById("links");
addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", scrollY > 30);
  let c = "home";
  document.querySelectorAll("section[id]").forEach((s) => {
    if (scrollY >= s.offsetTop - 180) c = s.id;
  });
  document
    .querySelectorAll(".links a")
    .forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + c),
    );
});
menu.onclick = () => links.classList.toggle("open");
document
  .querySelectorAll(".links a")
  .forEach((a) => (a.onclick = () => links.classList.remove("open")));
const ob = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        ob.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((e) => ob.observe(e));
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- جزيئات الهيرو ----------
   بنعمل 26 نقطة صغيرة، ولكل واحدة مكان وحجم وسرعة عشوائية.
   CSS هو اللي بيحركها (float-up). لو المستخدم طالب حركة أقل مش بنعمل حاجة. */
const heroBg = document.getElementById("heroBg");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (heroBg && !reduceMotion) {
  for (let i = 0; i < 26; i++) {
    const dot = document.createElement("i");
    dot.style.left = Math.random() * 100 + "%";
    dot.style.setProperty("--size", 2 + Math.random() * 3 + "px");
    dot.style.setProperty("--dur", 9 + Math.random() * 10 + "s");
    dot.style.setProperty("--delay", -Math.random() * 15 + "s");
    heroBg.appendChild(dot);
  }
}
