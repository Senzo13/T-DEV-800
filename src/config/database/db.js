import mongoose from "mongoose";

function initDbConnect() {
  try {
    mongoose.set("strictQuery", false);
    mongoose
      .connect("mongodb://127.0.0.1:27017/ARDUNO_DB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDB connected"));
  } catch (error) {
    console.log("MongoDB connection error");
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

export default initDbConnect;
