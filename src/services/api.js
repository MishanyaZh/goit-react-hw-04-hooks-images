import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.params = {
//   key: '22670626-c734a5ab3fb2edefe4011dc83',
//   image_type: 'photo'
// };

const getImagesByAxios = axios.create({
  baseURL: 'https://pixabay.com/api/',
  method: 'GET',
  params: {
    key: '22670626-c734a5ab3fb2edefe4011dc83',
    image_type: 'photo',
  },
});

export const fetchImages = async (imgValue, page) => {
  const {
    data: { hits },
  } = await getImagesByAxios(
    `?q=${imgValue}&page=${page}&orientation=horizontal&per_page=12`,
  );

  return hits.map(hit => ({
    id: hit.id,
    webImg: hit.webformatURL,
    largeImg: hit.largeImageURL,
  }));
};
