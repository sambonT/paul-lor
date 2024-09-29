// Hamburger Menu Toggle Script
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', function () {
  this.classList.toggle('active');
  navbar.classList.toggle('open');
});


// controlling the video queue

let videos = [document.getElementById('video1'), document.getElementById('video2'), document.getElementById('video3')];
let currentVideoIndex = 0;

// Function to switch between videos without flicker
function switchVideo() {
    // Hide current video
    videos[currentVideoIndex].style.display = 'none';
    videos[currentVideoIndex].pause();
    
    // Move to the next video
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    
    // Show the next video and play it
    videos[currentVideoIndex].style.display = 'block';
    videos[currentVideoIndex].play();
}

// Add event listeners to each video for 'ended' event to switch
videos.forEach(video => {
    video.addEventListener('ended', switchVideo);
});





// Slider functionality
let slides = document.querySelectorAll('.slide');
let slideButtons = document.querySelectorAll('.slide-button');
let currentSlideIndex = 0;

function showSlide(index) {
    // Hide all slides and remove 'active' class from buttons
    slides.forEach((slide) => slide.classList.remove('active'));
    slideButtons.forEach((button) => button.classList.remove('active'));

    // Show the slide with the given index and add 'active' class to the corresponding button
    slides[index].classList.add('active');
    slideButtons[index].classList.add('active');
    currentSlideIndex = index;
}

// Handle slide button clicks
slideButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let index = parseInt(event.target.getAttribute('data-index'));
        showSlide(index);
    });
});

// Automatically switch slides every 5 seconds
setInterval(() => {
    let nextSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(nextSlideIndex);
}, 5000);


// this block of code is to see if the video will autoplay 
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('videoPlayer');
    video.play().catch(function(error) {
      console.log("Autoplay was prevented:", error);
    });
  });


  window.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        // Set a slight delay (e.g., 100ms) to give time for the controls to be hidden
        setTimeout(() => {
            // Only autoplay if the video is muted (to comply with autoplay restrictions)
            if (video.muted) {
                video.play().catch(error => {
                    console.error('Autoplay failed due to:', error);
                });
            }
        }, 100); // Adjust delay as needed
    });
});
