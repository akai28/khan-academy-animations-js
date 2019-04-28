//variables of shooting ellipse
var xPos =390;
var yPos = 10;
var ellipseWidth=50;
var ellipseHeight=50;

//variables of shooting star
var starX=370;
var starY=15;
var imageWidth=50;
var imageHeight=50;

//variables of cloud
noStroke();
var leftX =106;
var rightX = 300;

draw = function() {
    background(29, 40, 115);
    
    //First skyscraper   
    fill(23, 17, 23);
    rect(87,74,115,500); 
    
    //windows    
    fill(212, 219, 4);
    rect(118,88,50,30);
    rect(118,354,50,30);
    rect(118,295,50,30);
    rect(118,236,50,30);
    rect(118,180,50,30); 
    
    //Second scraper
    fill(5, 3, 56);
    rect (225,137,133,300); 
    
    //windows
    fill(235, 158, 158);
    rect(240,153,40,40);
    rect(302,153,40,40);
    rect(240,338,40,40);
    rect(302,338,40,40);
    rect(302,240,40,40);
    rect(240,240,40,40);
    
    //left cloud
    fill(92, 81, 81);
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX+62, 150, 70, 60);
    ellipse(leftX-62, 150, 70, 60);
   
    // right cloud
    fill(92,81,81);
    ellipse(rightX, 100, 126, 97);
    ellipse(rightX+62, 100, 70, 60);
    ellipse(rightX-62, 100, 70, 60);
   
   //stars in the sky
    image(getImage("space/star"), 100, 100, 10,10);
    image(getImage("space/star"), 268, 21, 10,10);
    image(getImage("space/star"), 23, 16, 10,10);
    image(getImage("space/star"), 175, 57, 10,10);
    image(getImage("space/star"), 369, 21, 10,10);    
    image(getImage("space/star"), 93, 38, 10,10);
    
    //shooting ellipse
    fill(255, 242, 0);
    ellipse(xPos, yPos,ellipseWidth,ellipseHeight);
    xPos-=1;
    yPos+=1;
    ellipseWidth = ellipseWidth * 99/100;
    ellipseHeight =ellipseHeight *  99/100;
    
    //shooting star
    image(getImage("space/star"),starX,starY,imageWidth,imageHeight);
    starX-=2;
    starY+=2;
    imageWidth = imageWidth * 99/100;
    imageHeight =imageHeight *  99/100;
};



//https://www.khanacademy.org/computer-programming/spin-off-of-project-shooting-star/5512256356188160
