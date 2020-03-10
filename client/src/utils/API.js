import axios from "axios";

const BASEURL = "https://api.worldweatheronline.com/premium/v1/ski.ashx";
const APIKEY = "?api_key=9b9b38a8caa54847ab201942200403&q=47.12,13.13&format=json";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
