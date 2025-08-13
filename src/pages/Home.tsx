import { Link } from "react-router-dom";

function Home() {
  const tuningSections = [
    {
      name: "Stage 1",
      price: "550 €",
      icon: "🚀",
      description: "Leistungssteigerung durch Softwareoptimierung für Serienfahrzeuge ohne Hardware-Upgrade."
    },
    {
      name: "Stage 2",
      price: "750 €",
      icon: "🔥",
      description: "Erweiterte Leistungssteigerung für Fahrzeuge mit Downpipe, Ansaugung oder Ladeluftkühler."
    },
    {
      name: "Stage 3",
      price: "950 €",
      icon: "💣",
      description: "Maximale Performance für stark umgebaute Fahrzeuge mit großem Turbo oder Kompressor."
    },
    {
      name: "Eco Tuning",
      price: "450 €",
      icon: "🌱",
      description: "Optimierung auf Kraftstoffeffizienz und Drehmoment im unteren Drehzahlbereich."
    },
    {
      name: "Pops & Bangs",
      price: "450 €",
      icon: "💥",
      description: "Klangoptimierung im Schubbetrieb durch gezielte Zündverstellung und Lambdaregelung."
    },
    {
      name: "DSG Knallen",
      price: "150 €",
      icon: "⚙️",
      description: "Aggressivere Schaltkennlinien mit hörbarem Auspuffknallen beim DSG-Getriebe."
    },
    {
      name: "Launch Control",
      price: "150 €",
      icon: "🏋️",
      description: "Optimierter Start mit perfektem Drehmoment und Schlupfkontrolle."
    },
    {
      name: "Begrenzer (Vmax / RPM)",
      price: "150 €",
      icon: "⛔",
      description: "Aufhebung oder Anpassung von Vmax und/oder Drehzahlbegrenzern."
    },
    {
      name: "DPF / AGR / OPF Abschaltung",
      price: "350 €",
      icon: "🧪",
      description: "Abschaltung störanfälliger Abgasnachbehandlung bei Motorsportanwendungen."
    },
    {
      name: "Getriebeoptimierung",
      price: "350 €",
      icon: "🔧",
      description: "Optimierte Schaltzeiten, Kupplungsdruck und Fahrverhalten für DSG/Automatik."
    },
    {
      name: "VCDS Kodierung",
      price: "50 €",
      icon: "🛠️",
      description: "Individuelle Fahrzeuganpassungen per Diagnoseinterface – z. B. Licht, Komfort, etc."
    },
  ];

  return (
    <div className="flex flex-col items-center mt-12 px-4">
      <h2 className="text-8xl font-bold mb-4 text-orange-500">Tuning Preise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
        {tuningSections.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-cyan-600 text-white rounded-2xl p-4 hover:bg-cyan-500 transition duration-300"
          >
            <span className="font-bold text-left w-1/3">{item.name}</span>
            <span className="text-left w-1/3 font-bold">{item.price}</span>
            <a
              href={`#${item.name.toLowerCase().replace(/[^a-z0-9]/g, "")}`}
              className="mt-1 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl text-sm text-center"
            >
              Infos
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 w-full max-w-4xl space-y-12">
        {tuningSections.map((item, index) => (
          <div key={index} id={item.name.toLowerCase().replace(/[^a-z0-9]/g, "")}
               className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-3xl font-bold mb-2 flex items-center">
              <span className="mr-2">{item.icon}</span> {item.name}
            </h3>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <a
              href="/kontakt"
              className="inline-block px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl"
            >
              Termin anfragen
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
