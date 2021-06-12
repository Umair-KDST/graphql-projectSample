const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://umair:123@cluster0.2atov.mongodb.net/graphql?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Fail");
    process.exit(1);
  }
};

module.exports = connectDB;
