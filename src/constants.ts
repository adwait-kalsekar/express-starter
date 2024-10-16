import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;
const CORS_ORIGIN = process.env.CORS_ORIGIN;
const MONGODB_URL = process.env.MONGODB_URL;

export { PORT, CORS_ORIGIN, MONGODB_URL };
