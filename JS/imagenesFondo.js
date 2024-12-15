const images = [
    '../IMG/kaws1.png',
    '../IMG/kaws2.png',
    '../IMG/kaws3.png'
];

function changeBackground() {
    const randomIndex = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url('${images[randomIndex]}')`;
}

changeBackground();

setInterval(changeBackground, 15000
);
