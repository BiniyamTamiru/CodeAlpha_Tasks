const images = [
    "images/923074186586d285d3d1bdd289814a9d.png",
    "images/books.webp",
    "images/profile.jpg"
];

let currentIndex = 0;

/* Open Lightbox */
function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "block";
    showImage();
}

/* Close Lightbox */
function closeLightbox(event) {
    if (event.target.id === "lightbox" || event.target.className === "close") {
        document.getElementById("lightbox").style.display = "none";
    }
}

/* Show Image */
function showImage() {
    document.getElementById("lightbox-img").src = images[currentIndex];
}

/* Next Image */
function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

/* Previous Image */
function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}