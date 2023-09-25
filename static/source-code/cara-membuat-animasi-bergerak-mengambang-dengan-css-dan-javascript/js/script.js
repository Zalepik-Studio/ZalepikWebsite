let floatingAnimation = document.querySelector('.floating-animation');

let position = 0;

setInterval(function() {
    if (position === 0) {
        position = -10;
    } else {
        position = 0;
    }
    floatingAnimation.style.transform = 'translateY(' + position + 'px)';
}, 1000);
