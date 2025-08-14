import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Banner */}
      <header className="w-full p-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black text-4xl font-bold text-center">
        Chip My Ride
      </header>

      {/* Hauptinhalt */}
      <main className="flex-grow flex flex-col items-center mt-12 px-4">
        <h2 className="text-8xl font-bold mb-4 text-orange-500">Tuning Preise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
          {[
            { name: "Stage 1", price: "550 €", link: "#/stage1InfoPage" },
            { name: "Stage 2", price: "750 €", link: "#/stage2InfoPage" },
            { name: "Stage 3", price: "950 €", link: "#/tuning/stage3" },
            { name: "Eco Tuning", price: "450 €", link: "#/tuning/eco" },
            { name: "Pops & Bangs", price: "450 €", link: "#/tuning/pops" },
            { name: "DSG Knallen", price: "150 €", link: "#/tuning/dsg-knallen" },
            { name: "Launch Control", price: "150 €", link: "#/tuning/launchcontrol" },
            { name: "Begrenzer (Vmax / RPM)", price: "150 €", link: "#/tuning/begrenzer" },
            { name: "DPF / AGR / OPF Abschaltung", price: "350 €", link: "#/tuning/abschaltung" },
            { name: "Getriebeoptimierung", price: "350 €", link: "#/tuning/getriebe" },
            { name: "VCDS Kodierung", price: "50 €", link: "#/tuning/vcds" },
          ].map((item, index) => {
            const centerIndex = 10;
            return (
              <div
                key={index}
                className={`flex items-center justify-between bg-cyan-600 text-white rounded-2xl p-4 hover:bg-cyan-500 transition duration-300 ${
                  index === centerIndex ? "md:col-span-2 justify-center" : ""
                }`}
              >
                <span className="font-bold text-left w-1/3">{item.name}</span>
                <span className="text-left w-1/3 font-bold">{item.price}</span>
                <a
                  href={item.link}
                  className="mt-1 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl text-sm text-center"
                >
                  Infos
                </a>
              </div>
            );
          })}
        </div>

        <a
          href="#/kontakt"
          className="mt-8 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl"
        >
          Tuning sichern
        </a>
      </main>

      {/* Footer */}
      <footer className="mt-12 p-4 bg-neutral-800 w-full text-center text-sm text-gray-400">
        <div className="space-x-4">
          <a href="https://www.alientags.de" target="_blank" rel="noopener noreferrer" className="underline">
            AlienTags
          </a>
          <a href="https://www.tuningfiles-germany.de" target="_blank" rel="noopener noreferrer" className="underline">
            TuningFiles Germany
          </a>
        </div>
        <div className="mt-2">© 2025 ChipMyRide – All rights reserved</div>
      </footer>
    </div>
  );
}

export default Home;
