import axios from 'axios'
import { CAT_API_KEY,  CAT_API_BREED_URL } from "utils/constants";

export const fetchAllBreeds = () => {
  axios.defaults.headers.common['x-api-key'] = CAT_API_KEY;

  return axios.get(CAT_API_BREED_URL)
    .then((res) => {
      return res;
    })
    .catch(err => err)
}
export const fetchFromCatAPI = (url:string, page: number, currentBreed: string | null) => {
  axios.defaults.headers.common['x-api-key'] = CAT_API_KEY;

  const params = {
    limit: 20,
    breed_ids: currentBreed,
    page
  };

  return axios.get(url, { params })
    .then((res) => {
      return res;
    })
    .catch(err => err)
};


