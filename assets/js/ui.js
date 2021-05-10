export class UI {
  constructor() {
    this.uploadContainer = document.querySelector(".upload");
    this.previewContainer = document.querySelector(".preview");

    this.files = document.getElementById("files");

    this.addEventListeners();
  }

  addEventListeners() {
    this.uploadContainer.addEventListener("dragenter", this.stopDefault);
    this.uploadContainer.addEventListener("dragover", this.stopDefault);
  }

  stopDefault(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  showImages(files) {
    this.uploadContainer.classList.add("hide");
    this.previewContainer.classList.remove("hide");

    for(let image of files.getImages()) {
      this.previewContainer.appendChild(image);
    }
  }
}
