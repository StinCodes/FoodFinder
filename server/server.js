require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3006;

//Get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
  res.status(200).json({
    status: "Success",
    data: { restaurant: ["McDonalds", "Wendys"] },
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
