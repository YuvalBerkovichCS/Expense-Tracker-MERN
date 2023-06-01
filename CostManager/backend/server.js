const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 3000;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

// app.use(express.json());

// app.get("getUsers", (req, res) => {
//   userModel.find({}, (err, result) => {
//     if (err) {
//       res.json(e);
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.post("createUser", async (req, res) => {
//   const user = req.body;
//   const newUser = new userModel(user);
//   await newUser.save();

//   res.json(user);
// });
