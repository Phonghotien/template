export default function formani() {
  let inp = document.querySelectorAll(".formInp");

  inp.forEach((v) => {
    let phd = v.placeholder;
    v.value === "" ? v.classList.remove("active") : v.classList.add("active");
    
    v.addEventListener("change", () => {
      v.value === "" ? v.classList.remove("active") : v.classList.add("active");
    });
    v.addEventListener("focus", () => {
      v.placeholder = "";
    });
    v.addEventListener("blur", () => {
      v.placeholder = phd;
    });
  });
}
