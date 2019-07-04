const axios = require('axios');
const _ = require('lodash');

function getAnswer(query) {
  return axios
    .get(
      `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${query}`
    )
    .then(response => response.data.query.pages)
    .then(queryBlob => queryBlob[_.keys(queryBlob)[0]].extract);
}

module.exports = { getAnswer };
