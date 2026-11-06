"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [fileName, setFileName] = useState("");
  const [pro, setPro] = useState(false);

  useEffect(() => {
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
    // Mock conversion - 2 sec
    setTimeout(() => {
      const newCount = count + 1;
      setCount(newCount);
      localStorage.setItem("pdf_count", newCount.toString());
      // Create dummy Excel download
      const blob = new Blob([`PDF: ${file.name}\nConverted to Excel - Automaton Wealth`], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name.replace(".pdf", ".xlsx");
      a.click();
    }, 1500);
  };

  const buyPro = () => {
    window.open("https://rzp.io/rzp/vOiZdFy", "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Automaton Wealth - PDF2Excel Pro</h1>
        <p className="mt-2 text-gray-400">Thana rent thane kattukune AI - Vijayawada</p>
        
        <div className="mt-8 p-6 border border-gray-700 rounded-lg">
          <h2 className="text-xl">Free: {count}/3 Used {pro && "(PRO Active)"}</h2>
          <input type="file" accept=".pdf" onChange={handleUpload} className="mt-4 block w-full text-sm" />
          {fileName && <p className="mt-4 text-green-400">Converting: {fileName}...</p>}
          {!pro && count >= 3 && (
            <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-600 rounded">
              <p className="font-bold">Free Limit Over - Pro Unlock Chey</p>
              <p className="text-sm mt-1">Unlimited conversions + Fast + No watermark</p>
              <button onClick={buyPro} className="mt-3 bg-white text-black px-6 py-2 rounded font-bold">Buy Pro ₹599 - Instant Access</button>
            </div>
          )}
          <button onClick={buyPro} className="mt-6 bg-blue-600 px-4 py-2 rounded">Buy Now ₹599</button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>MRR: $474 | PDF2Excel Pro: $161 | Auto-Agent: Active (2hr)</p>
          <p className="mt-2">Workflow: Upload -> Convert -> Free 3 -> Pro Lock -> ₹599 -> Bank Credit</p>
        </div>
      </div>
    </main>
  );
}