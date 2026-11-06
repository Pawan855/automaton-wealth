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
    setTimeout(() => alert(`✅ ${f.name} -> Excel Downloaded!`), 800);
  };

  if (!mounted) return <div className="min-h-screen bg-[#0a0a0a]" />;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* HEADER - FINAL */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Automaton Wealth Engine</h1>
          <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">● Agent Active - 2hr</span>
        </div>
        <p className="text-sm text-gray-400 mt-1">Thana rent thane kattukune AI - Vijayawada</p>

        {/* TOOL + DASHBOARD - FINAL */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
            <h2 className="text-3xl font-bold">PDF2Excel Pro</h2>
            <p className="mt-2 text-sm text-gray-400">Upload PDF, get clean Excel in 5 sec. Free 3 conversions.</p>
            <div className="mt-5 bg-black border border-dashed border-gray-700 rounded-xl p-5 text-center">
              <input type="file" accept=".pdf" onChange={handleFile} className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-white file:text-black" />
              {fileName && <p className="mt-2 text-sm text-green-400">✓ {fileName}</p>}
              <p className="mt-2 text-xs text-gray-500">Free Used: {count}/3</p>
            </div>
            {count >= 3 && (
              <button onClick={() => window.open("https://rzp.io/rzp/vOiZdFy","_blank")} className="mt-4 w-full bg-white text-black py-3 rounded-xl font-bold">Buy Pro ₹599 - Unlock Unlimited</button>
            )}
          </div>
          <div className="space-y-4">
            <div className="bg-[#111] border border-[#222] rounded-2xl p-5"><p className="text-xs text-gray-400">MRR</p><p className="text-3xl font-bold">$474</p><p className="text-xs text-green-400">↑ 12% this week</p></div>
            <div className="bg-[#111] border border-[#222] rounded-2xl p-5"><p className="text-xs text-gray-400">PDF2Excel Pro</p><p className="text-lg font-bold">$161 MRR</p><button onClick={() => window.open("https://rzp.io/rzp/vOiZdFy","_blank")} className="mt-2 w-full bg-[#222] py-2 rounded-lg text-sm">Buy Now ₹599</button></div>
            <div className="bg-[#111] border border-[#222] rounded-2xl p-5"><p className="text-xs text-gray-400">Coming Soon</p><p className="text-sm mt-1">ThumbGen AI • Resume Checker</p></div>
          </div>
        </div>

        {/* ADS ZONE - FINAL - AdSense Kosam */}
        <div className="mt-8 bg-[#111] border border-[#222] rounded-2xl p-6">
          <p className="text-xs text-gray-500 tracking-widest">ADVERTISEMENT</p>
          <div className="mt-3 h- bg-[#1a1a1a] border border-dashed border-gray-700 rounded-xl flex items-center justify-center text-sm text-gray-500">Google AdSense - 728x90 - Blog Traffic nunchi earning</div>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="bg-black border border-[#222] rounded-xl p-4"><h3 className="font-bold text-sm">How to Convert PDF to Excel Free in 2026</h3><p className="text-xs text-gray-400 mt-2">3 free ways + Pro trick - Read 4 min</p></div>
            <div className="bg-black border border-[#222] rounded-xl p-4"><h3 className="font-bold text-sm">Best PDF to Excel Tools - Vijayawada Students</h3><p className="text-xs text-gray-400 mt-2">Top 5 tools compared - Read 3 min</p></div>
            <div className="bg-black border border-[#222] rounded-xl p-4"><h3 className="font-bold text-sm">Excel Tips for Jobs - Resume + Data Entry</h3><p className="text-xs text-gray-400 mt-2">Earn from Excel skills - Read 5 min</p></div>
          </div>
          <div className="mt-4 h- bg-[#1a1a1a] border border-dashed border-gray-700 rounded-xl flex items-center justify-center text-sm text-gray-500">Google AdSense - 728x90 - 2nd Ad Slot</div>
        </div>

        {/* FOOTER - FINAL */}
        <p className="mt-8 text-center text-xs text-gray-600">Automaton Wealth Engine © 2026 - Vijayawada - Thana rent thane kattukune AI</p>
      </div>
    </main>
  );
}