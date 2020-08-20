const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

// https://expressjs.com/en/api.html#express.urlencoded

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
require("./routes/api")(app);
require("./routes/html")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
