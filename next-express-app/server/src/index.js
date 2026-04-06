import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

const port = process.env.PORT || 4000;

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/api/health", (req, res) => {
  console.log("Route called : /api/health");
  res.status(200).json({
    success: true,
    message: "Server health test successfull",
    health: 100,
  });
});

app.get("/api/message", (req, res) => {
  console.log("Route called : /api/message");
  res.status(200).json({
    success: true,
    message: "Message updated : Hii from the server!",
    data: {},
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "No such route exists in the server",
    error: "NOT FOUND",
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log("Server started successfull at port ", port);
});
