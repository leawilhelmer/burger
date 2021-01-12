const orm = require("../config/orm");

const burger = {
    selectAll(burgerCallback) {
        orm.selectAll("burgers", (res) => burgerCallback(res));
    },

    insertOne(vals, burgerCallback) {
        orm.insertOne("burgers", vals, (res) => burgerCallback(res));
    }
}

module.exports = burger;