import axios from "axios";

const axiosSecure=axios.create({
    baseURL:'http://localhost:3000'
})
const useAxiosSecure = () => {
    // interceptors request
    axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('access-token');
        console.log('stoped by interceptor',token);
        config.headers.authorization=`Bearer ${token}`;
        return config;
    }), function(error){
        return Promise.reject(error);
    }

    // Add a response interceptor
    axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    const status=error.response.status;
    console.log('Status error in the interceptor',status);
    return Promise.reject(error);
  });
    return axiosSecure;
};

export default useAxiosSecure;