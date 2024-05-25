let popup = document.querySelector(".popup");
let view = document.querySelectorAll(".buttons button");
let closep = document.querySelector(".span");


view.forEach(vie=>{
    vie.onclick = ()=>{
        popup.classList.toggle("open");

    }
})

closep.onclick = ()=>{
    popup.classList.remove("open");

}

let titles = document.querySelectorAll(".wrap-h");

titles.forEach(title => {
    let span = title.querySelector("span");

    title.addEventListener("mouseover", () => {
        span.style.height = "100%";
        title.style.color = "#fff";
    });

    title.addEventListener("mouseout", () => {
        span.style.height = ""; // Reset to original height or provide a specific value
        title.style.color = ""; // Reset to original color or provide a specific value
    });
});





/////////////////////////////////////


let cards = document.querySelectorAll(".containar .content-page .wrapper .wrap");

function hover(event) {
    let card = event.currentTarget;
    let overLay = card.querySelector(".img .overlay");
    let flexOver = card.querySelector(".img .overlay .flex-over");

    overLay.style.opacity = "1";
    flexOver.style.opacity = '1';
    flexOver.style.justifyContent = "space-around"; 
}

function hoverd(event) {
    let card = event.currentTarget;
    let overLay = card.querySelector(".img .overlay");
    let flexOver = card.querySelector(".img .overlay .flex-over");

    overLay.style.opacity = "0";
    flexOver.style.opacity = '0';
} 

cards.forEach(card => {
    card.addEventListener("mouseover", hover);
    card.addEventListener("mouseleave", hoverd);
});

