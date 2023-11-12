let imageUpload = document.getElementById('imageUpload');
let imagePreview = document.getElementById('imagePreview');
let imageDropBox = document.getElementById('imageDropBox');

imageUpload.onchange = function () {
    const selectedFile = imageUpload.files[0];

    if (selectedFile) {
        imagePreview.src = URL.createObjectURL(selectedFile);
        imagePreview.style.display = 'block';
        imageDropBox.style.display = 'none';
    }
};
