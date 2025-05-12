import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';

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

  const galleryContainer = document.querySelector(".gallery-container");
  if (galleryContainer) {
    const lightGalleryInstance = lightGallery(galleryContainer, {
      selector: ".gallery-item",
      download: false,
      speed: 500,
    });

    // Skryje hamburger menu při otevření LightGallery
    lightGalleryInstance.on("lgBeforeOpen", () => {
      if (hamMenu) {
        hamMenu.style.visibility = "hidden";
        hamMenu.style.zIndex = "-1";
      }
    });

    // Znovu zobrazí hamburger menu po zavření LightGallery
    lightGalleryInstance.on("lgAfterClose", () => {
      if (hamMenu) {
        hamMenu.style.visibility = "visible";
        hamMenu.style.zIndex = "";
      }
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