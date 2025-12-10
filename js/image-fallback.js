document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".img-placeholder[style*='background-image']").forEach(function(el) {
    var style = el.getAttribute("style");
    var match = style.match(/url\(['"]?([^'")\s]+)['"]?\)/);
    if (match && match[1]) {
      var url = match[1];
      var img = new Image();
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
          };
          img2.src = newUrl;
        }
      };
      img.src = url;
    }
  });
});
