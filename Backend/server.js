import mongooseConnection from "./DB/index.js";
import app from "./app.js";

const initializeServer = async () => {
  await mongooseConnection();
  const server = app.listen(port, err => {
    console.log(`http://localhost:${port}`);
    if (err) {
      console.log(`Error Starting Application Server due to: ${err}`);
    }
  });
};

initializeServer.server();

process.on("uncaughtException", err => {
  console.log("UNCAUGHT EXCEPTION!! SHUTTING DOWN...");
  console.log(err.name, err.message);
  process.exit(1);
});

process.on("unhandledRejection", err => {
  console.log("UNHANDLED REJECTION!! SHUTTING DOWN...");
  console.log(err.name, err.message);
  initializeServer.server.close(() => {
    process.exit(1);
  });
});
