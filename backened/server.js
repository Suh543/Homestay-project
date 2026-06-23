require("dotenv").config();

const express = require("express");
const cors = require("cors");

const homestayRoutes = require("./routes/homestayRoutes");

const app = express();



app.use(cors());
app.use(express.json());

app.use("/api/homestays", homestayRoutes);


app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});