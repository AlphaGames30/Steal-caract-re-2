im// server/routes/playset.js
import express from "express";
import { createPlayset } from "../services/playset.js";

const router = express.Router();

// Crée un playset vide avec 8 bases x 12 slots
let playset = createPlayset();

// Route GET pour récupérer le playset
router.get("/", (req, res) => {
  res.json(playset);
});

export default router;
