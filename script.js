function logar(){

let user=document.getElementById("user").value
let pass=document.getElementById("pass").value

if(user=="th" && pass=="01"){

document.getElementById("login").style.display="none"
document.getElementById("painel").style.display="block"

}else{

alert("Login inválido")

}

}

/* MENU */

function toggleMenu(){

document.getElementById("sidebar").classList.toggle("ativo")

}

/* ABAS */

function abrirAba(id){

let abas=document.querySelectorAll(".aba")

abas.forEach(a=>{
a.classList.remove("ativa")
})

document.getElementById(id).classList.add("ativa")

}

/* LOGOUT */

function logout(){
location.reload()
}

/* MENU ARRASTÁVEL (MOBILE) */

let startX=0

document.addEventListener("touchstart",function(e){
startX=e.touches[0].clientX
})

document.addEventListener("touchmove",function(e){

let moveX=e.touches[0].clientX

if(moveX-startX>100){
document.getElementById("sidebar").classList.add("ativo")
}

if(startX-moveX>100){
document.getElementById("sidebar").classList.remove("ativo")
}

})
