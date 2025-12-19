import { useState } from "react";

export default function PredictionForm() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError("");

    if (symptoms.trim().length < 3) {
      setError("Please enter more detailed symptoms.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/predict", {
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
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4">Disease Prediction</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter symptoms..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Analyzing..." : "Predict"}
            </button>
          </form>

          {error && <div className="mt-3 text-danger">{error}</div>}

          {result && (
            <div className="mt-4 p-3 border rounded bg-light">
              <strong>Predictions:</strong>
              <ul>
                {result.predictions.map((p, idx) => (
                  <li key={idx}>
                    {p.condition} — {(p.probability * 100).toFixed(1)}%
                  </li>
                ))}
              </ul>
              <small className="text-muted">{result.note}</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}




