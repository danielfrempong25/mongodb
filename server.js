const mongoose = require("mongoose");

const app = require("./app");

async function connectToDatabase() {
  try {
    const DB =
      "mongodb+srv://danielfrempong25:phuOo5zNo2wHklju@cluster0.2ffvdqk.mongodb.net/?retryWrites=true&w=majority";
    const con = await mongoose.connect(DB);
    // LOG
    // console.log(con.connections);
    console.log("Connected to the database!");
  } catch (error) {
    console.log("Database Connection error", error);
  }
}
connectToDatabase();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}...`);
});
