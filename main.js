const gallery = document.querySelector(".gallery");
const imgWin = document.getElementById("imgWin");
const dialog = document.getElementById("dialog");
const calc = document.getElementById("calc");
const closeBtn = document.getElementById("closeBtn");
const imgNameEl = document.getElementById("imgName");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const images = [
  { src: "imges/img1.jpg", alt: "Türkisfarbener Gletschersee mit Eisbergen und Bergen" },
  { src: "imges/img2.jpg", alt: "Regnerische Straße in Japan bei Nacht mit Neonlichtern" },
  { src: "imges/img3.png", alt: "Dunkle Gewitterwolken am Himmel" },
  { src: "imges/img4.jpg", alt: "Blaumeise auf einem Ast" },
  { src: "imges/img5.jpg", alt: "Wirbelsturm über der Erde aus dem Weltraum" },
  { src: "imges/img6.jpg", alt: "Ruhiger See mit schneebedeckten Bergen und Spiegelung" },
  { src: "imges/img7.jpg", alt: "Ente mit ausgebreiteten Flügeln auf dem Wasser" },
  { src: "imges/img8.jpg", alt: "Person steht nachts auf einem Felsen am Meer unter Sternenhimmel" },
  { src: "imges/img9.jpg", alt: "Kleiner weiß-brauner Vogel sitzt auf einem Felsen" },
  { src: "imges/img10.jpg", alt: "Zwei junge Schneeleoparden auf einem Felsen" },
  { src: "imges/img11.jpg", alt: "Schneebedeckte Berge unter blauem Himmel" },
  { src: "imges/img12.jpg", alt: "Einzelner verschneiter Baum in Winterlandschaft" },
];

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  setupEventListeners();
});

function renderGallery() {
  for (let i = 0; i < images.length; i++) {
    gallery.innerHTML += getImageTemplate(i);
  }
}

function getImageTemplate(index) {
  return `
    <button class="img-btn" onclick="showDialog(${index})">
      <img src="${images[index].src}" alt="${images[index].alt}">
    </button>
  `;
}

function setupEventListeners() {
  nextBtn.addEventListener("click", () => showNextImage());
  prevBtn.addEventListener("click", () => showPrevImage());
  closeBtn.addEventListener("click", () => dialog.close());
  
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });
}

function showDialog(index) {
  updateCurrentIndex(index);
  openDialog();
  displayImage();
}

function updateCurrentIndex(index) {
  if (index >= images.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = images.length -1;
  } else {
    currentIndex = index;
  }
}

function openDialog() {
  if (!dialog.open) {
    dialog.showModal();
  }
}

function displayImage() {
  imgWin.className = "img-display";
  imgWin.style.backgroundImage = `url(${images[currentIndex].src})`;
  
  calc.textContent = `${currentIndex + 1}/${images.length}`;
  imgNameEl.textContent = images[currentIndex].alt;
}

function showNextImage() {
  updateCurrentIndex(currentIndex + 1);
  displayImage();
}

function showPrevImage() {
  updateCurrentIndex(currentIndex - 1);
  displayImage();
}