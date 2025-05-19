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


  const form = document.getElementById("mainForm");
  const formTitle = document.querySelector(".form-title");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = form["main-name"].value.trim();
      const email = form["main-email"].value.trim();
      const message = form["main-message"].value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Vyplňte prosím všechny kolonky.");
      } else {
        if (formTitle) {
          formTitle.style.display = "none";
        }

        form.innerHTML = `
          <div class="success-message-wrapper">
            <p class="success-message">Zpráva byla úspěšně odeslána!</p>
            <a href="index.html" class="back-home-btn">Domů</a>
          </div>
        `;
      }
    });
  }

  const galleryContainer = document.querySelector(".gallery-container");
  if (galleryContainer) {
    lightGallery(galleryContainer, {
      selector: ".gallery-item",
      download: false,
      speed: 500,
    });

    galleryContainer.addEventListener("lgBeforeOpen", () => {
      if (hamMenu) {
        hamMenu.style.visibility = "hidden";
        hamMenu.style.zIndex = "-1";
      }
    });

    galleryContainer.addEventListener("lgAfterClose", () => {
      if (hamMenu) {
        hamMenu.style.visibility = "visible";
        hamMenu.style.zIndex = "";
      }
    });
  }


  const themeToggleMobile = document.getElementById('themeToggle');
  const themeToggleDesktop = document.getElementById('themeToggle-desktop');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggleMobile) themeToggleMobile.checked = true;
    if (themeToggleDesktop) themeToggleDesktop.checked = true;
  }

  themeToggleMobile?.addEventListener('change', () => {
    if (themeToggleMobile.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      if (themeToggleDesktop) themeToggleDesktop.checked = true;
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      if (themeToggleDesktop) themeToggleDesktop.checked = false;
    }
  });

  themeToggleDesktop?.addEventListener('change', () => {
    if (themeToggleDesktop.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      if (themeToggleMobile) themeToggleMobile.checked = true;
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      if (themeToggleMobile) themeToggleMobile.checked = false;
    }
  });
});
