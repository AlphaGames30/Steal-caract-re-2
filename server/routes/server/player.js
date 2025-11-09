import express from "express";
const router = express.Router();

// Exemple de route de test
router.get("/", (req, res) => {
  res.json({ message: "Route /api/player OK ✅" });
});

export default router;
