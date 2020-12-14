// canning out orm file
var orm = require("./config/orm.js");

// Select the whole table  .
orm.selectAll("burgers");

// Insert a new hamburger.
orm.selectWhere("burgers", "hamburger_name");

// Update devoured status based on the burger_name.
orm.findWhoHasMost("burgers", "devoured", "burger_name");

module.exports = burger.js;