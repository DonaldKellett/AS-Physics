/*
  custom.js
  My custom Javascript file for my AS Physics Introductory (Slidex) Presentation
  (c) Donald Leung.  All rights reserved.
*/

// Initialize Slidex with custom settings
// Note: The background color should be overriden by the radial gradient set in my custom stylesheet (except for IE).

slidex.init({
  fontFamily: "'Comic Sans MS', sans-serif",
  color: "white",
  backgroundColor: "#222"
});

// Contents Object (allows presenter to skip to desired sections immediately)

var contents = {
  section1: function() {
    slidex.currentSlideNumber = 3;
    slidex.currentSlideId = "slide" + slidex.currentSlideNumber;
    document.getElementById("slideWindow").innerHTML = document.getElementById(slidex.currentSlideId).innerHTML;
    document.getElementById("currentSlide").innerHTML = slidex.currentSlideNumber;
  },
  section2: function() {return undefined;},
  section3: function() {return undefined;},
  spinoff: function() {return undefined;},
  credits: function() {return undefined;}
};
