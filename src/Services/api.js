import axios from "axios";
const API_KEY = "12355de9ae36d576f407c0d316008e50";
const BASE_URL = "https://api.themoviedb.org/3/";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: API_KEY, language: "en-US" };

export const GetTrendingFilms = async () => {
  return await axios.get(`/trending/movie/day`);
};

export const FetchGenres = async () => {
  return await axios.get(`/genre/movie/list`);
};

export const GetFilmByID = async (id) => {
  return await axios.get(`/movie/${id}`);
};

export const GetActorsByFilmId = async (id) => {
  return await axios.get(`/movie/${id}/credits`);
};

export const GetReviewsByFilmId = async (id) => {
  return await axios.get(`/movie/${id}/reviews`, {
    params: {
      page: 1,
    },
  });
};

export const SearchFilmByName = async (query) => {
  return await axios.get(`/search/movie`, {
    params: {
      query,
      page: 1,
      include_adult: false,
    },
  });
};
