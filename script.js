const randomImageBtn = document.getElementById('get-random-image');
const randomImage = document.getElementById('random-image');

randomImageBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://source.unsplash.com/500x400/?random');
    randomImage.src = response.url;
  } catch (error) {
    console.error('Error fetching image:', error);
  }
});
