let burger = document.querySelector(".main__header_burger")
let burgerMenu = document.querySelector(".main__header_burger_list")
let body = document.querySelector("body")
burger.addEventListener("click", function(){
    burger.classList.toggle("main__header_burger_active");
    burgerMenu.classList.toggle("main__header_burger_list_active")
    body.classList.toggle("lock")
})


let overlayLogin = document.querySelectorAll(".button--login")
let overlayClose = document.querySelector(".overlay__block_close")


overlayLogin.forEach(function(e){
    e.addEventListener("click", function(e){
        document.querySelector(".overlay").classList.add("overlay__visible")
        document.querySelector(".overlay__block").classList.add("overlay__block_visible")
        body.classList.add("lock")
    })
})

overlayClose.addEventListener("click", function(){
    document.querySelector(".overlay").classList.remove("overlay__visible")
    body.classList.remove("lock")
})


let overlayReg = document.querySelector(".button--reg")

overlayReg.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".overlay__block").classList.remove("overlay__block_visible")
    document.querySelector(".overlay__blockReg").classList.add("overlay__blockReg_visible")
})

let overlayRegClose = document.querySelector(".overlay__blockReg_close")

overlayRegClose.addEventListener("click", function(){
    document.querySelector(".overlay").classList.remove("overlay__visible")
    body.classList.remove("lock")
    document.querySelector(".overlay__blockReg").classList.remove("overlay__blockReg_visible")
})


window.addEventListener("scroll", function(){
    if(scrollY >= 400) {
        document.querySelector(".arrow").classList.add("arrow__visible")
    } else {
        document.querySelector(".arrow").classList.remove("arrow__visible")
    }
})


let arrow = document.querySelector(".arrow")

arrow.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


let nav = document.querySelector(".main__header_menu_list")


nav.addEventListener("click", function(e){
    e.preventDefault();
    let link = e.target
    if (link.dataset.id) {
        let target = document.querySelector(link.hash)
        console.log(target)
        let pos = target.offsetTop
        console.log(pos)
        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        })
    }
})