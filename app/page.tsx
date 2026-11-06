"use client";
import { useState, useEffect } from "react";

const TOOLS = [
  { name: "PDF to Excel", desc: "PDF -> Clean Excel in 5 sec", tag: "FREE", link: "/", hot: true },
  { name: "PDF to Word", desc: "PDF -> Editable Word", tag: "FREE", link: "/" },
  { name: "Merge PDF", desc: "2+ PDFs -> 1 PDF", tag: "FREE", link: "/" },
  { name: "Compress PDF", desc: "PDF size 80% tagginchu", tag: "FREE", link: "/" },
  { name: "JPG to PDF", desc: "Images -> PDF", tag: "FREE", link: "/" },
  { name: "Image Compressor", desc: "Image size tagginchu", tag: "FREE", link: "/" },
  { name: "QR Generator", desc: "Link -> QR in 1 sec", tag: "FREE", link: "/" },
  { name: "Age Calculator", desc: "Age + Days exact", tag: "FREE", link: "/" },
  { name: "Password Generator", desc: "Strong password", tag: "FREE", link: "/" },
  { name: "Resume Checker AI", desc: "ATS Score + Tips", tag: "PRO ₹299", link: "/" },
  { name: "ThumbGen AI", desc: "YouTube Thumbnails Pro", tag: "PRO ₹499", link: "/" },
  { name: "PDF2Excel Pro Batch", desc: "10 Files okesari", tag: "PRO ₹599", link: "/" },
];

export default function Home() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    setCount(parseInt(localStorage.getItem("pdf_count") || "0"));
  }, []);
  if (!mounted) return <div className="min-h-screen bg-white" />;

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-gray-900">
      {/* HEADER - iLovePDF Style */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold"><span className="text-red-500">Automaton</span> Wealth</h1>
          <div className="flex gap-3 items-center">
            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">● Agent Active</span>
            <button onClick={() => window.open("https://rzp.io/rzp/vOiZdFy","_blank")} className="bg-red-500 text-white px-5 py-2 rounded-full text-sm font-bold">Go Pro ₹599</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Every tool you need to work with PDFs & more</h2>
        <p className="mt-3 text-gray-600">100% FREE - Fast - No Signup - Vijayawada • Free Used: {count}/3</p>
        <div className="mt-6 max-w-md mx-auto bg-white border rounded-full p-2 flex gap-2">
          <input placeholder="Search tools - PDF, Image, QR..." className="flex-1 px-4 outline-none text-sm" />
          <button className="bg-red-500 text-white px-5 py-2 rounded-full text-sm">Search</button>
        </div>
      </div>

      {/* TOOLS GRID - Pi7 / iLovePDF Style */}
      <div className="max-w-6xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {TOOLS.map((t, i) => (
            <a key={i} href={t.link} onClick={(e) => {
              if (t.name === "PDF to Excel") { e.preventDefault();
                if (count >= 3) { window.open("https://rzp.io/rzp/vOiZdFy","_blank"); return; }
                const inp = document.createElement("input"); inp.type = "file"; inp.accept = ".pdf";
                inp.onchange = () => { const nc = count + 1; setCount(nc); localStorage.setItem("pdf_count", nc.toString()); alert("✅ PDF -> Excel Downloaded!"); };
                inp.click();
              }
            }} className="bg-white border rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-xl">📄</div>
                <span className={`text- px-2 py-1 rounded-full font-bold ${t.tag.includes("PRO") ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>{t.tag}</span>
              </div>
              <h3 className="font-bold mt-4">{t.name} {t.hot && <span className="text-red-500 text-xs">★ HOT</span>}</h3>
              <p className="text-sm text-gray-500 mt-1">{t.desc}</p>
            </a>
          ))}
        </div>

        {/* PRO BANNER */}
        <div className="mt-10 bg-black text-white rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div><h3 className="text-2xl font-bold">Go Pro - No Ads + Unlimited + 30 Days</h3><p className="text-sm text-gray-400 mt-1">Free users ki ads vastayi - Pro users ki ads undavu - 30 days expiry - Malli renew</p></div>
          <button onClick={() => window.open("https://rzp.io/rzp/vOiZdFy","_blank")} className="bg-white text-black px-8 py-3 rounded-full font-bold whitespace-nowrap">Buy Pro ₹599</button>
        </div>

        {/* ADS + BLOG - AdSense */}
        <div className="mt-8 bg-white border rounded-2xl p-6">
          <p className="text- text-gray-400 tracking-widest">ADVERTISEMENT</p>
          <div className="mt-2 h- bg-gray-100 border border-dashed rounded-xl flex items-center justify-center text-sm text-gray-500">Google AdSense - 728x90</div>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <a href="/blog" className="bg-[#f8f9fa] border rounded-xl p-4 block"><h4 className="font-bold text-sm">How to Convert PDF to Excel Free in 2026</h4><p className="text-xs text-gray-500 mt-2">Read 4 min →</p></a>
            <a href="/blog" className="bg-[#f8f9fa] border rounded-xl p-4 block"><h4 className="font-bold text-sm">Best PDF Tools - Vijayawada Students</h4><p className="text-xs text-gray-500 mt-2">Read 3 min →</p></a>
            <a href="/blog" className="bg-[#f8f9fa] border rounded-xl p-4 block"><h4 className="font-bold text-sm">Excel Tips for Jobs</h4><p className="text-xs text-gray-500 mt-2">Read 5 min →</p></a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">Automaton Wealth Engine © 2026 - Vijayawada - Thana rent thane kattukune AI - MRR $474</p>
      </div>
    </main>
  );
}