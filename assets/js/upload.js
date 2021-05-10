export const handleFiles = (fileList, files) => {
  for(let file of fileList) {
    if(file.type !== "image/jpeg")
      continue;

    const img = document.createElement("img");
    img.dataset.name = file.name;

    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    }
    reader.readAsDataURL(file);

    files.addImage(img);
  }
}
