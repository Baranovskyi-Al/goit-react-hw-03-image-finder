import axios from 'axios';

export async function fetchImages(query, page) {
  const BASE_URL = `https://pixabay.com/api/`;
  const KEY = `25741965-3317c7c17dbaed9fd9692b5d9`;
  const options = `image_type=photo&orientation=horizontal&per_page=12`;

  try {
    const resolve = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${query}&${options}&page=${page}`
    );
    return resolve.data;
  } catch (error) {
    console.log(error);
  }
}
