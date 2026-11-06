"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const c = parseInt(localStorage.getItem("pdf_count") || "0");
    setCount(c);
  }, []);

  const handleFile = (e: any) => {
    const f = e.target.files[0];
    if (!f) return;
    if (count >= 3) {
      alert("Free 3 over - Pro ₹599 Buy Now");
      window.open("https://rzp.io/rzp/vOiZdFy", "_blank");
      return;
    }
    const nc = count + 1;
    setCount(nc);
    localStorage.setItem("pdf_count", nc.toString());
    alert(`PDF ${f.name} converting... Downloaded as Excel (mock)`);
  };

  if (!mounted) return <div className="p-10">Loading...</div>;

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">Automaton Wealth Engine</h1>
      <p className="mt-2 text-gray-400">PDF2Excel Pro - Free {count}/3 then Pro ₹599</p>
      <div className="mt-8 p-6 border border-gray-700 rounded">
        <input type="file" accept=".pdf" onChange={handleFile} />
        <p className="mt-4">Free Used: {count}/3</p>
        <button onClick={() => window.open("https://rzp.io/rzp/vOiZdFy","_blank")} className="mt-4 bg-white text-black px-6 py-2 rounded">Buy Pro ₹599</button>
      </div>
      <p className="mt-8 text-sm text-gray-500">MRR $474 | Agent Active | Vercel Live</p>
    </main>
  );
}