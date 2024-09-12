import axios from "axios";

const axiosProtected = axios.create({
  baseURL: <import className="meta env"></import>.VITE_Base_URL,
});

const useAxiosProtected = () => {
  return axiosProtected;
};

export default useAxiosProtected;
