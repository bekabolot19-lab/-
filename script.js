const overlay = document.querySelector(".overlay");
const snow = document.querySelector(".snow");
const petals = document.querySelector(".petals");
const sun = document.querySelector(".sun");
const leaves = document.querySelector(".leaves");

const seasons = [
  {
    image: "images/winter.jpg",
    effects: { snow: 1, petals: 0, sun: 0, leaves: 0 }
  },
  {
    image: "images/spring.jpg",
    effects: { snow: 0, petals: 1, sun: 0, leaves: 0 }
  },
  {
    image: "images/summer.jpg",
    effects: { snow: 0, petals: 0, sun: 1, leaves: 0 }
  },
  {
    image: "images/autumn.jpg",
    effects: { snow: 0, petals: 0, sun: 0, leaves: 1 }
  }
];

let i = 0;

function applySeason() {
  overlay.style.opacity = 0;

  setTimeout(() => {
    overlay.style.backgroundImage = `url(${seasons[i].image})`;
    overlay.style.opacity = 1;

    // эффекты
    snow.style.opacity = seasons[i].effects.snow;
    petals.style.opacity = seasons[i].effects.petals;
    sun.style.opacity = seasons[i].effects.sun;
    leaves.style.opacity = seasons[i].effects.leaves;

  }, 1500);

  i = (i + 1) % seasons.length;
}

applySeason();
setInterval(applySeason, 7000);
