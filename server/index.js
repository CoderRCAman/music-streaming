const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const app = express();
const PORT = 4000;

mongoose
  .connect(
    "mongodb+srv://user:1234@cluster0.zffcukt.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("====== Database Connected! ======="))
  .catch((err) => console.log(err));
app.use(express.static("uploads"));
app.use(morgan("tiny"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.static("files"));
app.use("/api/", userRoutes);

app.listen(PORT, () => console.log("Server started at PORT", PORT));
