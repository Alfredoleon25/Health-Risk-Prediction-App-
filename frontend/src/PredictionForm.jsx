import { useState } from "react";

export default function PredictionForm() {
  const [symptoms, setSymptoms] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Server error");
      } else {
        setResult(data);
      }
    } catch (err) {
      setError("Unable to connect to the server.");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto p-6 rounded-xl shadow bg-white">
      <h1 className="text-2xl font-bold mb-3">Health Insight Prediction</h1>

      <p className="text-sm text-gray-600 mb-4">
        This tool provides informational predictions only — not a diagnosis.
      </p>

      <form onSubmit={handleSubmit}>
        <label className="font-medium">Enter Symptoms</label>
        <textarea
          className="w-full p-3 border rounded mt-1"
          rows="4"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
          placeholder="Describe symptoms here..."
        ></textarea>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Predict"}
        </button>
      </form>

      {error && (
        <p className="mt-4 text-red-500 font-medium">{error}</p>
      )}

      {result && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="font-semibold text-lg mb-2">Prediction Results</h2>

          {result.predictions.map((p, idx) => (
            <p key={idx}>
              {p.condition}: <strong>{(p.probability * 100).toFixed(1)}%</strong>
            </p>
          ))}

          <p className="text-xs text-gray-500 mt-3">{result.note}</p>
        </div>
      )}
    </div>
  );
}

