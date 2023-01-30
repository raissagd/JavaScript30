const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; // 100 px

function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    // this will be a div with the class of hero, the thing you listen on
    // target will be the thing where it actually triggered on
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk}px 0 blue
  `;
}

hero.addEventListener("mousemove", shadow);
