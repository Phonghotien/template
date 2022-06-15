export default function readMore() {
    const readMores = document.querySelectorAll('.read-more');

    if (readMores) {
        readMores.forEach((readMore) => {
            readMore.onclick = (e) => {
                e.stopPropagation();
                readMore.classList.toggle('less')

                if (readMore.innerHTML.trim() == 'Đọc thêm') {
                    readMore.innerHTML = 'Thu gọn'
                } else {
                    readMore.innerHTML = 'Đọc thêm'
                }
                readMore.closest('.readmoreshow').classList.toggle('show')
            }
        })
    }

}