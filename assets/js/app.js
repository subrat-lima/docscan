import { UI } from "./ui.js";
import { Files } from "./files.js";
import { handleFiles } from "./upload.js";

const ui = new UI();
const files = new Files();

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
