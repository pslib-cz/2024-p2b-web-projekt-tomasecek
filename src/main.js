document.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.querySelector(".ham-menu");
  const offScreenMenu = document.querySelector(".off-screen-menu");
  const closeBtn = document.getElementById("closeMenu");

  if (hamMenu) {
    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      offScreenMenu?.classList.toggle("active");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      hamMenu.classList.remove("active");
      offScreenMenu?.classList.remove("active");
    });
  }

  offScreenMenu?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamMenu.classList.remove("active");
      offScreenMenu.classList.remove("active");
    });
  })
    if (window.Swiper) {
      const swiper = new Swiper(".swiper", {
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
  });
  