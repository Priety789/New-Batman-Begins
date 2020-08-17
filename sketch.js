var umbrella;
var sound;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drop = [];
var thunderTimer = 3;

function preload() {
    sound = loadSound("sounds/thunder.mp3");
}

function setup() {
    createCanvas(1500, 850);

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(750, 650, 200, 200);

    Engine.run(engine);
}

function draw() {
    background(0);

    playThunder();

    createDrops();

    umbrella.display();
}

function createDrops() {
    if (frameCount % 20 === 0) {
        drop.push(new Drop(random(10, 1490), 10, 10));
    }

    for (var j = 0; j < drop.length; j++) {
        drop[j].display();
        drop[j].update();
    }
}

function playThunder() {
    if (frameCount % 150 === 0) {
        sound.play();
        thunderTimer -= 1;
    }
    if (thunderTimer === 0) {
        sound.stop();
        thunderTimer = 3;
    }
}