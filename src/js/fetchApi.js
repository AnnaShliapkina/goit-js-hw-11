import axios from 'axios';
export { fetchImages };

// searchQueryImage = '';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '28462195-e21a9acc0b582db9a2dca3b99';

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}

// import axios from 'axios';

// export default class PictureApi {
//   constructor() {
//     this.searchQueryPicture = '';
//     this.page = 1;
//     this.perPage = 40;
//   }

//   async fetchImages() {
//     const BASE_URL = 'https://pixabay.com/api/';
//     const MY_API_KEY = '28462195-e21a9acc0b582db9a2dca3b99';

//     const response = await // return
//     axios
//       .get(
//         `${BASE_URL}?key=${MY_API_KEY}&q=${this.searchQueryPicture}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`
//       )

//       .then(response => {
//         this.incrementPage();
//         return response.data;
//       });
//     return await response;
//   }
//   get query() {
//     return this.searchQueryPicture;
//   }
//   set query(newQuery) {
//     this.searchQueryPicture = newQuery;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   incrementPage() {
//     this.page += 1;
//   }
// }
