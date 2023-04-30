import initDbConnect from "./src/config/database/db";

/**
 *
 * FR : Serveur Express pour l'application ARDUNO - T-DEV-800
 * ENG: Express server for the ARDUNO application - T-DEV-800
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @function initDbConnect - Initialize the connection to the database.
 *
 **/

dotenv.config();

const APP = express();
const SERVER = http.createServer(APP);
const HOSTNAME = "localhost";
const PORT = 4080;

/** @function initDbConnect - Initialize the connection to the database. */
initDbConnect();

APP.use(
  cors({
    origin: ["http://127.0.0.1:3080", "http://localhost:3080"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

APP.use(express.json());
APP.use(express.urlencoded({ extended: true }));

SERVER.listen(PORT, () => {
  console.log(`Server listening on http://${HOSTNAME}:${PORT}`);
});
