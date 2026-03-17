import React, { useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";

// --- Currency metadata ---
const currencyMeta = {
  USD: { name: "US Dollar", symbol: "$" },
  EUR: { name: "Euro", symbol: "€" },
  GBP: { name: "British Pound", symbol: "£" },
  JPY: { name: "Japanese Yen", symbol: "¥" },
  AUD: { name: "Australian Dollar", symbol: "A$" },
  CAD: { name: "Canadian Dollar", symbol: "C$" },
  CHF: { name: "Swiss Franc", symbol: "CHF" },
  CNY: { name: "Chinese Yuan", symbol: "¥" },
  INR: { name: "Indian Rupee", symbol: "₹" },
  PKR: { name: "Pakistani Rupee", symbol: "₨" },
};

const currencies = Object.keys(currencyMeta);

// --- Currency Cards ---
const CurrencyCard = ({ currency, value, baseCurrency, basePrice, isLowest }) => {
  const meta = currencyMeta[currency];
  const rate = value / basePrice;

  return (
    <div className="result-item">
      <div className="result-info">
        <div className="result-name">
          {meta.name} ({meta.symbol}) {isLowest && "⭐ Best Price"}
        </div>
        <div className="result-rate">
          1 {baseCurrency} = {rate.toFixed(4)} {currency}
        </div>
      </div>
      <div className="result-value">
        <div className="result-amount">
          {value.toLocaleString(undefined, {
            minimumFractionDigits: currency === "JPY" ? 0 : 2,
            maximumFractionDigits: currency === "JPY" ? 0 : 2,
          })}
        </div>
        <div className="result-currency">{currency}</div>
      </div>
    </div>
  );
};

// --- Main App ---
export default function App() {
  const [price, setPrice] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCompare = async () => {
    if (!price) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://localhost:5000/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: Number(price), base_currency: baseCurrency }),
      });

      if (!response.ok) throw new Error("Failed to fetch conversion data");

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ---design---
      const styles = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif; background: linear-gradient(to bottom right, rgb(15,23,42), rgb(30,41,59)); min-height: 100vh; }
    .grid-bg { position: absolute; inset: 0; background-image:
      linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
      background-size: 4rem 4rem; opacity: 0.1; pointer-events: none;
    }
    .blob { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.2; animation: pulse 4s ease-in-out infinite; }
    .blob1 { width: 24rem; height: 24rem; background: rgb(59,130,246); top: 5rem; left: 2.5rem; }
    .blob2 { width: 24rem; height: 24rem; background: rgb(168,85,247); top: 10rem; right: 2.5rem; }
    @keyframes pulse { 0%,100% { opacity:0.2 } 50% { opacity:0.3 } }
    .container { position: relative; min-height: 100vh; display:flex; flex-direction: column; align-items:center; justify-content:center; padding:3rem 1rem; z-index:10; }
    .content { width: 100%; max-width:48rem; }
    .header { text-align:center; margin-bottom:3rem; }
    .badge { display:inline-flex; align-items:center; gap:0.5rem; padding:0.5rem 1rem; margin-bottom:1rem; border-radius:9999px; background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.2); }
    .badge-text { font-size:0.875rem; font-weight:500; color: rgb(147,197,253); }
    h1 { font-size: clamp(2rem,8vw,3.75rem); font-weight:700; margin-bottom:1rem; color:white; line-height:1.2; }
    .gradient-text { background: linear-gradient(to right, rgb(96,165,250), rgb(168,85,247)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
    .subtitle { font-size:1.125rem; color:rgb(203,213,225); max-width:28rem; margin:0 auto; }
    .card { backdrop-filter: blur(16px); background: rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:1.5rem; padding:2.5rem; box-shadow:0 20px 25px -5px rgba(0,0,0,0.1); }
    .form-group { display:grid; grid-template-columns:1fr; gap:1.5rem; margin-bottom:2rem; }
    @media (min-width:640px) { .form-group { grid-template-columns: 1fr 1fr; } }
    .form-field { display:flex; flex-direction:column; gap:0.75rem; }
    label { font-size:0.875rem; font-weight:600; color:rgb(226,232,240); }
    input, select { padding:0.75rem 1rem; background: rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:0.5rem; color:white; font-size:1rem; transition: all 0.2s; font-family:inherit; }
    input::placeholder { color: rgb(148,163,184); }
    input:focus, select:focus { outline:none; border-color: rgb(96,165,250); box-shadow:0 0 0 2px rgba(96,165,250,0.2); }
    select {
      appearance: none;
      cursor: pointer;
      background: rgba(30,41,59,0.9);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 0.5rem;
      padding: 0.75rem 2.5rem 0.75rem 1rem;
      color: white;
      font-size: 1rem;
      font-family: inherit;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a1a5ab' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
    }
    option { background: rgba(15,23,42,1); color: white; }
    button { width:100%; padding:0.75rem 1.5rem; background: linear-gradient(to right, rgb(59,130,246), rgb(147,51,234)); color:white; font-weight:600; border:none; border-radius:0.5rem; cursor:pointer; transition: all 0.2s; display:flex; align-items:center; justify-content:center; gap:0.5rem; font-size:1rem; }
    button:hover { background: linear-gradient(to right, rgb(37,99,235), rgb(126,34,206)); transform: scale(1.05); }
    .results-section { margin-top:2.5rem; animation:fadeIn 0.5s ease-in; }
    @keyframes fadeIn { from {opacity:0;} to {opacity:1;} }
    .results-title { font-size:1.25rem; font-weight:700; color:white; margin-bottom:1.5rem; }
    .result-item { backdrop-filter: blur(16px); background: rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:0.75rem; padding:1.5rem; margin-bottom:1rem; display:flex; align-items:center; justify-content:space-between; gap:1rem; transition: all 0.2s; }
    .result-info { flex:1; }
    .result-name { font-weight:600; color:white; margin-bottom:0.25rem; }
    .result-rate { font-size:0.875rem; color: rgb(148,163,184); }
    .result-value { text-align:right; }
    .result-amount { font-size:1.5rem; font-weight:700; background: linear-gradient(to right, rgb(96,165,250), rgb(168,85,247)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
    .result-currency { font-size:0.875rem; color: rgb(148,163,184); }
    .results-footer { padding-top:1.5rem; border-top:1px solid rgba(255,255,255,0.1); margin-top:2rem; }
    .disclaimer { font-size:0.75rem; color: rgb(148,163,184); text-align:center; }
    `;


  return (
    <div>
      <style>{styles}</style>
      <div className="grid-bg" />
      <div className="blob blob1" />
      <div className="blob blob2" />

      <div className="container">
        <div className="content">
          <div className="header">
            {/* <div className="badge">
              <TrendingUp size={16} />
              <span className="badge-text">Real-time Currency Comparison</span>
            </div> */}
            <h1>
              Compare <span className="gradient-text">Global Currencies</span>
            </h1>
            <p className="subtitle">
              Instantly compare exchange rates across multiple currencies in real-time
            </p>
          </div>

          <div className="card">
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="amount">Amount</label>
                <input
                  id="amount"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter an amount here"
                />
              </div>

              <div className="form-field">
                <label htmlFor="currency">From Currency Type</label>
                <select
                  id="currency"
                  value={baseCurrency}
                  onChange={(e) => setBaseCurrency(e.target.value)}
                >
                  {currencies.map((c) => (
                    <option key={c} value={c}>
                      {c} - {currencyMeta[c].name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button onClick={handleCompare} disabled={loading || !price}>
              {loading ? "Comparing..." : "Compare Rates"}
              <ArrowRight size={20} />
            </button>
          </div>

          {error && <div className="text-red-600 mt-4">{error}</div>}

          {result ? (
            <div className="results-section">
              <h2 className="results-title">Exchange Rates</h2>
              {Object.entries(result.conversions)
                .sort(([a], [b]) => (a === result.lowest_currency ? -1 : b === result.lowest_currency ? 1 : a.localeCompare(b)))
                .map(([currency, value]) => (
                  <CurrencyCard
                    key={currency}
                    currency={currency}
                    value={value}
                    baseCurrency={baseCurrency}
                    basePrice={Number(price)}
                    isLowest={currency === result.lowest_currency}
                  />
                ))}
              <div className="results-footer">
                <p className="disclaimer">2026 Multi-Currency Converter</p>
              </div>
            </div>
          ) : (
            
            <div className="empty-state mt-10">
              <div className="card text-center">
                <div className="empty-icon-box">
                  <TrendingUp size={32} color="rgb(96,165,250)" />
                </div>
                <p className="empty-text mt-2">
                  Enter an amount and select a currency to compare exchange rates
                </p>
              </div>
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
}
