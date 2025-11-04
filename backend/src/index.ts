import express from "express";
import draftRouter from "./routes/draft";


const app = express();
app.use(express.json());

// Use the PORT Amplify gives us (fallback 3000 for local dev)
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// Basic root + health routes
app.get("/", (_req, res) => {
  res.json({ ok: true, msg: "Express is alive on Amplify" });
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});


// Mock Login 

app.post("/login", (request, response) => {
  const { userName } = request.body;

  if (!userName) {
    return response
      .status(400)
      .json({ errorMessage: "User name is required to log in." });
  }

  const generatedMockToken = `mock-authentication-token-for-${userName.toLowerCase()}`;

  response.json({
    loginMessage: `Welcome, ${userName}! You are now logged in.`,
    authenticationToken: generatedMockToken,
  });
});

//Mock Logout

app.post("/logout", (request, response) => {
  response.json({
    logoutMessage: "User has been logged out successfully.",
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Backend running on port ${port}`);
});

// Draft Routes
app.use("/draft", draftRouter);

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));

// Draft Routes
app.use("/draft", draftRouter);

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));

//Test in PowerShell

// login 

/* 
   Invoke-RestMethod -Method Post http://localhost:3000/login `
    -ContentType "application/json" `
    -Body '{"userName":"User"}'

// logout 

   Invoke-RestMethod -Method Post http://localhost:3000/logout

*/