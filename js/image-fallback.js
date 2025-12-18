document.addEventListener("DOMContentLoaded", function() {
  // Handle both placeholder images and hero banner images
  var selectors = ".img-placeholder[style*='background-image'], .hero-banner-image[style*='background-image']";
  
  document.querySelectorAll(selectors).forEach(function(el) {
    var style = el.getAttribute("style");
    var match = style.match(/url\(['"]?([^'")\s]+)['"]?\)/);
    if (match && match[1]) {
      var url = match[1];
      var img = new Image();
      
      img.onload = function() {
        // Image loaded successfully, add has-image class
        if (el.classList.contains("img-placeholder")) {
          el.classList.add("has-image");
        }
      };
      
      img.onerror = function() {
        var newUrl;
        if (url.endsWith(".png")) {
          newUrl = url.replace(/\.png$/, ".jpg");
        } else if (url.endsWith(".jpg") || url.endsWith(".jpeg")) {
          newUrl = url.replace(/\.(jpg|jpeg)$/, ".png");
        }
        if (newUrl) {
          var img2 = new Image();
          img2.onload = function() {
            el.style.backgroundImage = "url('" + newUrl + "')";
            // Add has-image class for placeholder images
            if (el.classList.contains("img-placeholder")) {
              el.classList.add("has-image");
            }
          };
          img2.src = newUrl;
        }
      };
      img.src = url;
    }
  });
});
