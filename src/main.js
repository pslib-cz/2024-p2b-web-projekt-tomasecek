import Swiper from './swiper/bundle';
import './swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.querySelector(".ham-menu");
  const offScreenMenu = document.querySelector(".off-screen-menu");
  const themeToggle = document.getElementById("themeToggle");

  if (hamMenu) {
    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      offScreenMenu?.classList.toggle("active");

      document.body.style.overflow = offScreenMenu?.classList.contains("active") ? "hidden" : "";
    });
  }

  offScreenMenu?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamMenu?.classList.remove("active");
      offScreenMenu?.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  if (window.Swiper) {
    new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  const lightGalleryContainer = document.getElementById("lightgallery");
  if (lightGalleryContainer && window.lightGallery) {
    lightGallery(lightGalleryContainer, {
      selector: "a",
      plugins: [lgZoom, lgThumbnail],
      speed: 500,
    });
  }

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (themeToggle) themeToggle.checked = true;
  }

  themeToggle?.addEventListener("change", () => {
    if (themeToggle.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });
});
