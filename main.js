document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeMenuButton = document.getElementById("close-menu-button");
  const mobileSidebar = document.getElementById("mobile-sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");

  function toggleMenu() {
    const isHidden = mobileSidebar.classList.contains("translate-x-full");

    if (isHidden) {
      // Open menu
      mobileSidebar.classList.remove("translate-x-full");
      backdrop.classList.remove("opacity-0", "pointer-events-none");
    } else {
      // Close menu
      mobileSidebar.classList.add("translate-x-full");
      backdrop.classList.add("opacity-0", "pointer-events-none");
    }
  }

  if (mobileMenuButton) mobileMenuButton.addEventListener("click", toggleMenu);
  if (closeMenuButton) closeMenuButton.addEventListener("click", toggleMenu);
  if (backdrop) backdrop.addEventListener("click", toggleMenu);
});
