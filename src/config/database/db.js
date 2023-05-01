import mongoose from "mongoose";

const PAGE = "PAGE - CONFIG/DB.JS";

/**
 * Connect to MongoDB.
 * @function initDbConnect
 * @returns {void}
 * @throws {error} - MongoDB connection error.
 * @description Connect to MongoDB.
 * @memberof module:config/db
 *
 * @see {@link https://mongoosejs.com/docs/connections.html#connections Mongoose connections}
 *
 */

export default function initDbConnect() {
  try {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(
        `mongodb://${process.env.DATABASE_HOSTNAME}:${process.env.DATABASE_PORT}/ARDUNO_DB`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => console.log(`${PAGE} > MongoDB connected ✔️`));
  } catch (error) {
    console.log("MongoDB connection error");
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
