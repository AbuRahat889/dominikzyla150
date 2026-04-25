function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

loadComponent("sidebar", "components/sidebar.html");
loadComponent("topbar", "components/topbar.html");


// ===== Existing Functions =====

function toggleDropdown(event, menuId) {
  event.preventDefault();
  const menu = document.getElementById(menuId);
  const arrow = event.currentTarget.querySelector('.dropdown-arrow');

  menu.classList.toggle('open');
  arrow.classList.toggle('open');
}

function toggleUserMenu() {
  const dropdown = document.getElementById('userDropdown');
  dropdown.classList.toggle('show');
}

document.addEventListener('click', function(event) {
  const userMenu = document.querySelector('.user-menu');
  if (userMenu && !userMenu.contains(event.target)) {
    document.getElementById('userDropdown')?.classList.remove('show');
  }
});