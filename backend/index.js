const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/predict", (req, res) => {
const patient = req.body;
console.log("Received patient data:", patient);

const predictions = [
{
diseaseCode: "E11",
diseaseName: "Type 2 diabetes",
probability: 0.32
},
{
diseaseCode: "I10",
diseaseName: "Hypertension",
probability: 0.21
}
];

res.json({ predictions });
});

app.listen(PORT, () => {
console.log("Backend listening on http://localhost:"+PORT)});
