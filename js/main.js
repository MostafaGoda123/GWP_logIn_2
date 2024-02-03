let log_in = document.querySelector(".logIn")
let sign_in = document.querySelector(".signIn")
let reg1 = document.getElementById("reg_login")
let reg2 = document.getElementById("reg_signin")

reg1.onclick = reg2.onclick = function(){
   log_in.classList.toggle("hide")
   sign_in.classList.toggle("hide")
}
// reg2.onclick = function(){
//    log_in.classList.toggle("hide")
//    sign_in.classList.toggle("hide")
// }
