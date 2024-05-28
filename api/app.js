const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;

// Use the cors middleware
app.use(cors());

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book Review: The art of not giving a Fuck!",
    },
    {
      id: "2",
      title: "Book Review: Dumb money",
    },
    {
      id: "3",
      title: "Book Review: Alice in borderland",
    },
  ]);
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at port 4000`);
});
