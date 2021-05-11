const a4_size = { width: 794, height: 1123 };

export const saveFiles = (files) => {
  const { jsPDF } = jspdf;

  const quality = 0.7;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  let scaleFactor;
  for(let image of files.getImages()) {
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    scaleFactor = calculateScaleFactor(width);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = a4_size.width;
    canvas.height = a4_size.height;

    ctx.scale(scaleFactor, scaleFactor);
    ctx.drawImage(image, 0, 0);

    const imageData = canvas.toDataURL("image/jpeg", quality);
    const filename = image.dataset.name;

    const pdf = new jsPDF();
    pdf.addImage(imageData, "JPEG", 0, 0);
    pdf.save(filename);
  }

  files.resetImages();
}

const calculateScaleFactor = (width) => {
  return a4_size.width / width;
}
