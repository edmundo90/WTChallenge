import './style.css'


document.querySelector('body').innerHTML = `
<header>
  <a href="http://localhost:5174/"><img src="./img/DV-Logo.png" alt="Dream View Logo"></a>
  <ul>
    <li><a href="#destacado">Destacado</a></li>
    <li><a href="#cartelera">Cartelera</a></li>
    <li><a href="#resenia">Reseña</a></li>
  </ul>
  <button href="#comprar">Comprar ticket</button>
</header>

<div class="slider">

  <div class="slider-inner">

    <div id="background" class="img1">

      <div class="arrowl">
        <button class="arrowl"><img class="arrows" src="/img/Icons/left.png" /></button>
      </div>

      <div class="main">

        <div class="poster">  

          <img name="posterImg" />
        </div>

        <div class="info">
          <div class="container">
            <h1>Ape's Planet</h1> 
            <p>Kingdom of the Planet of the Apes is a 2024 American science fiction action film directed by Wes Ball and written by Josh Friedman. 
            A standalone sequel to War for the Planet of the Apes (2017), it is the fourth installment in the Planet of the Apes reboot film series and the tenth film overall. 
            It stars Owen Teague, Freya Allan, Kevin Durand, Peter Macon, and William H. Macy. In the film, which takes place 300 years after the events of War, young chimpanzee Noa (Teague) embarks on a journey alongside Mae (Allan), a human woman, to determine the future for apes and humans alike.</textarea>
            </p>
        </div>
        <div class="btns">
          
          <div class="btn1">
            <img src="/img/Icons/trailer.png"/>
            <a href="#cartelera" id="trailerbtn">Ver trailer<a/>
          </div>

          <div class="btn2">
            <img src="/img/Icons/resenia.png"/>
            <a href="#resenia" id="reseniabtn">Dejar reseña<a/>
          </div>

        </div>

      </div>
      
      </div>
      
      <div class="arrowr">
        <img class="arrows" src="/img/Icons/right.png" alt=""/>
      </div>

  </div>
  
</div>


<div id="cartelera">
  <h1>En cartelera</h1>
  
  <div class="pelis">
    <div class="peli1">
      <h2>Planet of the Apes</h2>
      <img src="/img/slider/apes-planet3.jpeg" alt="Ape's world kingdom">
    </div>
      <div class="peli2">
      <h2>Avatar, get into the world</h2>
    <img src="/img/slider/avatar1.jpg" alt=""/>
      </div>
      <div class="peli3">
    <h2>Galaxy Guardians 3</h2>
      <img src="/img/slider/galaxy-guardians3.jpg" alt="">
      </div>
    <div class="peli4">
      <h2>Intensamente 2</h2>
      <img src="/img/cartelera/intensamente-2-3d-espanol.jpg" alt="Imagen de Intensamente 2">
    </div>
    <div class="peli5">
      <h2>Alice in the wonderworld</h2>
      <img src="/img/cartelera/alice.jfif" alt="">
    </div>
    <div class="peli6">
      <h2>Setback</h2>
      <img src="/img/cartelera/contratiempo.jfif" alt="Setback Poster">
    </div>
    <div class="peli7">
      <h2>Lionking</h2>
      <img src="/img/cartelera/Lionking.jpeg" alt="">
    </div>
    <div class="peli8">
      <h2>My favourite villain</h2>
      <img src="/img/cartelera/mivillanofavorito4.jpg" alt="My favourite Villain poster">
    </div>
    
  </div>
</div>

<div id="resenia">
  <h1>Reseña de películas</h1>
  <h2>Tu opinión suma!</h2>
  <form>
    <select name="películas">
      <option selected>Selecciona la película</option>
      <option value="Peli 1">Ape's planet - New kingdom</option>
      <option value="Peli 2">Avatar - Pandora discovery</option>
      <option value="Peli 3">Galaxy Guardians 3</option>
      </select>
    <input type="text" name="Nombre" id="inpName" placeholder="Ingrese su nombre">
    <input type="text" name="E-mail" id="inpMail" placeholder="Ingrese su email">
    <input type="text" name="Resenia" id="inpResenia" style="width:400px; height:300px">
    <div>
      <input type="button" name="finalizar" value="Finalizar">
      <input type="button" value="Reiniciar">
    </div>
  </form>
</div>  
`
/* ****************************** SLIDER */
var images = [
  "img/slider/apes-planet3.jpeg",
  "img/slider/avatar1.jpg",
  "img/slider/galaxy-guardians3.jpg"
];
let pos = 0;

document.background.src = images[pos];
document.poster.src = images[pos];

var sliderDer = document.querySelector('arrowr');
sliderDer.addEventListener("click", slideDerecha);

function slideDerecha(){
  document.background.src = images[pos++];
  document.poster.src = images[pos++];
  pos += 1;
}

/****************************** FIN SLIDER*/