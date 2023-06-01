const mongoose = require("mongoose");
const uri =
  process.env.MONGO_URI ||
  "mongodb+srv://yuvalberkovichcs:1234qwer@CostManagerDatabase.3r1tq3e.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// async function connectToMongoDB() {
//   try {
//     await mongoose.connect(uri);
//     console.log("Connected to MongoDB successfully");
//   } catch (error) {
//     console.error(error);
//   }
// }

// connectToMongoDB();

module.exports = connectDB;
