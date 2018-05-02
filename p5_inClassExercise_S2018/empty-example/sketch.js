var diam1=90;

function setup() {
  // put setup code here
    createCanvas(500,500);
}

function draw() {
  // put drawing code here
    background(255, 228, 225);
    fill(255, 215, 0);
    stroke(255,255,0);
    strokeWeight(3);
    ellipse(mouseX,mouseY,diam1,diam1);
    
    fill(135, 206, 235);
    noStroke();
    rect(00,300,500,300);
    textSize (18);
    textFont("Georgia");
    textStyle(ITALIC);
    stroke(255,255,0);
    //text (String, posX, posY)
    text("Good Morning",375,490);

}
function mousePressed(){
    // put interaction code here
    diam1 = diam1+5;
    
    if(diam1>200){
        diam1=90
    } else{
        diam1=diam1+5;
        
    }
}
