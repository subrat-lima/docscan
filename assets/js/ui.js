export class UI {
  constructor() {
    this.uploadContainer = document.querySelector(".upload");

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
}
