import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';

// lightGallery pluginy
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

document.addEventListener('DOMContentLoaded', () => {
  // Spuštění Swiper slideru
  new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Spuštění lightGallery na Swiper wrapperu
  lightGallery(document.getElementById('lightgallery'), {
    selector: 'a',
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
  });
});
