export class Files {
  constructor() {
    this.images = [];
    this.length = 0;
  }

  addImage(image) {
    this.images.push(image);
    this.length++;
  }

  removeImage(index) {
    this.images.splice(index, 1);
    this.length--;
  }

  getImages() {
    return this.images;
  }
}
