noStroke();
var x = 100;
var y = 300;
var faceSize = 400;

// ears
var earSize=faceSize*1/2;
fill(89, 52, 17);
ellipse(x-faceSize*2/5, y-faceSize*2/5, earSize, earSize);
ellipse(x+faceSize*2/5, y-faceSize*2/5, earSize, earSize);

// face
fill(163, 113, 5);
ellipse(x, y, faceSize, faceSize);



//eyes 
var eyeSize=faceSize*1/8;
fill(0, 0, 0);
ellipse(x-faceSize*1/4, y-faceSize*1/8,eyeSize,eyeSize);
ellipse(x+faceSize*1/4,y-faceSize*1/8 , eyeSize,eyeSize);



//nose
fill(89, 52, 20);
ellipse(x, y+faceSize/8, faceSize*4/15, faceSize/5);

//https://www.khanacademy.org/computer-programming/spin-off-of-challenge-brown-bear-eyes/6654648081809408
