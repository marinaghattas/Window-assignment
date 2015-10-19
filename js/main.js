function setup() {

  createCanvas(windowWidth, windowHeight);

  strokeWeight(2);
  stroke('SaddleBrown');
  fill('Tan');
  triangle(30,48,110,15,200,48);

  strokeWeight(1);
  stroke('black');
  fill('BurlyWood');
  rect(50,48,125,20);

  strokeWeight(1);
  stroke('black');
  fill('lightblue');
  rect(65,70,125-30,150);

  strokeWeight(1);
  stroke('black');
  fill('BurlyWood');
  rect(50,70+150,125,40);

  strokeWeight(4);
  stroke('BurlyWood');
  line(65,70,65,70+150);
  var x = 65+(125-30)/2;
  line(x,70,x,70+150);
  x = 65+(125-30);
  line(x,70,x,70+150);

  line(65,70,x,70);
  line(65,70+150/2,x,70+150/2);
  line(65,70+150,x,70+150);
}
