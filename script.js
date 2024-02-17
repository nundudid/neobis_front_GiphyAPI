const gifsContainer = document.querySelector('#gifs');
const form = document.querySelector('form');
const searchInput = document.querySelector('#search');

const API_KEY = 'TFbA9Tcoe4RyKaeFZoZxx2QweATyMsnb';
const API_TRENDING_GIFS = "https://api.giphy.com/v1/gifs/trending?api_key=TFbA9Tcoe4RyKaeFZoZxx2QweATyMsnb&limit=25&rating=g";
const API_SEARCH_GIFS = "https://api.giphy.com/v1/gifs/search?api_key=TFbA9Tcoe4RyKaeFZoZxx2QweATyMsnb&q=";

getGif(API_TRENDING_GIFS);

async function getGif(url) {
   const gifsResponse = await fetch(url);
   const gifsData = await gifsResponse.json();

   showGifs(gifsData);
}

function showGifs(gifData) {

   //очищаем гифки
   gifsContainer.innerHTML = '';

   gifData.data.forEach((gif) => {
      const gifItem = document.createElement('div');
      gifItem.classList.add('main__gif');
      gifItem.innerHTML = `
      <img class="main__gif-img" src="${gif.images.original.url}" alt="${gif.title}">
      `;
      gifsContainer.appendChild(gifItem);
   })
}

form.addEventListener('submit', (e) => {
   e.preventDefault();

   const apiSearchUrl = `${API_SEARCH_GIFS}${searchInput.value}`;
   if (searchInput.value) {
      getGif(apiSearchUrl);

      searchInput.value = '';
   }

})
