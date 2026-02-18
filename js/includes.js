(function () {
  function normalizePath(pathname) {
    if (!pathname || pathname === "/") return "/index.html";
    if (pathname.endsWith("/")) return pathname + "index.html";
    return pathname;
  }

  function activeHrefForPath(pathname) {
    var path = normalizePath(pathname.toLowerCase());

    if (path.indexOf("/industries/") === 0) return "/industries.html";
    if (path.indexOf("/capabilities/") === 0) return "/capabilities.html";
    if (path.indexOf("/about/") === 0) return "/about.html";
    if (path === "/about.html") return "/about.html";
    if (path === "/industries.html") return "/industries.html";
    if (path === "/capabilities.html") return "/capabilities.html";
    if (path === "/quality.html" || path === "/certifications.html") return "/quality.html";
    if (path === "/careers.html") return "/careers.html";
    if (path === "/contact.html") return "/contact.html";
    return "/index.html";
  }

  function setActiveNav() {
    var header = document.getElementById("site-header");
    if (!header) return;

    var activeHref = activeHrefForPath(window.location.pathname);
    var navLinks = header.querySelectorAll(".site-nav > a, .nav-submenu a");

    navLinks.forEach(function (link) {
      link.removeAttribute("aria-current");
    });

    var activeLink = header.querySelector('.site-nav > a[href="' + activeHref + '"]');
    if (activeLink) {
      activeLink.setAttribute("aria-current", "page");
    }
  }

  function initMobileSubmenuToggle() {
    var toggles = document.querySelectorAll(".nav-item-toggle");
    toggles.forEach(function (toggle) {
      toggle.addEventListener("click", function (e) {
        if (window.innerWidth < 768) {
          e.preventDefault();
          this.parentElement.classList.toggle("open");
        }
      });
    });
  }

  function setFooterYear() {
    var year = document.getElementById("year");
    if (year) {
      year.textContent = new Date().getFullYear();
    }
  }

  function loadPartial(targetId, url) {
    var target = document.getElementById(targetId);
    if (!target) return Promise.resolve();

    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to load " + url + " (" + response.status + ")");
        }
        return response.text();
      })
      .then(function (html) {
        target.innerHTML = html;
      });
  }

  Promise.all([
    loadPartial("site-header", "/partials/header.html"),
    loadPartial("site-footer", "/partials/footer.html"),
    loadPartial("compliance-strip", "/partials/compliance-strip.html"),
    loadPartial("trust-indicators", "/partials/trust-indicators.html")
  ])
    .then(function () {
      setActiveNav();
      initMobileSubmenuToggle();
      setFooterYear();
    })
    .catch(function (error) {
      console.error("Partial include error:", error);
    });
})();
