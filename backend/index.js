import express from "express";
import connectDB from "./utils/connectDb.js";
import userApi from "./routes/user.route.js";
import path from "path";

import cors from "cors";
import { createServer } from "http";
import { WebSocketServer } from "ws";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOption = {
  origin: ["http://localhost:5173"],
  credentials: true,
};
app.use(cors(corsOption));

// Routes
app.get("/", (req, res) => {
  res.send("this is backend part ");
});

app.use("/user", userApi);

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// HTTP + WebSocket Server
const server = createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected via WebSocket");

  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Echo from server: ${message}`);
  });

  ws.on("close", () => {
    console.log("WebSocket client disconnected");
  });

  ws.send("Hello from WebSocket server!");
});

// Start server
server.listen(5000, () => {
  connectDB();
  console.log("Server is listening on port 5000");
});
