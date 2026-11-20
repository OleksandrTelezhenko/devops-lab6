const _ = require('lodash');

function capitalizeText(text) {
  return _.capitalize(text);
}

module.exports = capitalizeText;