// Typing Animation

const text = [
    "Web Developer",
    "AI & Data Science Student",
    "Video Editor"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typing(){

    currentText = text[index];

    if(!isDeleting){

        document.getElementById("typing").textContent =
        currentText.substring(0,charIndex++);

        if(charIndex > currentText.length){

            isDeleting = true;
            setTimeout(typing,1000);
            return;
        }

    }
    else{

        document.getElementById("typing").textContent =
        currentText.substring(0,charIndex--);


        if(charIndex < 0){

            isDeleting = false;

            index++;

            if(index >= text.length){
                index = 0;
            }

        }

    }


    setTimeout(typing,100);

}


typing();




// Current Year

document.getElementById("year").innerHTML =
new Date().getFullYear();
