function setup() {
  createCanvas(1080, 1080);

  background(30);
  
  tectiform(); 
}

function draw() {

}


// Tetiform generator innerhalb eines Quadrats => Kollektion an Tektiformen 

function tectiform() {

  strokeWeight(4)
  stroke(220)

  hor_limit = 0.9;
  dach_limit = 0.8;
  arc_limit = 0.1; 
  left_limit = 0.5; 
  right_limit = 0.3; 
  diag_right_limit = 0.4; 
  left_out_limit = 0.1; 



  // Linien mit Wahrscheinlichkeiten: 

  let hor_prob = random(); 

  if (hor_prob < hor_limit) {
  // Horizontal: 0.9
  line(200, 800, 880, 800); 
  } 

  // Vertikal: 1
  line(540, 500, 540, 800); 

  let dach_prob = random(); 

  if(dach_prob < dach_limit){
  // Dach: 0.95
  line(540, 500, 150, 600);
  line(540, 500, 930, 600); 

  }


  let arc_prob = random(); 

  if(arc_prob < arc_limit){
  // Halbkreise 
  noFill(); 
  // Boegen: 0.1
  arc(375, 800, 130, 130, PI, 0);
  arc(700, 800, 130, 130, PI, 0);

  }

  

  let left_prob = random(); 

  if(left_prob < left_limit){
  // Links Wand: 0.5
  line(200, 800, 150, 600);

}
   

let right_prob = random(); 

if(right_prob < right_limit){
  // Rechts Wand: 0.3
  line(880, 800, 930, 600);

}

  // Streben: Diagonal Links: 0.6


  let diag_right_prob = random(); 

  if(diag_right_prob < diag_right_limit ) {
  // Streben: Diagonal Rechts: 0.4
  line(540, 520, 910, 680); 
  line(540, 530, 905, 690);  

  line(540, 560, 900, 720); 
  line(540, 580, 899, 720);

} 

  let left_out_prob = random(); 

  if(left_out_prob < left_out_limit){

// Links Ausreißer
  line(180, 800, 80, 500);
  line(180, 800, 200, 800); 

}

}; 
