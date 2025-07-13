
// CHIPMYRIDE Website – Starter-Entwurf mit Logo, Kontaktformular und Leiterbahn-Hintergrund
// Ziel: Onepager für Chiptuning-Dienstleistungen im individuellen Stil

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png"; // Logo muss ins Projektverzeichnis gelegt werden

export default function ChipMyRidePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans bg-[url('/leiterbahn-bg.jpg')] bg-cover bg-fixed">
      <section className="py-12 px-6 text-center">
        <Image
          src={logo}
          alt="Chip My Ride Logo"
          className="mx-auto mb-4"
          width={160}
          height={160}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          CHIP MY RIDE
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Individuelles Chiptuning. Keine Massenware. 100 % Leidenschaft.
        </p>
      </section>
      <section className="max-w-4xl mx-auto py-12 px-4 grid gap-6">
        <h2 className="text-2xl font-semibold">Tuning Preise</h2>
        <Card>
          <CardContent className="p-6 space-y-3">
            <p><strong>Stage 1</strong> – 550 €</p>
            <p><strong>Stage 2</strong> – 750 €</p>
            <p><strong>Stage 3</strong> – 950 €</p>
            <p><strong>Eco Tuning</strong> – 450 €</p>
            <p><strong>Pops & Bangs</strong> – 450 €</p>
            <p><strong>Vmax Aufhebung</strong> – 350 €</p>
            <p><strong>DPF / AGR / OPF Abschaltung</strong> – je 350 €</p>
            <p><strong>Getriebeoptimierung</strong> – 350 €</p>
          </CardContent>
        </Card>
        <h2 className="text-2xl font-semibold mt-12">Tuning Pakete</h2>
        <Card>
          <CardContent className="p-6 space-y-3">
            <p><strong>Power Paket</strong> – Stage 1 + Pops & Bangs + Begrenzer – 900 €</p>
            <p><strong>Stage 1+</strong> – Stage 1 + Getriebeoptimierung – 750 €</p>
            <p><strong>Eco Paket</strong> – Eco Tuning + AGR Abschaltung – 750 €</p>
            <p><strong>Abschaltungspaket</strong> – 3 Abschaltungen – 850 €</p>
            <p><strong>VCDS Codierung</strong> – 2 Codierungen – 50 €</p>
          </CardContent>
        </Card>
      </section>
      <section className="bg-gray-900 py-10 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">Kontaktformular</h2>
        <form className="max-w-xl mx-auto space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input className="w-full p-2 rounded bg-gray-800 border border-gray-600" type="text" name="name" required />
          </div>
          <div>
            <label className="block text-sm font-medium">E-Mail</label>
            <input className="w-full p-2 rounded bg-gray-800 border border-gray-600" type="email" name="email" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium">Marke</label><input className="w-full p-2 rounded bg-gray-800 border border-gray-600" type="text" name="marke" /></div>
            <div><label className="block text-sm font-medium">Modell</label><input className="w-full p-2 rounded bg-gray-800 border border-gray-600" type="text" name="modell" /></div>
            <div><label className="block text-sm font-medium">Baujahr</label><input className="w-full p-2 rounded bg-gray-800 border border-gray-600" type="text" name="baujahr" /></div>
            <div><label className="block text-sm font-medium">Motor</label><input className="w-full p-2 rounded bg-gray-800 border border-gray-600" type="text" name="motor" /></div>
            <div><label className="block text-sm font-medium">Leistung (PS)</label><input className="w-full p-2 rounded bg-gray-800 border border-gray-600" type="number" name="leistung" /></div>
            <div><label className="block text-sm font-medium">Kraftstoff</label><input className="w-full p-2 rounded bg-gray-800 border border-gray-600" type="text" name="sprit" /></div>
            <div className="col-span-2"><label className="block text-sm font-medium">Erstzulassung</label><input className="w-full p-2 rounded bg-gray-800 border border-gray-600" type="text" name="zulassung" /></div>
          </div>
          <div className="mt-4 text-center">
            <Button type="submit">Anfrage senden</Button>
          </div>
        </form>
      </section>
    </main>
  );
}
