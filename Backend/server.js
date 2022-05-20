import mongooseConnection from "./DB/index.js";
import app from "./app.js";
import dotnet from "dotenv";

dotnet.config();
const PORT = process.env.PORT || 5000;

process.on("uncaughtException", err => {
  console.log("UNCAUGHT EXCEPTION!! SHUTTING DOWN...");
  console.log(err.name, err.message);
  process.exit(1);
});

const server = app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

process.on("unhandledRejection", err => {
  console.log("UNHANDLED REJECTION!! SHUTTING DOWN...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

mongooseConnection();