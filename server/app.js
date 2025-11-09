import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Routes
import gameRoutes from "./routes/game.js";
import playerRoutes from "./routes/player.js";
import playsetRoutes from "./routes/playset.js";
import charactersRoutes from "./routes/characters.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ⚡ Définition de l'app
const app = express();

app.use(cors());
app.use(express.json());

// Front
app.use(express.static(path.join(__dirname, "../client")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

// Routes API
app.use("/api/game", gameRoutes);
app.use("/api/player", playerRoutes);
app.use("/api/playset", playsetRoutes);
app.use("/api/characters", charactersRoutes); // <-- ici ça fonctionne maintenant

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));

