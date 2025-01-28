const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/api", (req, res) =>
  res.json({
    message: "Hello from the API",
  })
);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
