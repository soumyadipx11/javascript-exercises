const removeFromArray = function(str, ...values) {

    const result = str.filter(el => !values.includes(el));

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
