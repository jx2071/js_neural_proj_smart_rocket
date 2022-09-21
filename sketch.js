
let stopButton;
let resumeButton;
let population;
let lifespan = 200;
let popsize = 25;
let mutationrate = 0.02;
let count = 0;
let target;
let displayinfo;
let generation = 1;
let lifeCycle;

function setup() {
  createCanvas(400, 400);
  createButtons();
  population = new Population(popsize);
  lifeCycle = createP();
  lifeCycle.class("stats");
  displayinfo = createP();
  displayinfo.class("stats");
  target = createVector(width / 2, 50);
  frameRate(100);
}

function draw() {
  background(0);
  population.run();
  lifeCycle.html(`Current Life Span: ${count}`);
  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    count = 0;
    generation++;
  }
  drawTarget();
}



function drawTarget() {
  fill(240, 204, 250);
  ellipse(target.x, target.y, 20, 20);
  fill(50, 183, 182);
  ellipse(target.x, target.y, 10, 10);

}

function createButtons() {
  stopButton = createButton("Stop");
  stopButton.position(420, 10);
  stopButton.mousePressed(() => {
    noLoop();
  })
  resumeButton = createButton("Resume");
  resumeButton.position(420, 80);
  resumeButton.mousePressed(() => {
    loop();
  })
}