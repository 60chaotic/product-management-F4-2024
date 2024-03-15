const express = require("express");
const routesClient = require("./routes/client/index.route");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static("public"));

app.set("views", "./views")
app.set("view engine", "pug")

// routesClient
routesClient.routesClient(app);
// End routesClient

app.listen(port, () => {
    console.log("App is running on " + port);
})