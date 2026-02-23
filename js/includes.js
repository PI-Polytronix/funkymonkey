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
    var iconPages = { "/index.html": true, "/industries.html": true };
    if (!iconPages[path]) return;

    var iconsPath = "/assets/favicons/industry_icons/";
    /* Index capability cards → SVG filenames in industry_icons folder */
    var industryIconFile = {
      display: "digital_displays_capabilities_icon.svg",
      cable: "Cable_Harnesses_capabilities_icon.svg",
      machining: "Precision_Machining_Fabrication_capablities_icon.svg",
      lighting: "Instrument_Panels_Lighting_capablities_icon.svg",
      assembly: "Box_Build_Assembly_capabilities_icon.svg",
      electro: "ElectroMechanical_PCB Assembly_capabilities_icon.svg",
      engineering: "Engineering_capabilities_icon.svg",
      repair: "Repair_Services_capabilities_icon.svg",
      aviation: "aerospace_defense_industry_icon.svg",
      defense: "aerospace_defense_industry_icon.svg",
      medical: "medical_industrial_industry_icon.svg",
      industrial: "Industrial Equipment_icon.svg",
      network: "Communications & Networking_icon.svg",
      transport: "Transportation & Automotive_icon.svg",
      energy: "Energy & Utilities_icon.svg",
      oil: "Oil & Gas_icon.svg",
      retail: "Vending Machines and Unattended Retail_icon.svg",
      default: "digital_displays_capabilities_icon.svg"
    };

    function resolveType(title) {
      var t = (title || "").toLowerCase();
      if (t.indexOf("lighting") >= 0 || t.indexOf("instrument panel") >= 0) return "lighting";
      if (t.indexOf("display") >= 0 || t.indexOf("panel") >= 0) return "display";
      if (t.indexOf("cable") >= 0 || t.indexOf("harness") >= 0 || t.indexOf("wire") >= 0) return "cable";
      if (t.indexOf("machin") >= 0 || t.indexOf("fabricat") >= 0) return "machining";
      if (t.indexOf("electro") >= 0 || t.indexOf("pcb") >= 0) return "electro";
      if (t.indexOf("box build") >= 0 || t.indexOf("assembly") >= 0) return "assembly";
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

      var type = resolveType(heading.textContent);

      var icon = target.querySelector(".card-icon");
      if (!icon) {
        icon = document.createElement("div");
        icon.className = "card-icon";
        target.insertBefore(icon, heading);
      }
      var iconFile = industryIconFile[type] || industryIconFile.default;
      var iconSrc = iconsPath + encodeURIComponent(iconFile);
      icon.innerHTML = "<img src=\"" + iconSrc + "\" alt=\"\" width=\"40\" height=\"40\" loading=\"lazy\">";
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
