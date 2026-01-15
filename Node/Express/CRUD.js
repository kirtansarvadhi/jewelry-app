const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/");

const UserSchema = new mongoose.Schema({
  userId: Number, 
  name: String,
  emailid: String,
  mobilenumber: String,
  age: Number,
});

const User = mongoose.model("User", UserSchema);

app.post("/users", async (req, res) => {
  const user = new User({
    userId: req.body.userId,
    name: req.body.name,
    emailid: req.body.emailid,
    mobilenumber: req.body.mobilenumber,
    age: req.body.age,
  });

  await user.save();
  res.json(user);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get("/users/:id", async (req, res) => {
  const user = await User.findOne({ userId: req.params.id });
  res.json(user);
});

app.put("/users/:id", async (req, res) => {
  await User.findOneAndUpdate(
    { userId: req.params.id },
    {
      name: req.body.name,
      emailid: req.body.emailid,
      mobilenumber: req.body.mobilenumber,
      age: req.body.age,
    }
  );
  res.send("User Updated");
});

app.delete("/users/:id", async (req, res) => {
  await User.findOneAndDelete({ userId: req.params.id });
  res.send("User Deleted");
});

app.listen(5005, () => {
  console.log("http://Localhost:5005");
});