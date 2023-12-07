const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    var moon = this.classList.toggle('bi-moon');
    console.log("Moon:", moon);
    var sun = this.classList.toggle('bi-brightness-high-fill');
    console.log("Sun:", sun);
    if (sun) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});