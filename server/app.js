import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import gameRoutes from "./routes/game.js";
import playerRoutes from "./routes/player.js";
import playsetRoutes from "./routes/playset.js";
import charactersRoutes from "./routes/characters.js";

app.use("/api/characters", charactersRoutes);

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); // ⬅️ App doit être créé avant toute utilisation

async function loadCharacters() {
  const res = await fetch("/api/characters");
  const characters = await res.json();
  console.log(characters); // tu peux les afficher dans le playset
}
loadCharacters();

app.use(cors());
app.use(express.json());

app.use("/api/playset", playsetRoutes);

// Servir le front
app.use(express.static(path.join(__dirname, "../client")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

// Routes API
app.use("/api/game", gameRoutes);
app.use("/api/player", playerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));

