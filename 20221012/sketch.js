function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);//背景黑色
  stroke(255)//框線顏色(255為白色)
  noFill()//不要充滿顏色
  rectMode(CENTER)//以方框中心點為座標點

  for(var i=0;i<20;i=i+1)//i++ ==>i=i+1
  {
    ellipse(25+(i*50),25+(j*50),50)//在座標(25,25)畫一個
    rect(25+(i*50),25+(j*50),50)//方框座標
    ellipse(50+(i*50),50+(j*50),25)
  }
}
