export default function playing() {
    var videos = document.querySelectorAll(".video");
    var videoImgs = document.querySelectorAll(".videoImg");
    if (videos) {
        for (let video of videos) {
            console.log(Array.from(videos).indexOf(video));
            video.onplay = () => {
                video.parentElement.classList.add("playing");
                if (videoImgs) {
                    videoImgs[Array.from(videos).indexOf(video)].style.opacity = '0'
                }
            }
            video.onpause = () => {
                video.parentElement.classList.remove("playing");
            }
        }
    }
}