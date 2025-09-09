let lenght = document.getElementById("lenght");
let width = document.getElementById("width");
let demo = document.getElementById("demo");
function generateArea(lenght, width) {
    return lenght * width
}
function present() {
    demo.innerHTML = generateArea(lenght.value, width.value);
}
