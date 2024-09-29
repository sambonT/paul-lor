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


  // to see if it will remove the pause button from being seen
  
  window.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');

    function isMobileDevice() {
        return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    videos.forEach(video => {
        // Hide native controls with CSS on mobile devices
        if (isMobileDevice()) {
            video.controls = false;
        }

        // Try to autoplay the video
        let playPromise = video.play();

        // Check if autoplay fails (due to mobile browser restrictions)
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Autoplay successful
                console.log('Autoplay started successfully');
            }).catch(error => {
                // Autoplay failed, fallback to require user interaction
                console.log('Autoplay failed. Waiting for user interaction.');
                video.addEventListener('click', function() {
                    video.play();
                });
            });
        }
    });
});


/* for auto changing the hero quote */




// Auto Text Changes over Hero Video
const quotes = [
    { text: "Best Web Design", cite: "Top 10 Websites" },
    { text: "Innovative Solutions", cite: "Design Awards 2023" },
    { text: "Cutting-Edge Technologies", cite: "Tech Innovators" }
  ];
  
  let currentQuoteIndex = 0;
  const quoteElement = document.getElementById('hero-quote');
  const citeElement = document.getElementById('hero-cite');
  
  function changeQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteElement.textContent = quotes[currentQuoteIndex].text;
    citeElement.textContent = quotes[currentQuoteIndex].cite;
  }
  
  // Change quote every 5 seconds
  setInterval(changeQuote, 5000);

