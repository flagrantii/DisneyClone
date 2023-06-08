import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key="133f9f12c55920160916549bf09703ab"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=133f9f12c55920160916549bf09703ab';
//https://api.themoviedb.org/3/trending/all/day?api_key=133f9f12c55920160916549bf09703ab
const getTrendingVideos=axios.get(movieBaseUrl+ "/trending/all/day?api_key="+api_key);
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}