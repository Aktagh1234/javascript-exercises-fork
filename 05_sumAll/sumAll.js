const sumAll = function(num1, num2) {
    let error="ERROR";
    let finalSum = 0;
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return error;
    }
    else if (typeof num1 === "object" || typeof num2 === "object") {
        return error;
    }
    else if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return error;
    }
    else if (start>=0 && end>=0) {
        for (let i = start; i <= end; i++) {
            finalSum += i;
        }
    }
    else {
        return error;
    }
    return finalSum; 

};

// Do not edit below this line
module.exports = sumAll;
