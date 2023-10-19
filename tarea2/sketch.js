let angle = 0;
let radius = 150;
let rotationSpeed = -0.02;
let colorOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noFill();
}

function draw() {
  translate(width / 2, height / 2);
  let x = cos(angle) * radius;
  let y = sin(angle) * radius;
  
  let r = map(cos(colorOffset), -1, 1, 0, 255);
  let g = map(cos(colorOffset + TWO_PI/3), -1, 1, 0, 255);
  let b = map(cos(colorOffset + 2*TWO_PI/3), -1, 1, 0, 255);
  
  stroke(r, g, b, 50); // Agrega una leve transparencia para la estela
  ellipse(x, y, radius * 2);
  
  angle += rotationSpeed;
  colorOffset += 0.01;
  
  radius -= 300 / (12 * TWO_PI); // Ajusta el radio para dar las 12 vueltas
}