import React from 'react';

export default function stage1InfoPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-6xl font-bold text-orange-500 text-center">Stage 1 Tuning</h1>

        <section className="bg-cyan-600 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Was ist Stage 1?</h2>
          <p className="text-white text-lg">
            Bei einem Stage 1 Tuning wird dein Fahrzeug ausschließlich über Software optimiert – ohne Hardwareänderungen.
            Wir optimieren die Kennfelder für Ladedruck, Zündung, Einspritzung und Drehmomentbegrenzung individuell.
          </p>
        </section>

        <section className="bg-cyan-600 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Vorteile</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>+15–30 % Mehrleistung</li>
            <li>Besseres Ansprechverhalten</li>
            <li>Optimiertes Drehmomentverhalten</li>
            <li>Individuell abgestimmt</li>
          </ul>
        </section>

        <section className="bg-cyan-600 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Für wen geeignet?</h2>
          <p className="text-white text-lg">
            Stage 1 ist ideal für alle, die ihrem Auto mehr Leistung und Fahrspaß verleihen wollen – ganz ohne mechanische Umbauten.
          </p>
        </section>

        <div className="text-center mt-10">
          <a
            href="/kontakt"
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-xl text-xl"
          >
            Termin vereinbaren
          </a>
        </div>
      </div>
    </div>
  );
}
