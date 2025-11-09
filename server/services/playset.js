// server/services/playset.js
export const createPlayset = () => {
  return Array.from({ length: 8 }, () => Array(12).fill(null));
};
