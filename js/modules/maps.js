export function maps() {
    const mapBtn = document.querySelector('.map-btn .curItemSqr')
    const mapCol = document.querySelector('.map-col')
    const mapColWrap = document.querySelector('.map-col-wrap')
    if (mapBtn) {
        mapBtn.onclick = (e) => {
            e.stopPropagation()
            mapBtn.classList.toggle('active')
            $(mapColWrap).stop().slideToggle()
        }
    }
}