var eyeSize=22;
var toothSize=20;
background(9, 179, 171);

 // left ear
ellipse(150, 70, 60, 120);
fill(235, 120, 195);
ellipse(150,88,30,60);

// right ear
fill(242, 230, 230);
ellipse(240, 70, 60, 120);
fill(235,120,195);
ellipse(240,88,30,60);

 // face
fill(242, 230, 230);
ellipse(200, 170, 150, 150); 

 // left eye
fill(0, 0, 0);
ellipse(170, 150,eyeSize,eyeSize );

 // right eye
ellipse(230, 150, eyeSize,eyeSize); 

// mouth
line(150, 200, 250, 200);   

noFill();
rect(185, 200,15,toothSize ); // left tooth
rect(200, 200, 15,toothSize); // right tooth

//https://www.khanacademy.org/computer-programming/spin-off-of-challenge-bucktooth-bunny/4906854878904320
