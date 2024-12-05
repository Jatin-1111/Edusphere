// Carousel Functionality Script
const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let currentIndex = 1; // Start from the actual first slide

// Dynamically calculate slide width for responsiveness
function getSlideWidth() {
  return slides[0].getBoundingClientRect().width;
}

// Set the initial position of the track
function updateTrackPosition() {
  const slideWidth = getSlideWidth();
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

// Move to the specified slide
function moveToSlide(index) {
  const slideWidth = getSlideWidth();
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${slideWidth * index}px)`;
  currentIndex = index;
}

// Handle infinite looping
track.addEventListener("transitionend", () => {
  if (slides[currentIndex].dataset.clone === "last") {
    track.style.transition = "none";
    currentIndex = slides.length - 2; // Jump to the real last slide
    updateTrackPosition();
  }
  if (slides[currentIndex].dataset.clone === "first") {
    track.style.transition = "none";
    currentIndex = 1; // Jump to the real first slide
    updateTrackPosition();
  }
});

// Button functionality
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    moveToSlide(currentIndex - 1);
  } else {
    moveToSlide(slides.length - 2); // Jump to the last slide
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    moveToSlide(currentIndex + 1);
  } else {
    moveToSlide(1); // Jump to the first slide
  }
});

// Auto sliding
const autoSlideInterval = 10000; // Time in ms for auto-slide
let autoSlide = setInterval(() => {
  if (currentIndex < slides.length - 1) {
    moveToSlide(currentIndex + 1);
  } else {
    moveToSlide(1); // Jump to the first slide
  }
}, autoSlideInterval);

// Stop auto-sliding on hover
const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

carouselContainer.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    if (currentIndex < slides.length - 1) {
      moveToSlide(currentIndex + 1);
    } else {
      moveToSlide(1); // Jump to the first slide
    }
  }, autoSlideInterval);
});

// Ensure proper slide positioning on window resize
window.addEventListener("resize", () => {
  updateTrackPosition();
});
