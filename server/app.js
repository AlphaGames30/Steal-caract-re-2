import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import gameRoutes from "./routes/game.js";
import playerRoutes from "./routes/player.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, "../client")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/game", gameRoutes);
app.use("/api/player", playerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));
