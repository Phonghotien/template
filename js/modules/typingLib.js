export default function typingLib() {
    const isTyped = document.querySelector('#typed')
    if (isTyped) {
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            smartBackspace: true,
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            loopCount: Infinity,
        });
    }
}