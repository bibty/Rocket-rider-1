var alienIMG
var fuelIMG
var rocketIMG
var meteorIMG
var spacebackgroundIMG
var spaceshipdebrisIMG
var stoneIMG
var alien,fuel,rocket,meteor,spacebg,spaceshipdebris,stone
var stonegrp,fuelgrp
var score,life,fuelbar 

function preload(){
  alienIMG = loadImage("./assets/alienspaceship.png")
  fuelIMG = loadImage("./assets/fuel.png")
  rocketIMG = loadImage("./assets/rocket.png")
  meteorIMG = loadImage("./assets/meteor.png")
  spacebackgroundIMG = loadImage("./assets/space_background.jpg")
  spaceshipdebrisIMG = loadImage("./assets/spaceshipdebris.png")
  stoneIMG = loadImage("./assets/stone.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight)

  spacebg = createSprite(windowWidth/2,windowHeight/2)
  spacebg.addImage(spacebackgroundIMG)
  spacebg.velocityY = 2

  rocket = createSprite(windowWidth/2,windowHeight-100)
  rocket.addImage(rocketIMG)
  rocket.scale = 0.2

  stonegrp = new Group()

  fuelgrp = new Group()
  

}

function draw(){
background("blue")

if(spacebg.y > height){
  spacebg.y = height/2; 
}

if(keyDown("LEFT_ARROW")){
  rocket.x = rocket.x-10
}

if(keyDown("RIGHT_ARROW")){
  rocket.x = rocket.x+10
}

level1()

drawSprites()

textSize(23)
fill("purple")

}



function level1(){
  createstone()
  createfuel()
}

function createstone(){
  if(frameCount%50 == 0){
    stone = createSprite(100,0,2,2)
    stone.scale = 0.35
    stone.addImage(stoneIMG)
    stone.velocityY = 5
    stone.x = Math.random()*width; 
    stone.lifetime = 170
    stonegrp.add(stone)
  }
}

function createfuel(){
  if(frameCount%100 == 0){
    fuel = createSprite(100,0,2,2)
    fuel.scale = 0.15
    fuel.addImage(fuelIMG)
    fuel.velocityY = 4
    fuel.x = Math.random()*width;
    fuel.lifetime = 200
    fuelgrp.add(fuel)
  }
}