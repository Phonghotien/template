export default function gallery() {
  let Gal = document.querySelector(".gallery");
  if (Gal) {
    $(document).ready(function () {
      $(".gallery").lightGallery({
        selector: ".gallery__img",
      });
    });
  }
}
