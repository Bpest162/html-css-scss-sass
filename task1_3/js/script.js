const slider = document.getElementById("myRange");
const output = document.getElementById("value");


output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value + 'K';
}

/* slider.addEventListener("mousemove", function(){
    let x = slider.value;
    let color = 'linear-gradient(90deg, rgb(214, 66, 0)' + x + '%, rgb(184, 182, 191)' + x + '%)';

    slider.style.background = color;
}) */
