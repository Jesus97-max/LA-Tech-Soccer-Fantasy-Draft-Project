import express from "express";
import draftRouter from "./routes/draft";

const app = express();
app.use(express.json());

// Use the PORT Amplify gives us (fallback 3000 for local dev)
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

/* -------- Root + health -------- */
app.get("/", (_req, res) => {
  res.json({ ok: true, msg: "Express is alive on Amplify" });
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

/* -------- Mock auth (dev only) -------- */
app.post("/login", (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    return res.status(400).json({ errorMessage: "User name is required to log in." });
  }
  const token = `mock-authentication-token-for-${userName.toLowerCase()}`;
  res.json({ loginMessage: `Welcome, ${userName}! You are now logged in.`, authenticationToken: token });
});

app.post("/logout", (_req, res) => {
  res.json({ logoutMessage: "User has been logged out successfully." });
});

/* -------- Routes -------- */
app.use("/draft", draftRouter);

/* -------- Start server (once) -------- */
app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Backend running on port ${port}`);
});
