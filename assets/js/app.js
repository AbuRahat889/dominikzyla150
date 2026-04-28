//////////////////////////////
// COMPONENT LOADER
//////////////////////////////

function loadComponent(id, file) {
  fetch(file)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load ${file}`);
      return res.text();
    })
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((err) => {
      console.error("Component load error:", err);
    });
}

// Load layout components
loadComponent("sidebar", "components/sidebar.html");
loadComponent("topbar", "components/topbar.html");

//////////////////////////////
// SPA PAGE ROUTER
//////////////////////////////

function loadPage(page) {
  console.log("Loading page:", page);

  fetch(`${page}.html`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Page not found: ${page}.html`);
      }
      return res.text();
    })
    .then((html) => {
      document.querySelector(".content").innerHTML = html;
    })
    .catch((err) => {
      console.error("Routing error:", err);
      document.querySelector(".content").innerHTML =
        "<h2 style='color:red'>Page not found</h2>";
    });
}

// default page load
document.addEventListener("DOMContentLoaded", () => {
  loadPage("dashboard");
});

//////////////////////////////
// SIDEBAR ACTIVE STATE
//////////////////////////////

function setActive(page) {
  document.querySelectorAll(".sidebar-menu a").forEach((link) => {
    link.classList.remove("active");
  });

  const activeLink = document.querySelector(`[data-page="${page}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

//////////////////////////////
// USER MENU TOGGLE
//////////////////////////////

function toggleUserMenu(id) {
  const dropdown = document.getElementById(id);
  if (dropdown) {
    dropdown.classList.toggle("show");
  }
}

//////////////////////////////
// CLOSE USER MENU OUTSIDE CLICK
//////////////////////////////

document.addEventListener("click", function (event) {
  const menus = document.querySelectorAll(".user-menu");

  menus.forEach((menu) => {
    if (!menu.contains(event.target)) {
      const dropdown = menu.querySelector(".dropdown");
      dropdown?.classList.remove("show");
    }
  });
});

//////////////////////////////
// GLOBAL CLICK HANDLER (OPTIONAL CLEANUP)
//////////////////////////////

window.loadPage = loadPage;
window.setActive = setActive;
window.toggleDropdown = toggleDropdown;
window.toggleUserMenu = toggleUserMenu;

//////////////////////////////
// profile page tabs
//////////////////////////////
