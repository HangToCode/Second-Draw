document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const imgSrc = urlParams.get('imgSrc');
    const imageName = urlParams.get('imageName');

    // Set the image source and image name
    document.getElementById('img').src = decodeURIComponent(imgSrc);
    document.getElementById('artDetail').innerText = `Image Name: ${decodeURIComponent(imageName)}`;
});
