const a4_size = { width: 794, height: 1123 };

export const saveFiles = (files) => {
  const quality = 0.7;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const a = document.createElement("a");
  let scaleFactor;
  for(let image of files.getImages()) {
    let width = image.naturalWidth;
    let height = image.naturalHeight;
    scaleFactor = calculateScaleFactor(width);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = a4_size.width;
    canvas.height = a4_size.height;

    ctx.scale(scaleFactor, scaleFactor);
    ctx.drawImage(image, 0, 0);

    a.href = canvas.toDataURL("image/jpeg", quality);
    a.download = image.dataset.name;
    a.click();
  }
}

const calculateScaleFactor = (width) => {
  return a4_size.width / width;
}
