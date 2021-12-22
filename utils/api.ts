import axios from 'axios'
import { CAT_API_KEY, CAT_API_BREED_URL } from "utils/constants";
/**
 *  This API call gets the full list of available breeds
 */
export const fetchAllBreeds = () => {
  axios.defaults.headers.common['x-api-key'] = CAT_API_KEY;

  return axios.get(CAT_API_BREED_URL)
    .then((res) => {
      return res;
    })
    .catch(err => err)
}

/**
 *  This API call gets a breed list or a list of images based on breed and takes
 *  in query params url, page number, current breed id, limit
 */
export const fetchFromCatAPI = (url: string, page: number, currentBreedId: string | null, limit: number) => {
  axios.defaults.headers.common['x-api-key'] = CAT_API_KEY;

  const params = {
    limit,
    breed_ids: currentBreedId,
    page
  };

  return axios.get(url, { params })
    .then((res) => {
      return res;
    })
    .catch(err => err)
};


