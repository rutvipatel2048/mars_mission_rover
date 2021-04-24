var bg_img_tag= "" ;
var bg = "mars.jpg";
var rover_img_tag="";
var rover = "rover.png";
canvas = document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var rover_x =10;
var rover_y = 10;
var rover_width= 100;
var rover_height= 90; 
function add()
{
bg_img_tag= new Image();
bg_img_tag.onload = uploadbg;
bg_img_tag.src= bg;

rover_img_tag= new Image();
rover_img_tag.onload = uploadrover;
rover_img_tag.src= rover;
}

function uploadbg()
{
ctx.drawImage(bg_img_tag,0,0,canvas.width,canvas.height);
}

function uploadrover()
{
ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;

    if (keyPressed == "38")
    {
        up();
        
    }

    if (keyPressed == "40")
    {
        down();
    }

    if (keyPressed == "39")
    {
        right();
    }

    if (keyPressed == "37")
    {
        left();
    }

}

function up()
{
    
    if ( rover_y >= 0)
    {
        console.log("up");
        rover_y = rover_y - 10;
        uploadbg();
        uploadrover();
    }
}

function down()
{
    
    if ( rover_y <= 700)
    {
        console.log("down");
        rover_y = rover_y + 10;
        uploadbg();
        uploadrover();
    }
}

function right()
{
    
    if ( rover_x <= 900)
    {
        console.log("right");
        rover_x = rover_x + 10;
        uploadbg();
        uploadrover();
    }
}

function left()
{
    
    if ( rover_x >= 0)
    {
        console.log("left");
        rover_x = rover_x - 10;
        uploadbg();
        uploadrover();
    }
}