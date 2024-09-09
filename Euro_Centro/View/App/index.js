/* Funcionalidad de sidebar - Ocultar */
document.addEventListener('DOMContentLoaded', function () {
    var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
    var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
      return new bootstrap.Offcanvas(offcanvasEl)
    });

    var navLinks = document.querySelectorAll('.nav-link-close');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        offcanvasList.forEach(function (offcanvas) {
          offcanvas.hide();
        });
      });
    });
  });