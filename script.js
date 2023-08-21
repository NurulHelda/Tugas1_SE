const randomImageBtn = document.getElementById('get-random-image');
const randomImage = document.getElementById('random-image');

async function loadRandomImage() {
  try {
    const response = await fetch('https://source.unsplash.com/500x400/?random');
    randomImage.src = response.url;
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

// Memuat gambar secara otomatis saat halaman dimuat
loadRandomImage();

randomImageBtn.addEventListener('click', loadRandomImage);
