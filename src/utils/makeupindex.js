const makeupArr = [];

class Makeup {
    constructor(brand, product = "not defined") {
        this.brand = brand;
        this.product = product;
    }
    add() {
        makeupArr.push(this);
    }
};

module.exports = { Makeup, makeupArr }