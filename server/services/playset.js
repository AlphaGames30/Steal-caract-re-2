// server/services/playset.js
export const createPlayset = () => {
  return Array.from({ length: 8 }, () => Array(12).fill(null));
};

// server/routes/playset.js
import express from "express";
import { createPlayset } from "../services/playset.js";

const router = express.Router();
let playset = createPlayset();

router.get("/", (req, res) => {
  res.json(playset);
});

export default router;
