import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '22670626-c734a5ab3fb2edefe4011dc83';

export const fetchImages = async (imgValue, page) => {
  const { data } = await axios.get(
    `?q=${imgValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return data.hits.map(hit => ({
    id: hit.id,
    webImg: hit.webformatURL,
    largeImg: hit.largeImageURL,
  }));
};
