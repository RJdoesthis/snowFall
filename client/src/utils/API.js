import axios from "axios";

const q = "New+York";
const APIKEY = "9b9b38a8caa54847ab201942200403";
const BASEURL = "http://api.worldweatheronline.com/premium/v1/ski.ashx?q=" + q + "&key=" + APIKEY + "&format=json";

export default {
  search: function (query) {
    return axios.get(BASEURL)
      .then(function (res) {
        console.log(res.data);
      });
  }
};


// const axios = require("axios");


// const q = "New+York";
// const APIKEY = "9b9b38a8caa54847ab201942200403";
// const BASEURL = "http://api.worldweatheronline.com/premium/v1/ski.ashx?q=" + q + "&key=" + APIKEY + "&format=json";



// // Export an object with a "search" method that searches the weather API for the passed query

// axios.get(BASEURL)
//   .then(function (res) {
//     console.log(res.data);
//   });
