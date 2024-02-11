function reveal() {
    var reveals = document.querySelectorAll(".square");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 5;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
        reveals[i].classList.remove("anim-done");
      }
    }
  }


  var squares = document.querySelectorAll(".square");
  squares.forEach(function(square) {
    square.addEventListener("animationend", function() {
      this.classList.add("anim-done");
    });
  });


  
  window.addEventListener("scroll", reveal);
  