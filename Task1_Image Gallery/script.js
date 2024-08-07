const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const body = document.body;
const galleryItems = document.querySelectorAll('.gallery-item img');
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryItems[index].src;
    lightbox.classList.add('show');
}

function closeLightbox() {
    lightbox.classList.remove('show');
}

// Toggle dark mode
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}

// Close lightbox on Esc key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    } else if (event.key === 'ArrowLeft') {
        navigate(-1);
    } else if (event.key === 'ArrowRight') {
        navigate(1);
    }
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Navigate through images
function navigate(direction) {
    currentIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
}

// Add click event for navigation buttons
document.querySelector('.nav-button.prev').addEventListener('click', function(event) {
    event.stopPropagation();
    navigate(-1);
});

document.querySelector('.nav-button.next').addEventListener('click', function(event) {
    event.stopPropagation();
    navigate(1);
});
