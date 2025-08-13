import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center mt-12 px-4">
      <h2 className="text-8xl font-bold mb-4 text-orange-500">Tuning Preise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
        {[
          { name: "Stage 1", price: "550 €", link: "/stage1-info-page" },
          { name: "Stage 2", price: "750 €", link: "/stage2-info-page" },
          { name: "Stage 3", price: "950 €", link: "/stage3-info-page" },
          { name: "Eco Tuning", price: "450 €", link: "/eco-info-page" },
          { name: "Pops & Bangs", price: "450 €", link: "/pops-info-page" },
          { name: "DSG Knallen", price: "150 €", link: "/dsg-info-page" },
          { name: "Launch Control", price: "150 €", link: "/launchcontrol-info-page" },
          { name: "Begrenzer (Vmax / RPM)", price: "150 €", link: "/begrenzer-info-page" },
          { name: "DPF / AGR / OPF Abschaltung", price: "350 €", link: "/abschaltung-info-page" },
          { name: "Getriebeoptimierung", price: "350 €", link: "/getriebe-info-page" },
          { name: "VCDS Kodierung", price: "50 €", link: "/vcds-info-page" },
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
              <Link
                to={item.link}
                className="mt-1 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl text-sm text-center"
              >
                Infos
              </Link>
            </div>
          );
        })}
      </div>

      <Link
        to="/kontakt"
        className="mt-8 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl"
      >
        Tuning sichern
      </Link>
    </div>
  );
}

export default Home;
