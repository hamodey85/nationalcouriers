(() => {
  let navbarCollapse = document.getElementById("navbar-collapse");
  document.getElementById("close-icon").addEventListener("click", function(e) {
    this.classList.toggle("cross");
    navbarCollapse.classList.toggle("navbar-collapse-toggle");
  });
})();
