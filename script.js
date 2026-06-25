const text = [
    "B.Com Student",
    "Computer Trainer",
    "Magazine Creator",
    "Book Designer",
    "Future Court Stenographer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 1500);
    }else{
        setTimeout(type, 100);
    }

})();

window.addEventListener("scroll", () => {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            section.classList.add("active");
        }
    });

});
