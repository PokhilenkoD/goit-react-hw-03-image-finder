import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (searchValue, page) => {
  const response = await axios.get(
    `?q=${searchValue}&page=${page}&key=31844347-16adccdcc2872ee3a7bce49dd&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
