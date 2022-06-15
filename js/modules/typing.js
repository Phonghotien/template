export default function typing() {
    var typeTxt = document.querySelector(".banner__title");
    if (typeTxt !== null) {
        let timer = setInterval(typingTxt, 100);
        var typeStr = typeTxt.textContent;
        var typeSplit = typeStr.split("");
        typeTxt.textContent = "";
        for (let i = 0; i < typeSplit.length; i++) {
            if (typeSplit[i] !== " ")
                typeTxt.innerHTML +=
                    '<span class="spanTxt">' + typeSplit[i] + "</span>";
            else
                typeTxt.innerHTML +=
                    '<span class="spanTxt space">' + " " + "</span>";
        }
        let char = 0;
        function typingTxt() {
            let spanTxt = document.querySelectorAll(".spanTxt")[char];
            spanTxt.classList.add("fade");
            char++;
            if (char === typeSplit.length) {
                clearInterval(timer);
                timer = null;
                return;
            }
        }
    }
}
