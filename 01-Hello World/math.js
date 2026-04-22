function add(a, b){
    return a + b;
}

// another function for substraction

function sub(a, b){
    return a - b;
}

module.exports = add;
// export the sub function as well
module.exports = sub;

//or we can export both functions as an object
module.exports = {
    add: add,
    sub: sub
};
//or we can use arrow functions and export them directly
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a- b;