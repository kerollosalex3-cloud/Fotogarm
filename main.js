let imges = document.getElementsByTagName("img");
let dialog = document.getElementById("dialog");
let calc = document.getElementById("calc");
let closeBtn = document.getElementById("closeBtn");
let imgNameEl = document.getElementById("imgName"); 

let currentIndex = 0; 

function showImageByIndex(index) {
  if (index >= imges.length) {
    index = 0; 
  } else if (index < 0) {
    index = imges.length - 1; 
  }

  currentIndex = index;
  let currentImg = imges[currentIndex];

  if (!dialog.open) {
    dialog.showModal();
  }

  imgWin.style.backgroundImage = `url(${currentImg.src})`;
  imgWin.style.backgroundSize = "cover";
  imgWin.style.backgroundPosition = "center";
  
  calc.textContent = `${currentIndex + 1}/${imges.length}`;

  let imgNamedata = currentImg.alt || currentImg.dataset.name || "Keine Title";
  imgNameEl.textContent = imgNamedata;
}

function showDialog(imgElement) {
  let startIndex = Array.from(imges).indexOf(imgElement);
  showImageByIndex(startIndex);
}

document.getElementById("next").addEventListener("click", () => {
  showImageByIndex(currentIndex + 1);
});

document.getElementById("prev").addEventListener("click", () => {
  showImageByIndex(currentIndex - 1);
});
closeBtn.addEventListener('click', () => {
  dialog.close();
});
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) {
    dialog.close();
  }
});