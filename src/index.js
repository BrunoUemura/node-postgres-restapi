const express = require("express");
const app = express();

const PORT = 3333;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(require("./routes/index"));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
