let hamburguer = document.querySelector(".hamburguer")
hamburguer.addEventListener("click", function (){
  console.log(hamburguer)
  document.querySelector(".container").classList.toggle("show-menu")
})