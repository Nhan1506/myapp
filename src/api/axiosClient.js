import axios from 'axios';

const axiosClient = axios.create({
    baseURL:'http://api.ezfrontend.com/',
    headers : {
        'Content-Type': 'application/json',
    }
})
//Interceptors
// axiosClient.interceptors.request.use(
//   (config) => {
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response.data
//   },
//   (error) => {
//     const { config, status, data } = error.response

//     const URLS_REQUEST = ['/auth/local/register', '/auth/local']

//     if (URLS_REQUEST.includes(config.url) && status === 400) {
//       const errorList = data.data || []
//       const firstError = errorList.length > 0 ? errorList[0] : {}
//       const messageList = firstError.messages || []
//       const firstMessage = messageList.length > 0 ? messageList[0] : {}
//       throw new Error(firstMessage.message)
//     }
//     console.log(error.response)
//     return Promise.reject(error)
//   }
//)
//Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
export default axiosClient;