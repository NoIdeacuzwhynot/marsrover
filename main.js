canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
backround_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){
    Bg_img=new Image();
    Bg_img.onlaod=uploadBg;
    Bg_img.src=backround_image;
    rover_img=new Image();
    rover_img.onlaod=uploadrover;
    rover_img.src=rover_image;
} 
function uploadBg(){
    ctx.drawImage(Bg_img,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
        console.log("up");

    }
    if(keyPressed=="40"){
        down();
        console.log("down");
        
    }
    if(keyPressed=="39"){
        right();
        console.log("right");
        
    }
    if(keyPressed=="37"){
        left();
        console.log("left");
        
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-15;
        console.log("when up arrow is pressed,x= "+rover_x+" y= "+rover_y);
     uploadBg();
     uploadrover();
    }


}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+15;
        console.log("when down arrow is pressed,x= "+rover_x+" y= "+rover_y);
     uploadBg();
     uploadrover();
    }


}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-15;
        console.log("when left arrow is pressed,x= "+rover_x+" y= "+rover_y);
     uploadBg();
     uploadrover();
    }


}
function right(){
    if(rover_x<=690){
        rover_x=rover_x+15;
        console.log("when right arrow is pressed,x= "+rover_x+" y= "+rover_y);
     uploadBg();
     uploadrover();
    }


}