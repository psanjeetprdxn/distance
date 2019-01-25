let links = document.getElementsByTagName("a");
let coords = [];
let mousePos = {};
let values = [];
for (link of links) {
  let coord = {};

  let rect = link.getBoundingClientRect();

  coord.x = rect.top;
  coord.y = rect.left;
  coords.push(coord);
}
console.log(coords);

function showCoords(event) {
  let x = event.clientX;
  let y = event.clientY;

  mousePos.x = x;
  mousePos.y = y;
  compare();
}

function compare() {
  values = [];
  for (coord of coords) {
    values.push(Math.hypot(coord.x-mousePos.x, coord.y-mousePos.y));
  }
  let idx = values.indexOf(Math.min.apply(null, values));
  light(idx);
}

function light(idx) {
  for (link of links) {
    link.style.backgroundColor = "white";
  }
  links[idx].style.backgroundColor = "red";
}

document.addEventListener("mousemove", showCoords);
