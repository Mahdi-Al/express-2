const express = require("express");
const logger = require("./src/middlewares/logger");
const dotenv = require("dotenv");
dotenv.config({ ignore: true });

const cors = require("cors");
const productsRouter = require("./src/routes/products.route");
const app = express();

app.use(logger, express.json(), express.urlencoded({ extended: true }, cors()));
const port = process.env.PORT || 4000;

app.use("/product", productsRouter);

app.listen(port, () => {
  console.log(`server is ran on port ${port}`);
});
