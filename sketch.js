const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var score = 0;
function preload() {
    // create getBackgroundImg( ) here
	getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
       if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

   if(hour>00 && hour<01){
	 score = score + 1;  
   }
   if(hour>01 && hour<02){
	   score = score + 1; 
   }
   if(hour>02 && hour<03){
	   score = score + 1; 
   }
   if(hour>03 && hour<04){
	  score = score + 1;  
   }
   if(hour>04 && hour<05){
	   score = score + 1; 
   }
   if(hour>05 && hour<06){
	   score = score + 1; 
   }
   if(hour>06 && hour<07){
	   score = score + 1; 
   }
   if(hour>07 && hour<08){
	   score = score + 1; 
   }
   if(hour>08 && hour<09){
	   score = score + 1; 
   }
   if(hour>09 && hour<=10){
	   score = score + 1; 
   }
   if(hour>10 && hour<11){
       score = score + 1; 
	}
	if(hour>11 && hour<12){
		score = score + 1; 
	}
	if(hour>12 && hour<13){
		score = score + 1; 
	}
	if(hour>13 && hour<14){
		score = score + 1; 
	}
	if(hour>14 && hour<15){
		score = score + 1; 
	}
	if(hour>15 && hour<16){
		score = score + 1; 
	}
	if(hour>16 && hour<17){
		score = score + 1; 
	}
	if(hour>17 && hour<18){
		score = score + 1; 
	}
	if(hour>18 && hour<19){
		score = score + 1; 
	}
	if(hour>19 && hour<20){
		score = score + 1; 
	}
	if(hour>20 && hour<21){
		score = score + 1; 
	}
	if(hour>21 && hour<22){
		score = score + 1; 
	}
	if(hour>22 && hour<23){
		score = score + 1; 
	}
	if(hour>23 && hour<24){
		score = score + 1; 
	}
	if(hour>24 && hour<00){
		score = score + 1; 
	}
	textSize(40);
	stroke(black);
	text("SCORE : "+score,200,100);
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
	var datetime = responseJSON.datetime;
    // write code slice the datetime
    var hour = datetime.slice(11,13);   

    // add conditions to change the background images from sunrise to sunset
      if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }
    if(hour>06 && hour<07){
		bg = "sunrise2.png";
	}
    if(hour>=07 && hour<=08){
		bg = "sunrise3.png";
	}
    if(hour>08 && hour<=10){
		bg = "sunrise4.png";
	}
	if(hour>10 && hour<=14){
		bg = "sunrise5.png";
	}
	if(hour>14 && hour<=17){
		bg = "sunrise6.png";
	}
	if(hour>17 && hour<=18){
		bg = "sunset7.png";
	}
	if(hour>18 && hour<19){
		bg = "sunset8.png";
	}
	if(hour>=19 && hour<20){
		bg = "sunset10.png"
	}
	if(hour>=20 && hour<=22){
		bg = "sunset11.png";
	}
	if(hour>22 && hour<04){
		bg = "sunset12.png";
	}
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
