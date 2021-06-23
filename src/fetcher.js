import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_ACCESS_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8"
  }
});

const fetcher = (url) => axiosClient.get(url).then((res) => res.data);

export default fetcher;
