document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const lyrics = document.getElementById("lyrics");
    const lyricsContainer = document.querySelector(".lyrics-container");

    let currentLine = 0;

    audio.addEventListener("timeupdate", function () {
        const currentTime = Math.floor(audio.currentTime);
        const lines = lyrics.querySelectorAll("p[data-time]");
        
        for (let i = 0; i < lines.length; i++) {
            const lineTime = parseInt(lines[i].getAttribute("data-time"));
            if (lineTime === currentTime) {
                currentLine = i;
                scrollToCurrentLine();
                highlightCurrentLine();
                break;
            }
        }
    });
    function highlightCurrentLine() {
        const lines = lyrics.querySelectorAll("p[data-time]");
        lines.forEach(line => line.classList.remove("current"));
        lines[currentLine].classList.add("current");
    }

    function scrollToCurrentLine() {
        const lineHeight = lyrics.querySelector("p").offsetHeight;
        const containerHeight = lyricsContainer.offsetHeight;
        const scrollOffset = (currentLine * lineHeight) - (containerHeight / 10) + (lineHeight / 10);
        lyricsContainer.scrollTop = scrollOffset;
    }
});
