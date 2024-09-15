import axios from "axios";

const axiosProtected = axios.create({
  baseURL: import.meta.env.VITE_Base_URL,
});

const useAxiosProtected = () => {
  return axiosProtected;
};

export default useAxiosProtected;
