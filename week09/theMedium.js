console.log("hello!")

let theVariable = "judith"
let theother = 12304
let x, y, c1, c2, c3;

console.log(theVariable + theother)

// init p5.js

function setup(){
    console.log("p5 is here!")
    createCanvas(windowWidth, windowHeight)
    triangleBack();
}

function draw(){
    stroke(255, 230, 100);
    myStamp(mouseX-10, mouseY-10, 242, 7, 58);
}
function myStamp(x, y, c1, c2, c3) {
    strokeWeight(2);
    noFill();
    stroke(c1/2, c2, c3);
    fill(c1, c2, c3);
    ellipse(x+20, y+20, 40, 50);
  
    line(x, y+20, x+18, y+10);
    ellipse(x+30, y+20, 20, 40);
  
    line(x+40, y+24, x+20, y+15);
  
    ellipse(x+10, y+20, 20, 40);
  
    stroke(227, 207, 77);
    fill(227, 207, 77, 95);
    ellipse(x+20, y-10, 20, 20);
  }
function triangleBack(){
    background(72, 156, 105);
    for (let i = 40; i<=width - 50; i+= 100) {
    for (let j= 40; j <=width - 50; j+=100) {
      fill(111, 209, 126);
      stroke(111, 209, 126);

      beginShape(TRIANGLES); 
      vertex(i, j);
      vertex(i-30, j-30);
      vertex(i+30, j+100);
      endShape();

      fill(26, 117, 40);
      stroke(26, 117, 40);
      beginShape(TRIANGLES);
      vertex(i+40, j-20);
      vertex(i-50, j -50);
      vertex(i-40, j-50);
    }
    }
}