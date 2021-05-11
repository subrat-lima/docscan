export class UI {
  constructor() {
    this.uploadContainer = document.querySelector(".upload");
    this.previewContainer = document.querySelector(".preview");
    this.editorContainer = document.querySelector(".editor");

    this.files = document.getElementById("files");
    this.editorImage = document.querySelector(".editor__image");
    this.editorClose = document.querySelector(".editor__close");
    this.editorSave = document.querySelector(".editor__save");

    this.addEventListeners();
  }

  addEventListeners() {
    this.uploadContainer.addEventListener("dragenter", this.stopDefault);
    this.uploadContainer.addEventListener("dragover", this.stopDefault);
    this.previewContainer.addEventListener("click", (e) => {
      this.openEditor(e, this);
    });

    this.editorClose.addEventListener("click", (e) => {
      this.editorContainer.classList.add("hide");
    });
  }

  stopDefault(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  openEditor(e, self) {
    if(e.target.tagName !== "IMG")
      return;

    self.editorContainer.classList.remove("hide");

    self.editorImage.src = e.target.src;
    self.editorImage.dataset.id = e.target.dataset.id;
  }

  showImages(files) {
    this.uploadContainer.classList.add("hide");
    this.previewContainer.classList.remove("hide");

    const images = files.getImages();

    for(let id in images) {
      images[id].dataset.id = id;
      this.previewContainer.appendChild(images[id]);
    }
  }
}
