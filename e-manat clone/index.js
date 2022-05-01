let menuBar = document.querySelector(".menu-bar")
let headerMenu = document.querySelector(".header-menu")

let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")



let imgFoot1 = document.querySelector(".img-foot1")
let imgFoot2 = document.querySelector(".img-foot2")
let imgFoot3 = document.querySelector(".img-foot3")


let answer = document.querySelectorAll(".answer")
let down = document.querySelectorAll(".down")





menuBar.addEventListener("click", () => {
    headerMenu.classList.toggle('active')

    if (headerMenu.classList.contains('active')) {
        menuBar.innerHTML = '<i class="fa-solid fa-xmark"></i>'

    }
    else {
        menuBar.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }
})







const media = () => {
    let q = matchMedia('(max-width: 1040px)')

    if (q.matches) {
        img1.innerHTML = '<img src="https://emanat.az/img/google_play_mobile.9a39a50b.svg">'
        img2.innerHTML = '<img src="https://emanat.az/img/app_store_mobile.efcfce6f.svg">'
        img3.innerHTML = '<img src="https://emanat.az/img/app_gallery_mobile.f3d02f1f.svg">'


        imgFoot1.innerHTML = '<img class="img" src="https://emanat.az/img/google_play_tr_mobile.75da674e.svg" alt="">'
        imgFoot2.innerHTML = '<img class="img" src="https://emanat.az/img/app_store_tr_mobile.17f92bbc.svg" alt="">'
        imgFoot3.innerHTML = '<img class="img" src="https://emanat.az/img/app_gallery_tr_mobile.d2037b36.svg" alt="">'
    }
    else {
        img1.innerHTML = ' <img  src="https://emanat.az/img/google_play.19e0efd1.png" alt="">'
        img2.innerHTML = '  <img  src="https://emanat.az/img/app_store.b82e2cc4.png" alt="">'
        img3.innerHTML = '   <img  src="https://emanat.az/img/app_gallery.f2c9dacd.png" alt="">'



        imgFoot1.innerHTML = '  <img src="https://emanat.az/img/google_play_tr.7aee4a9d.png" alt="">'
        imgFoot2.innerHTML = '                        <img src="indir.png" alt="">'
        imgFoot3.innerHTML = ' <img src="https://emanat.az/img/app_gallery_tr.2ba1c3ff.png" alt="">'



    }
}

onload = media
onresize = media





answer.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        if (!btn.classList.contains("active")) {
            answer.forEach(remove => {
                remove.classList.remove("active")
            })
        }

        btn.classList.toggle("active")
        if (btn.classList.contains("active")) {
            down[index].innerHTML = '<i class="fa-solid fa-chevron-up"></i>'
        }
        else {
            down[index].innerHTML = '  <i class="fa-solid fa-angle-down"></i>'
        }





    })
})






