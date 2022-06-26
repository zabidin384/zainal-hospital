import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://warm-beach-62974.herokuapp.com/",
});
