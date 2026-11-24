window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http")) return;

    e.preventDefault();
    document.body.classList.remove("loaded");
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
});