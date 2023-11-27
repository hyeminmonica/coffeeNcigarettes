var x = 0, y = 0;
var stepSize = 5.0;
var letters = "안녕하세요, 스티브죠? 스티븐이에요, 반가워요. 앉아요. 로베르토? 지금 흥분 상태에요. 네 흥분 상태요? 나도예요. 완전. 뭐 마셔요, 커피? 커피 좋죠. 좋아해요? 그럼요. 스티브! 스티븐인데. 스티브, 그냥 쉬면서 담배나 피울까봐요. 담배엔 커피가 딱인 것 같아요.우리 엄마 알아요? 당신 엄마를 아냐고요? 네. 글쎄요, 모를걸요. 언제 떠나요? 미국요? 아뇨, 여기요. 가야 하는데, 안 가고 싶어요. 치과 진료가 있거든요. 스티브, 나 한가해요. 대신 가줄래요? 정말 고마워요. 치과 가고 싶어요? 내가 가줄게요. 좋죠. 고마워요. ";
var fontSizeMin = 3;
var angleDistortion = 0.0;
var counter = 0;

let backgroundImage;

function setup() {
  // use full screen size 
  createCanvas(windowWidth, windowHeight);
  background(255, 0); // transparent canvas!
  smooth();
  cursor(CROSS);
 
  x = mouseX;
  y = mouseY;

  textAlign(LEFT);
  fill(0);

}

function draw() {

  if (mouseIsPressed) {
    var d = dist(x,y, mouseX,mouseY);
    textFont('Georgia');
    textSize(fontSizeMin+d/2)
    var newLetter = letters.charAt(counter);;
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY-y, mouseX-x); 

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
     if (counter > letters.length-1) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize; 
    }
  }
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
}

function keyPressed() {
  // angleDistortion ctrls arrowkeys up/down 
  if (keyCode == DELETE || keyCode == BACKSPACE) 
  background(255,0);

  if (keyCode == UP_ARROW) angleDistortion += 0.1;
  if (keyCode == DOWN_ARROW) angleDistortion -= 0.1; 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }