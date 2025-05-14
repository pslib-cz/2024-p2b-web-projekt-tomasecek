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
  const themeToggleMobile = document.getElementById('themeToggle');
  const themeToggleDesktop = document.getElementById('themeToggle-desktop');

  if (hamMenu) {
    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      offScreenMenu?.classList.toggle("active");

      document.body.style.overflow = offScreenMenu?.classList.contains("active") ? "hidden" : "";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
      event.preventDefault(); 


      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Vyplňte prosím všechny kolonky.");
      } else {

        form.innerHTML = "<p class='success-message'>Úspěšně odesláno!</p>";
      }
    });
  });

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


    lightGalleryInstance.on("lgBeforeOpen", () => {
      if (hamMenu) {
        hamMenu.style.visibility = "hidden";
        hamMenu.style.zIndex = "-1";
      }
    });

    lightGalleryInstance.on("lgAfterClose", () => {
      if (hamMenu) {
        hamMenu.style.visibility = "visible";
        hamMenu.style.zIndex = "";
      }
    });
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleMobile.checked = true;
    themeToggleDesktop.checked = true;
  }

  // Přepínání tématu na mobilu
  themeToggleMobile.addEventListener('change', () => {
    if (themeToggleMobile.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeToggleDesktop.checked = true; // Synchronizace s desktopovým tlačítkem
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeToggleDesktop.checked = false; // Synchronizace s desktopovým tlačítkem
    }
  });

  // Přepínání tématu na desktopu
  themeToggleDesktop.addEventListener('change', () => {
    if (themeToggleDesktop.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeToggleMobile.checked = true; // Synchronizace s mobilním tlačítkem
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeToggleMobile.checked = false; // Synchronizace s mobilním tlačítkem
    }
  });
});

