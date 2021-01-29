var ball, ball2, database, position, position2;

function setup(){

    database = firebase.database()

    createCanvas(500,500);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ball2 = createSprite(250,250,10,10);
    ball2.shapeColor = "green";

    var ballposition = database.ref('ball/position');
    ballposition.on("value", readPosition, showError)

    var ball2position = database.ref('ball2/position2')
    ball2position.on('value', readPos, showE)


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePos(0,+1);
    }

    if(keyCode == 119){
        writePosition(0, -1)
    }else if(keyCode == 115){
        writePosition(0, +1)
    }else if(keyCode == 97){
        writePosition(-1, 0)
    }else if(keyCode == 100){
        writePosition(1, 0)
    }


    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x' : position.x + x,
        'y' : position.y + y
    })
   
}

function writePos(x,y){
    database.ref('ball2/position2').set({
        'x' : position2.x + x,
        'y' : position2.y + y
    })
   
}

function showError() {
    console.log("There is an error that is occuring")
}

function showE() {
    console.log("There is an error that is occuring")
}

function readPosition(data){

    position = data.val()
    ball.x = position.x
    ball.y = position.y


}

function readPos(data){
    position2 = data.val()
    ball2.x = position2.x
    ball2.y = position2.y
}

