// Design-only: initialize visual libraries if available.
document.addEventListener("DOMContentLoaded", function () {
  if (typeof lozad === "function") {
    const observer = lozad();
    observer.observe();
  }

  if (window.AOS && typeof window.AOS.init === "function") {
    window.AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
});
