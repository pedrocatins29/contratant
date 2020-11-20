import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
  host: process.env.HOST,
});

export default db;
