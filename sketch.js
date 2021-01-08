//Create variables here
var dog , happyDog,dogImage ;
var database , foods, foodStock;





function preload()
{
  dogImage = loadImage("images/dogImg.png")
  happyDog= loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
  createCanvas(500,500);

  dog = createSprite(250,250)
  dog.addImage(dogImage)
  dog.scale=0.2

  foodStock=database.ref('food');
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
  textSize (20)
fill("yellow")
if(keyWentDown(UP_ARROW)){
writeStock(foods)
dog.addImage(happyDog)
}

drawSprites();
  text("Note-press UP arrow key to feed tom milk",100, 450)
}

function readStock(data){
foods=data.val();


}
function writeStock(x){
database.ref('/').update({
Food:x
})
}

