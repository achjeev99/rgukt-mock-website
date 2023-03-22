let count = 2

let images = document.querySelectorAll("img")
let slider = document.querySelector(".slider-area")
let nextButton = document.querySelector("#next")
let prevButton = document.querySelector("#prev")

nextButton.addEventListener("click",next)

function next (){
if (count > 0){
        images[count].style.opacity = 0
        count -= 1
        console.log(count)
} else if (count <= 0){
    images.forEach((image) => {
        image.style.opacity = 1
    })
        count = 2
        console.log(count)
}
}

prevButton.addEventListener("click",previous)

function previous(){
    if (count == 2){
        count = 0
        images[2].style.opacity = 0
        images[1].style.opacity = 0
    } else if (count < 2){
        count = count + 1
        images[count].style.opacity = 1
    }
}


let i = 2
let j = 0
