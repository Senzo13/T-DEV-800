import initDbConnect from "./src/config/database/db.js";
import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import API_ROUTES from "./src/routes/api.js";

const PAGE = "PAGE - ./SERVER.JS";

/**
 *
 * FR : Serveur Express pour l'application ARDUNO - T-DEV-811
 * ENG: Express server for the ARDUNO application - T-DEV-811
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @function initDbConnect - Initialize the connection to the database.
 *
 **/

dotenv.config();

const APP = express();
const SERVER = http.createServer(APP);
const HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const PORT = process.env.SERVER_PORT || 3080;

/** @function initDbConnect - INITIALIZE THE CONNECTION TO THE MONGO DATABASE. */
initDbConnect();
/***/

APP.use(
  cors({
    origin: ["http://127.0.0.1", "http://localhost"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

APP.use(express.json());
APP.use(express.urlencoded({ extended: true }));
APP.use("/api", API_ROUTES);

SERVER.listen(PORT, () => {
  console.log("\x1b[1m%s\x1b[0m", `*** ARDUINO API SERVER ***`);
  console.log(`${PAGE} > listening on http://${HOSTNAME}:${PORT} ✔️`);
});
