const marqueeContent = document.querySelector(".marquee-content");

marqueeContent.innerHTML += marqueeContent.innerHTML;

let position = 0;

function moveMarquee() {
  position--;
  marqueeContent.style.marginLeft = position + "px";

  if (position <= -marqueeContent.offsetWidth / 2) {
    position = 0;
  }
}

setInterval(moveMarquee, 20);
