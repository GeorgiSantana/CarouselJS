let slide = 1;
document.getElementById("radio1").checked = true;

setInterval(() => {
  mudaImage();
}, 2000);

function mudaImage() {
  slide++;
  if (slide > 4) {
    slide = 1;
  }
  document.getElementById("radio" + slide).checked = true;
}
