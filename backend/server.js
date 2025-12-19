const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
function runDelphiModel(symptoms) {
  return {
    predictions: [
      { condition: "Flu", probability: 0.46 },
      { condition: "Common Cold", probability: 0.31 },
      { condition: "Migraine", probability: 0.11 }
    ],
    note: "This is not a diagnosis. For medical concerns, consult a healthcare professional."
  };
}

// POST /predict — receives symptoms from the frontend
app.post("/predict", (req, res) => {
  console.log("POST /predict called");
  console.log("Request body:", req.body);

  const { symptoms } = req.body;

  if (!symptoms || symptoms.length < 3) {
    console.log("Error: Symptoms missing or too short");
    return res.status(400).json({ error: "Symptoms are required." });
  }

  const result = runDelphiModel(symptoms);
  console.log("Prediction result:", result);

  res.json(result);
});

// GET / — simple check if backend is running
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



