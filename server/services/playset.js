// server/services/playset.js
export const createPlayset = () => {
  const BASES = 8;
  const SLOTS = 12;
  // Retourne un tableau 8x12 rempli de null
  return Array.from({ length: BASES }, () => Array(SLOTS).fill(null));
};
