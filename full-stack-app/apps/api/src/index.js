import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ allowedOrigins: "*" }));
app.use(express.json());

app.get("/api/health", (req, res) => {
  console.log("- /api/health called ");
  res.status(200).json({
    success: true,
    message: "Server health check successfull",
    health: 100,
  });
});
app.get("/api/message", (req, res) => {
  console.log("-/api/message called");
  res.status(200).json({
    success: true,
    message: "Hello from the server",
    data: {},
  });
});
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "page not found",
    error: "NOT FOUND",
  });
});

app.listen(5000, "0.0.0.0", () => {
  console.log("server started successfully");
});
