"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    setMounted(true);
    setCount(parseInt(localStorage.getItem("pdf_count") || "0"));
  }, []);

  const handleFile = (e: any) => {
    const f = e.target.files[0];
    if (!f) return;
    setFileName(f.name);
    if (count >= 3) {
      window.open("https://rzp.io/rzp/vOiZdFy", "_blank");
      return;
    }
    const nc = count + 1;
    setCount(nc);
    localStorage.setItem("pdf_count", nc.toString());
    setTimeout(() => alert(`✅ ${f.name} -> Excel Downloaded! (Mock Pro)`), 1000);
  };

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Automaton Wealth Engine</h1>
          <span className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full">● Agent Active - 2hr</span>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-[#111] border border-[#222] rounded-2xl p-8">
            <h2 className="text-3xl font-bold">PDF2Excel Pro</h2>
            <p className="mt-2 text-gray-400">Upload PDF, get clean Excel in 5 sec. Free 3 conversions.</p>
            <div className="mt-6 bg-black border border-dashed border-gray-700 rounded-xl p-6 text-center">
              <input type="file" accept=".pdf" onChange={handleFile} className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-white file:text-black" />
              {fileName && <p className="mt-3 text-sm text-green-400">✓ {fileName}</p>}
              <p className="mt-3 text-xs text-gray-500">Free Used: {count}/3</p>
            </div>
            {count >= 3 && (
              <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                <p className="font-bold">Free Limit Over</p>
                <p className="text-sm text-gray-400">Unlock unlimited conversions</p>
                <button onClick={() => window.open("https://rzp.io/rzp/vOiZdFy","_blank")} className="mt-3 w-full bg-white text-black py-3 rounded-xl font-bold">Buy Pro ₹599 - Instant Access</button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
              <p className="text-sm text-gray-400">MRR</p><p className="text-3xl font-bold">$474</p>
              <p className="text-xs text-green-400 mt-1">↑ 12% this week</p>
            </div>
            <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
              <p className="text-sm text-gray-400">PDF2Excel Pro</p><p className="text-xl font-bold">$161 MRR</p>
              <button onClick={() => window.open("https://rzp.io/rzp/vOiZdFy","_blank")} className="mt-3 w-full bg-[#222] py-2 rounded-lg text-sm">Buy Now ₹599</button>
            </div>
            <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
              <p className="text-sm text-gray-400">Coming Soon</p><p className="text-sm mt-2">ThumbGen AI, Resume Checker, Auto-Blog + AdSense</p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-gray-600">Thana rent thane kattukune AI - Vijayawada - Automaton Wealth Engine - 2026</p>
      </div>
    </main>
  );
}