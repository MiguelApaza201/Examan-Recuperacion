let charmander_btn = document.getElementById("charmander-btn");
let eevee_btn = document.getElementById("eevee-btn");
let squirtle_btn = document.getElementById("squirtle-btn");
let jigglypuff_btn = document.getElementById("jigglypuff-btn");

let charmander_song = document.getElementById("charmander-song");
let eevee_song = document.getElementById("eevee-song");
let squirtle_song = document.getElementById("squirtle-song");
let jigglypuff_song = document.getElementById("jigglypuff-song");


  charmander_btn.addEventListener("click", () =>{
    charmander_song.play();
  })
  eevee_btn.addEventListener("click", () =>{
    eevee_song.play();
  })
  squirtle_btn.addEventListener("click", () =>{
    squirtle_song.play();
  })
  jigglypuff_btn.addEventListener("click", () =>{
    jigglypuff_song.play();
  })

