export const updateImage = (image, cropper, fileList) => {
  const index = image.dataset.id;

  const canvas  = cropper.getCroppedCanvas();
  const src = canvas.toDataURL();

  cropper.destroy();

  fileList.updateImage(index, src);
}
