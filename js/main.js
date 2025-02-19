function openMenu() {
  document.body.classList.add("no-scroll");
}

function closeMenu() {
  document.body.classList.remove("no-scroll");
}

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  if (window.scrollY > 117) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const menu = document.getElementById("menu");

function openMenu() {
  menu.classList.add("active");
  document.body.classList.add("no-scroll");
}

function closeMenu() {
  menu.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

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
