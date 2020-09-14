const isEmpty = input => {
  if (input === undefined || input === "") {
    return true;
  }
  if (input.replace(/\s/g, "").length) {
    return false;
  }
  return true;
};

/**
 * empty helper method
 * @param {string, integer} input
 * @returns {Boolean} True or False
 */
const empty = input => {
  if (input === undefined || input === "") {
    return true;
  }
};


module.exports ={ isEmpty, empty };
