import { UI } from "./ui.js";
import { Files } from "./files.js";
import { handleFiles } from "./upload.js";
import { updateImage } from "./modify.js";
import { saveFiles } from "./save.js";
import { installSW } from "./pwa.js";

const ui = new UI();
const files = new Files();

let cropper;

ui.files.addEventListener("change", (e) => {
  const fileList = e.target.files;
  handleFiles(fileList, files);
  ui.showImages(files);
});

ui.uploadContainer.addEventListener("drop", (e) => {
  e.stopPropagation();
  e.preventDefault();

  const fileList = e.dataTransfer.files;
  handleFiles(fileList, files);
  ui.showImages(files);
});

ui.previewContainer.addEventListener("click", (e) => {
  if(e.target.tagName != "IMG")
    return;

  cropper = new Cropper(ui.editorImage, {
    aspectRatio: 0.707
  });
});

ui.editorClose.addEventListener("click", (e) => {
  cropper.destroy();
});

ui.editorSave.addEventListener("click", (e) => {
  updateImage(ui.editorImage, cropper, files);

  ui.editorContainer.classList.add("hide");
});

ui.previewSave.addEventListener("click", (e) => {
  saveFiles(files);

  ui.previewImageContainer.innerHTML = "";
  ui.previewContainer.classList.add("hide");
  ui.uploadContainer.classList.remove("hide");
});

installSW();
