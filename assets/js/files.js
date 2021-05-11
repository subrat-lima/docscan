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

  updateImage(index, src) {
    this.images[index].src = src;
  }

  getImages() {
    return this.images;
  }
}
