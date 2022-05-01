let inputLogin = document.querySelectorAll('.input-login')
let inputPassword = document.querySelector(".input-password")
let inputNumber = document.querySelector(".input-number")
let eye = document.getElementById("eye")
let iconEye = document.querySelector(".icon-eye")


let login = document.querySelector(".enter")

let text = document.querySelectorAll('.text')


function deger() {

    if (inputNumber.value <= 0) {
        document.documentElement.style.setProperty("--input-number-color", "red")
    }

    else {
        document.documentElement.style.setProperty("--input-number-color", "#214CC9")
    }


    if (inputPassword.value <= 0) {
        document.documentElement.style.setProperty("--input-password-color", "red")
    }

    else {
        document.documentElement.style.setProperty("--input-password-color", "#214CC9")
    }

}






inputNumber.addEventListener("click", () => {
    setInterval(() => {
        deger()
    }, 1)
})


iconEye.addEventListener("click", () => {

    console.log("sda")
    if (inputPassword.type === "password") {
        inputPassword.type = "text"
        iconEye.innerHTML = '<i class="fa-solid fa-eye"></i>'
    }
    else if (inputPassword.type === "text") {
        inputPassword.type = "password"
        iconEye.innerHTML = '  <i id="eye" class="fa-solid fa-eye-slash"></i>'
    }
})


