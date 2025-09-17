const reverseString = function(str) {

    let result="";

    const len = str.length;

    for(let i = len-1; i>=0 ; i--)
    {
        result+=str[i];
    }

    return result;

};

// Do not edit below this line
module.exports = reverseString;
