// function openMenu() {
//   document.body.classList.add("no-scroll");
// }

// function closeMenu() {
//   document.body.classList.remove("no-scroll");
// }

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  let menu_icon = document.querySelector(".menu_icon_container");
  if (window.scrollY > 32) {
    menu_icon.classList.add("moveToTop");
    header.classList.add("scrolled");
  } else {
    menu_icon.classList.remove("moveToTop");
    header.classList.remove("scrolled");
  }
});

// window.addEventListener("scroll", function () {
//   let header = document.querySelector(".header");
//   let menu_icon = document.querySelector(".menu-icon");

//   let scrollThreshold = window.innerWidth <= 992 ? 32 : 32;

//   if (window.scrollY > scrollThreshold) {
//     menu_icon.classList.add("moveToTop");
//     header.classList.add("scrolled");
//   } else {
//     menu_icon.classList.remove("moveToTop");
//     header.classList.remove("scrolled");
//   }
// });

// const openMenuBtn = document.getElementById("openMenuBtn");
// const closeMenuBtn = document.getElementById("closeMenuBtn");
// const menu = document.getElementById("menu");

// function openMenu() {
//   menu.classList.add("active");
//   document.body.classList.add("no-scroll");
// }

// function closeMenu() {
//   menu.classList.remove("active");
//   document.body.classList.remove("no-scroll");
// }

// openMenuBtn.addEventListener("click", openMenu);
// closeMenuBtn.addEventListener("click", closeMenu);

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("active"); // فتح وإغلاق القائمة
  menuToggle.classList.toggle("active"); // تغيير الأيقونة
  document.body.classList.toggle("no-scroll"); // منع التمرير عند الفتح
});

const createOdometer = (el, value) => {
  const odometer = new Odometer({
    el: el,
    value: 0,
  });

  let hasRun = false;

  const options = {
    threshold: [0, 0.9],
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!hasRun) {
          odometer.update(value);
          hasRun = true;
        }
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(el);
};

const subscribersOdometer = document.querySelector(".treatment-odometer");
createOdometer(subscribersOdometer, 876031);

const videosOdometer = document.querySelector(".productivity-odometer");
createOdometer(videosOdometer, 3060);

const projectsOdometer = document.querySelector(".total-odometer");
createOdometer(projectsOdometer, 71);
