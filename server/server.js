require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const db = require("./db");

const port = process.env.PORT || 3006;

app.use(express.json());

//Get all restaurants event handler
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants");
    console.log(results);
    res.status(200).json({
      status: "Success",
      data: { restaurant: ["McDonalds", "Wendys"] },
    });
  } catch (error) {
    console.error(error);
  }
});

//Get one restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "Success",
    data: { restaurant: "McDonalds" },
  });
});

//Create a restaurant - post request
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "Success",
    data: { restaurant: "McDonalds" },
  });
});

//Update a restaurant - put request
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "Success",
    data: { restaurant: "McDonalds" },
  });
});

//Delete a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "Success",
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
