const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

//Set public directory for the app
app.use(express.static('public'));

//JSON parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Define handlebars
const exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Require routes
const routes = require("./controllers/burger_controller");
app.use(routes);

app.listen(PORT, () => {
    console.log("Server is listening on PORT" + PORT);
});