var canvas=new fabric.Canvas("myCanvas");
var player_x=10;
var player_y=10;
var block_width=30;
var block_height=30;
var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function block_update(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        block_object=Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;

    if(e.shiftKey==true && keyPressed=="80"){
        block_width=block_width+10;
        block_height=block_height+10;
       document.getElementById("current_width") .innerHTML=block_width;
       document.getElementById("current_height").innerHTML=block_height;

    }

    if(e.shiftKey && keyPressed=="77"){
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;

    }

    if(keyPressed=="37"){
        left();
    }

    if(keyPressed=="38"){
        up();
    }

    if(keyPressed=="39"){
        right();
    }

    if(keyPressed=="40"){
        down();
    }

    if(keyPressed=="87"){
        block_update("wall.jpg");
    }

    if(keyPressed=="67"){
        block_update("cloud.jpg");
    }

    if(keyPressed=="68"){
        block_update("dark_green.png");
    }

    if(keyPressed=="71"){
        block_update("ground.png");
    }

    if(keyPressed=="76"){
        block_update("light_green.png");
    }

    if(keyPressed=="82"){
        block_update("roof.jpg");
    }

    if(keyPressed=="84"){
        block_update("trunk.jpg");
    }

    if(keyPressed=="85"){
        block_update("unique.png");
    }

    if(keyPressed=="89"){
        block_update("yellow_wall.png");
    }
}

function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        console.log("block_height: "+block_height);
        console.log("player x position: "+player_x+", player y position : "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=460){
        player_y=player_y+block_height;
        console.log("block_height: "+block_height);
        console.log("player x position: "+player_x+", player y position: "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_width;
        console.log("block_width: "+block_width);
        console.log("player x position: "+player_x+", player y position: "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=850){
        player_x=player_x+block_width;
        console.log("block_width: "+block_width);
        console.log("player x position: "+player_x+", player y position: "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}