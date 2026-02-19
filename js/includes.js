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
    var toggles = document.querySelectorAll(".site-nav .nav-item > a");
    toggles.forEach(function (toggle) {
      var submenu = toggle.nextElementSibling;
      if (!submenu || !submenu.classList.contains("nav-submenu")) return;

      toggle.addEventListener("click", function (e) {
        if (window.innerWidth < 768) {
          var parent = this.parentElement;
          var alreadyOpen = parent.classList.contains("open");

          if (!alreadyOpen) {
            e.preventDefault();
            document.querySelectorAll(".site-nav .nav-item.open").forEach(function (item) {
              if (item !== parent) item.classList.remove("open");
            });
            parent.classList.add("open");
          }
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

  function addRelevantCardIcons() {
    var path = normalizePath(window.location.pathname).toLowerCase();
    var iconPages = {
      "/index.html": true,
      "/industries.html": true,
      "/capabilities.html": true,
      "/industries/aerospace-defense.html": true,
      "/industries/medical-industrial.html": true
    };
    if (!iconPages[path]) return;

    function iconSvg(type) {
      var map = {
        display: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="M3 4h18v12H3V4zm2 2v8h14V6H5zm5 12h4v2h-4z"/></svg>',
        cable: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="M7 7a3 3 0 1 0-3 3h2v2H4a5 5 0 1 1 5-5h2v2H9V7H7zm10 10a3 3 0 1 0 3-3h-2v-2h2a5 5 0 1 1-5 5h-2v-2h2v2h2zM8 11h8v2H8v-2z"/></svg>',
        machining: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="m12 2 2 2 3-.5.8 2.9 2.7 1.4-1.4 2.7 1.4 2.7-2.7 1.4-.8 2.9-3-.5-2 2-2-2-3 .5-.8-2.9-2.7-1.4L4.1 12 2.7 9.3l2.7-1.4.8-2.9 3 .5 2-2zm0 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>',
        lighting: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-4 12.8V18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.2A7 7 0 0 0 12 2zm-2 18h4v2h-4v-2z"/></svg>',
        assembly: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 3h7v2h-7v-2z"/></svg>',
        engineering: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="m22 19-6.3-6.3a5 5 0 1 0-3 3L19 22l3-3zM6 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/></svg>',
        repair: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="m14.7 6.3 3 3-2.4 2.4-3-3-6.6 6.6H3v-2.7l6.6-6.6-3-3L9 0l5.7 6.3zM20 14h2v8h-8v-2h6v-6z"/></svg>',
        aviation: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="m2 13 20-5-5 5 5 5-20-5zm7.5.5L7 16l4-.8 3 2.8 1-1-2.1-3.5L15 10l-1-1-3 2.8L7 11l2.5 2.5z"/></svg>',
        defense: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm0 3 5 1.9V11c0 3.7-2.3 7.3-5 8.6-2.7-1.3-5-4.9-5-8.6V6.9L12 5z"/></svg>',
        medical: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4z"/></svg>',
        industrial: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="M3 21V8l6 3V8l6 3V3l6 3v15H3z"/></svg>',
        network: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="M10 4h4v4h-4V4zM4 16h4v4H4v-4zm12 0h4v4h-4v-4zM6 16v-2h5V8h2v6h5v2H6z"/></svg>',
        transport: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="M3 6h13v9h2l3 3v2h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3V6zm2 2v7h9V8H5zm13 2h2l2 2h-4v-2z"/></svg>',
        energy: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>',
        oil: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="M12 2s6 6.2 6 10a6 6 0 1 1-12 0c0-3.8 6-10 6-10z"/></svg>',
        retail: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="M4 4h16l-1 4H5L4 4zm1 6h14v10H5V10zm3 2v6h8v-6H8z"/></svg>',
        default: '<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" aria-hidden="true"><path d="M4 4h16v16H4V4zm3 3v10h10V7H7z"/></svg>'
      };
      return map[type] || map.default;
    }

    function resolveType(title) {
      var t = (title || "").toLowerCase();
      if (t.indexOf("display") >= 0 || t.indexOf("panel") >= 0) return "display";
      if (t.indexOf("cable") >= 0 || t.indexOf("harness") >= 0 || t.indexOf("wire") >= 0) return "cable";
      if (t.indexOf("machin") >= 0 || t.indexOf("fabricat") >= 0) return "machining";
      if (t.indexOf("lighting") >= 0 || t.indexOf("light") >= 0) return "lighting";
      if (t.indexOf("box build") >= 0 || t.indexOf("assembly") >= 0 || t.indexOf("pcb") >= 0 || t.indexOf("electro") >= 0) return "assembly";
      if (t.indexOf("engineering") >= 0 || t.indexOf("program management") >= 0) return "engineering";
      if (t.indexOf("repair") >= 0) return "repair";
      if (t.indexOf("aerospace") >= 0 || t.indexOf("aviation") >= 0 || t.indexOf("helicopter") >= 0 || t.indexOf("satellite") >= 0 || t.indexOf("simulation") >= 0) return "aviation";
      if (t.indexOf("military") >= 0 || t.indexOf("defense") >= 0) return "defense";
      if (t.indexOf("medical") >= 0 || t.indexOf("life sciences") >= 0) return "medical";
      if (t.indexOf("industrial") >= 0 || t.indexOf("equipment") >= 0) return "industrial";
      if (t.indexOf("network") >= 0 || t.indexOf("communication") >= 0) return "network";
      if (t.indexOf("transport") >= 0 || t.indexOf("rail") >= 0 || t.indexOf("automotive") >= 0) return "transport";
      if (t.indexOf("energy") >= 0 || t.indexOf("utilities") >= 0) return "energy";
      if (t.indexOf("oil") >= 0 || t.indexOf("gas") >= 0) return "oil";
      if (t.indexOf("vending") >= 0 || t.indexOf("retail") >= 0) return "retail";
      return "default";
    }

    document.querySelectorAll(".card.card-industry").forEach(function (card) {
      var target = card.querySelector(":scope > a") || card;
      var heading = target.querySelector("h2, h3, h4");
      if (!heading) return;

      var icon = target.querySelector(".card-icon");
      if (!icon) {
        icon = document.createElement("div");
        icon.className = "card-icon";
        target.insertBefore(icon, heading);
      }
      icon.innerHTML = iconSvg(resolveType(heading.textContent));
    });
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
      addRelevantCardIcons();
    })
    .catch(function (error) {
      console.error("Partial include error:", error);
    });
})();
