    const palindromes = function (str) {
        // Remove non-alphanumeric characters and convert to lowercase
        const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        // Check if the cleaned string is equal to its reverse
        return cleanedStr === cleanedStr.split('').reverse().join('');
    };

// Do not edit below this line
module.exports = palindromes;
