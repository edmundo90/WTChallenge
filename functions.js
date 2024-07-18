import './style.css'

/* ****************************** SLIDER DERECHA */
var images = [
  "img/slider/apes-planet3.jpeg",
  "img/slider/avatar1.jpg",
  "img/slider/galaxy-guardians3.jpg"
];

var titles = [
  "Ape's Planet",
  "Avatar 1",
  "Galaxy Guardians"
];

var descriprtions = [
  "Kingdom of the Planet of the Apes is a 2024 American science fiction action film directed by Wes Ball and written by Josh Friedman. A standalone sequel to War for the Planet of the Apes (2017), it is the fourth installment in the Planet of the Apes reboot film series and the tenth film overall. It stars Owen Teague, Freya Allan, Kevin Durand, Peter Macon, and William H. Macy. In the film, which takes place 300 years after the events of War, young chimpanzee Noa (Teague) embarks on a journey alongside Mae (Allan), a human woman, to determine the future for apes and humans alike.",
  "Avatar (comercializada como Avatar de James Cameron) es una película épica de ciencia ficción militar y animación estadounidense de 2009,5​6​escrita, producida y dirigida por James Cameron y protagonizada por Sam Worthington, Zoe Saldaña, Sigourney Weaver, Stephen Lang y Michelle Rodriguez. Está ambientada en el año 2154 y los acontecimientos que se narran en la historia Pandora, una luna (y aparentemente la más grande) de un planeta similar a Júpiter llamado Polifemo, habitada por una especie humanoide llamada na’vi, con la que los humanos se encuentran en conflicto debido a que uno de sus clanes está asentado alrededor de un gigantesco árbol que cubre una inmensa veta de un mineral muy cotizado",
  "Guardianes de la Galaxia vol. 3 (o Guardianes de la Galaxia volumen 3nota 1​; titulada originalmente en inglés como Guardians of the Galaxy Vol. 3) es una película de superhéroes estadounidense basada en el equipo de superhéroes de Marvel Comics, Guardianes de la Galaxia. Producida por Marvel Studios y distribuida por Walt Disney Studios Motion Pictures, es la secuela de Guardianes de la Galaxia (2014) y Guardianes de la Galaxia vol. 2 (2017), y la película número 32 del Universo cinematográfico de Marvel (UCM). La película está escrita y dirigida por James Gunn y protagonizada por un elenco conjunto compuesto por Chris Pratt, Zoe Saldaña, Dave Bautista, Karen Gillan, Pom Klementieff, Vin Diesel, Bradley Cooper, Will Poulter, Sean Gunn, Chukwudi Iwuji, Linda Cardellini, Nathan Fillion, y Sylvester Stallone. En la película, los Guardianes deben salvar la vida de Rocket (Cooper) del Alto Evolucionador (Iwuji)."
]
document.posterImg.src = images[0];
document.querySelector(".img1").style.backgroundImage="url("+images[0]+")";
document.querySelector(".msjResenia").style.display = "none";

  
var sliderDer = document.querySelector('.arrowr');
var sliderIzq = document.querySelector(".arrowl");
var pos = 0;

function slideDerecha()
{
  pos ++;
  if(pos > images.length -1)
  {
    pos = 0;
  }
    document.posterImg.src = images[pos];
    document.querySelector(".info-h1").innerText = titles[pos];
    document.querySelector(".info-p").innerText = descriprtions[pos];
    document.querySelector(".img1").style.backgroundImage="url("+images[pos]+")";
    
}
var intervalo = setInterval(slideDerecha, 5000);

sliderDer.addEventListener("click", function(){
  clearInterval(intervalo);
  slideDerecha();
  intervalo = setInterval(slideDerecha, 5000);
});

/* ****************************** SLIDER IZQUIERDA */

function slideIzquierda()
{
  pos--;
  if(pos < 0)
  {
    pos = images.length -1;
  }
  document.posterImg.src = images[pos];
  document.querySelector(".info-h1").innerText = titles[pos];
    document.querySelector(".info-p").innerText = descriprtions[pos];
    document.querySelector(".img1").style.backgroundImage="url("+images[pos]+")";
}

sliderIzq.addEventListener("click", function(){
  clearInterval(intervalo);
  slideIzquierda();
  intervalo = setInterval(slideDerecha, 5000);
});
/****************************** FIN SLIDERS */

/****************************** MENSAJE RESEÑA */

function msjResenia()
{
  document.querySelector(".msjResenia").display = true;
  document.resenia-h1.innerText == "¡Muchas gracias " + name +"!";
  document.resenia-peli.innerText == "Tu reseña sobre la película '"+document.peliculas.selected<br>+"' ha sido enviada";
}

var btnFinalizar = document.getElementById("finalizar");
btnFinalizar.addEventListener("click", msjResenia);

var name = document.Nombre;
var peli = document.peliculas.selected;


/****************************** RESEÑA */

/*********************** LIMPIAR CAMPOS */

function limpiarForm()
{
  document.getElementById("inpName").innerHTML = "";
  document.getElementById("inpMail").innerHTML = "";
  document.getElementById("inpResenia").innerHTML = "";
}
document.getElementById("reiniciar").onclick = limpiarForm();



