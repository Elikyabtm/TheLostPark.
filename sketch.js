let animaux = [];

function preload() {

  // chargement des images
  let animal01 = loadImage("images/Monkey.png");
  let animal02 = loadImage("images/Turtle.png");
  let animal03 = loadImage("images/Bat.png");
  let animal04 = loadImage("images/Fish.png");
  let animal05 = loadImage("images/Ara.png");
  let animal06 = loadImage("images/Elephant.png");
  let animal07 = loadImage("images/rabbit.png");
  let animal08 = loadImage("images/Zebra.png");
  let animal09 = loadImage("images/Gavial.png");
  let animal10 = loadImage("images/Koala.png");
  animaux = [animal01, animal02, animal03, animal04, animal05, animal06,animal07,animal08,animal09,animal10];
}

function setup() {
  createCanvas(450, 450);//le canvas fait la même taille que les images
  noLoop(); //en désactive la boucle d'animation

  // Création du bouton pour changer les images
  let btn = createButton('Animal survivant'); // Crée le bouton avec le texte
  btn.mousePressed(redessiner); // Quand le bouton est pressé, appelle redessiner()
  // Appliquer la classe CSS au bouton
  btn.class('bouton-perso');
}


function draw() {
  //background(220);

  let RandomAnimaux = random(animaux); //on choisi une valeur du tableau aléatoirement
  image(RandomAnimaux, 0, 0); //on affiche l'image aléatoirement et on la positionnev


}


// Fonction appelée lorsque le bouton est pressé
function redessiner() {
  redraw(); // Redessine l'image
}

