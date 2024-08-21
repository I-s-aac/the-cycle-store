
let seconds = 10;
let currentImage = 1;
let imageUrls = [
    "bike 1.png",
    "bike 2.png",
    "bike 3.png"
];

let imageArea = document.getElementById("image-gallery");
let opacity = 1;

function startSlideshow() {
    setTimeout(
        () => {
            lowerOpacity();
        }, seconds * 1000
    )
}

function lowerOpacity() {
    setTimeout(() => {
        opacity -= 0.01;
        imageArea.style.opacity = opacity;
        if (opacity > 0) {
            lowerOpacity();
        } else {
            if (currentImage == imageUrls.length) {
                currentImage = 0;
            }
            imageArea.src = imageUrls[currentImage];
            currentImage += 1;
            raiseOpacity();
        }
    }, 10);
}

function raiseOpacity() {
    setTimeout(() => {
        opacity += 0.01;
        imageArea.style.opacity = opacity;
        if (imageArea.style.opacity < 1) {
            raiseOpacity();
        } else {

            startSlideshow();
        }
    }, 10);
}

startSlideshow()

