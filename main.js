let gallery = document.querySelector(".gallery");

let images = [
  { src: "imges/img1.jpg", alt: "Image 1" },
  { src: "imges/img2.jpg", alt: "Image 2" },
  { src: "imges/img3.png", alt: "Image 3" },
  { src: "imges/img4.jpg", alt: "Image 4" },
  { src: "imges/img5.jpg", alt: "Image 5" },
  { src: "imges/img6.jpg", alt: "Image 6" },
  { src: "imges/img7.jpg", alt: "Image 7" },
  { src: "imges/img8.jpg", alt: "Image 8" },
  { src: "imges/img9.jpg", alt: "Image 9" },
  { src: "imges/img10.jpg", alt: "Image 10" },
  { src: "imges/img11.jpg", alt: "Image 11" },
  { src: "imges/img12.jpg", alt: "Image 12" },
];

for (var i = 0; i < images.length; i++) {
  gallery.innerHTML += getImageTemplate(i);
}

function getImageTemplate(index) {
  return (
    '<button class="img-btn" onclick="showDialog(' +
    index +
    ')">' +
    '<img src="' +
    images[index].src +
    '" alt="' +
    images[index].alt +
    '">' +
    "</button>"
  );
}
let imgWin = document.getElementById("imgWin");
let dialog = document.getElementById("dialog");
let calc = document.getElementById("calc");
let closeBtn = document.getElementById("closeBtn");
let imgNameEl = document.getElementById("imgName");

let currentIndex = 0;

function showDialog(index) {
  showImageByIndex(index);
}

function showImageByIndex(index) {
  if (index >= images.length) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }

  currentIndex = index;

  if (!dialog.open) {
    dialog.showModal();
  }

  imgWin.style.backgroundImage = "url(" + images[currentIndex].src + ")";
  imgWin.style.backgroundSize = "cover";
  imgWin.style.backgroundPosition = "center";
  imgWin.style.height = "350px";
  imgWin.style.width = "500px";
  imgWin.style.margin = "45px 0";

  calc.textContent = (currentIndex + 1) + "/" + images.length;
  imgNameEl.textContent = images[currentIndex].alt;
}

document.getElementById("next").addEventListener("click", () => {
  showImageByIndex(currentIndex + 1);
});

document.getElementById("prev").addEventListener("click", () => {
  showImageByIndex(currentIndex - 1);
});
closeBtn.addEventListener("click", () => {
  dialog.close();
});
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    dialog.close();
  }
});
