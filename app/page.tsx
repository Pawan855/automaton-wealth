"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [fileName, setFileName] = useState("");
  const [pro, setPro] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const c = parseInt(localStorage.getItem("pdf_count") || "0");
    setCount(c);
    const isPro = localStorage.getItem("is_pro") === "yes";
    setPro(isPro);
  }, []);

  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    if (!pro && count >= 3) {
      alert("Free limit 3 over - Pro kavali - ₹599 - Buy Now click chey");
      return;
    }
    setTimeout(() => {
      const newCount = count + 1;
      setCount(newCount);
      localStorage.setItem("pdf_count", newCount.toString());
      const blob = new Blob([`PDF: ${file.name} Converted`], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name.replace(".pdf", ".xlsx");
      a.click();
    }, 1500);
  };

  if (!mounted) return <div className="p-10">Loading Automaton Wealth...</div>;

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Automaton Wealth Engine</h1>
        <p className="mt-2 text-gray-400">PDF2Excel Pro - Free 3 then Pro ₹599</p>
        <div className="mt-8 p-6 border border-gray-700 rounded-lg">
          <h2 className="text-xl">Free: {count}/3 {pro && "(PRO Active)"}</h2>
          <input type="file" accept=".pdf" onChange={handleUpload} className="mt-4 block w-full" />
          {fileName && <p className="mt-4 text-green-400">Converting: {fileName}...</p>}
          {!pro && count >= 3 && (
            <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-600 rounded">
              <p>Free Limit Over - Pro Unlock</p>
              <button onClick={() => window.open("https://rzp.io/rzp/vOiZdFy","_blank")} className="mt-3 bg-white text-black px-6 py-2 rounded font-bold">Buy Pro ₹599</button>
            </div>
          )}
        </div>
        <div className="mt-8 text-sm text-gray-500">MRR $474 | Agent Active 2hr</div>
      </div>
    </main>
  );
}