import express from "express";
import { createPlayset } from "../services/playset.js";

const router = express.Router();
let playset = createPlayset();

router.get("/", (req, res) => {
  res.json(playset);
});

router.post("/add", (req, res) => {
  const { baseIndex, slotIndex, characterId } = req.body;
  if (!playset[baseIndex][slotIndex]) {
    playset[baseIndex][slotIndex] = characterId;
    return res.json({ success: true, playset });
  }
  res.json({ success: false, message: "Slot déjà occupé" });
});

export default router;
