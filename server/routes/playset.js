// server/routes/playset.js
import express from "express";
import { createPlayset } from "../services/playset.js";

const router = express.Router();
let playset = createPlayset();

router.get("/", (req, res) => {
  res.json(playset);
});

export default router;
