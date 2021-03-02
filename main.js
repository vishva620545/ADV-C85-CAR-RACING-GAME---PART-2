<h1>CAR RACING  : <span id="CAR_RACING"></span></h1>,
<h1> GAME STATUS  : <span id="GAME STATUS "></span></h1>
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_array=["racing.jpg"];
random=Math.floor(Math.random()* 4);
console.log(random);
Rover_width=100;
Rover_height=90;

Rover_x=10;
Rover_y=10;

bgimage=nasa_array[random];
console.log("background_image = " + bgimage);


car1_width = 120
car1_height = 70
image="car1.png";
car1_x = 10
car1_y = 10


function add(){
    bgimage_tag=new Image();
    bgimage_tag.onload=uploadBackground;
    bgimage_tag.src=bgimage;

    rimage_tag=new Image();
    rimage_tag.onload=uploadrover;
    rimage_tag.src=rimage;
}
function uploadBackground(){
    ctx.drawImage( bgimage_tag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage( rimage_tag,Rover_x,Rover_y,Rover_width,Rover_height)
}

function add(){
    bgimage_tag=new Image();
    bgimage_tag.onload=uploadBackground;
    bgimage_tag.src=bgimage;

    rimage_tag=new Image();
    rimage_tag.onload=uploadrover;
    rimage_tag.src=rimage;
}
function uploadBackground(){
    ctx.drawImage( bgimage_tag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage( rimage_tag,Rover_x,Rover_y,Rover_width,Rover_height)
}

