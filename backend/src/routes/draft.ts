import { Router } from "express";
import {
  getDraftState,
  getCurrentParticipant,
  pickPlayer,
  moveToNextTurn,
  resetDraftGame,
} from "../logic/draftLogic";

const router = Router();

router.get("/state", (_req, res) => res.json(getDraftState()));
router.get("/current", (_req, res) => res.json(getCurrentParticipant()));
router.get("/is-available/:playerId", (req, res) => {
  const { playerId } = req.params;
  const isAvailable = !getDraftState().selectedPlayerIds.has(playerId);
  res.json({ playerId, available: isAvailable });
});

router.post("/pick", (req, res) => {
  const { playerId } = req.body || {};
  const result = pickPlayer(playerId);
  if (!result.success) return res.status(400).json(result);
  moveToNextTurn();
  return res.json({ ok: true, message: result.message, state: getDraftState() });
});

// who's turn is it?
router.get("/turn", (_req, res) => {
  try {
    const participant = getCurrentParticipant();
    res.json({ participant });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});


// dev-only reset
router.post("/reset", (req, res) => {
  const { participants } = req.body || {};
  if (!Array.isArray(participants) || participants.length === 0) {
    return res.status(400).json({ ok: false, message: "participants array required" });
  }
  resetDraftGame(participants);
  return res.json({ ok: true, state: getDraftState() });
});

export default router;
