window.addEventListener("scroll", function() {
  let windowWidth = window.innerWidth;
  // Only run the script if in desktop view
  if(windowWidth > 600) {
      let nav = document.getElementById('myNav');
      if(window.pageYOffset > nav.offsetTop) {
          nav.style.position = "fixed";
          nav.style.top = "0";
      } else {
          nav.style.position = "relative";
      }
  }
});
