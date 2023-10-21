let slideIndex = 0;

// Function to show the slides
function showSlides() {
    const slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slideIndex and reset if necessary
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Call the function again after 2 seconds (2000 milliseconds)
    setTimeout(showSlides, 2000);
}

// Initial call to start the slideshow
showSlides();
