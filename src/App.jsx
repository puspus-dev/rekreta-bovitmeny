import React from "react";
import { motion } from "framer-motion";

const addonUrl = "https://addons.mozilla.org/en-US/firefox/addon/rekréta/";

const features = [
  {
    title: "Új színek",
    desc: "Zöldeskék paletta, kontrasztos és olvasható megjelenés."
  },
  {
    title: "Szebb táblázatok",
    desc: "Kerekített cellák, hover-effektek és jobb olvashatóság."
  },
  {
    title: "Animációk & ikonok",
    desc: "Finom beúszások, fénycsíkok és mikromozgások a profibb élményért."
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#a7f3d0] to-[#60a5fa] font-sans text-slate-900">
      <header className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-white/90 flex items-center justify-center shadow-rk-md">
            <span className="font-bold text-xl text-sky-600">rK</span>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">reKréta</h1>
            <p className="text-sm text-slate-700">Az e-Kréta, ahogy mindig is szeretted volna.</p>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <a
            href={addonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-md bg-white/80 backdrop-blur-sm text-sm font-medium"
          >
            Megtekintés a Firefox Add-ons-on
          </a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
            >
              Tedd szebbé az e-Kréta felületét
            </motion.h2>

            <motion.p
              className="mt-4 text-lg text-slate-700"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
            >
              reKréta — letisztult színek, sima animációk és jobb olvashatóság.
              Telepítsd Firefoxba, és élvezd a megújult felületet.
            </motion.p>

            <div className="mt-6 flex gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={addonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 rounded-lg bg-gradient-to-r from-[#10b981] to-[#3b82f6] text-white font-semibold shadow-rk-md"
              >
                Telepítés Firefoxhoz
              </motion.a>

              <a
                href="https://github.com/puspus-dev/rekreta-bovitmeny"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 rounded-lg bg-white/90 text-slate-900 font-medium"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="w-full max-w-md bg-white rounded-xl shadow-rk-md overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] text-white text-center">
                <div className="text-xs uppercase tracking-wider">Szerepkör választó</div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="rounded-lg p-4 bg-white/10">📘</div>
                  <div className="rounded-lg p-4 bg-white/10">📊</div>
                  <div className="rounded-lg p-4 bg-white/10">⤴️</div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-sm text-slate-700">
                  Elektronikus ellenőrző könyv · Digitális kollaborációs tér · Kijelentkezés
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-12 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * i }}
              className="bg-white rounded-2xl p-6 shadow-rk-md"
            >
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Screenshots placeholder */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold">Előtte — Utána</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-48 rounded-xl bg-gradient-to-br from-slate-200 to-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
              Előtte
            </div>
            <div className="h-48 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
              Utána
            </div>
          </div>
        </section>

        {/* Install steps & links */}
        <section className="mt-12 mb-24 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-rk-md">
            <h4 className="font-semibold">Telepítési útmutató (Firefox)</h4>
            <ol className="mt-3 text-sm text-slate-600 list-decimal list-inside space-y-2">
              <li>Kattints a „Telepítés Firefoxhoz” gombra.</li>
              <li>A megnyíló oldalon válaszd a „Add to Firefox” / „Install” gombot.</li>
              <li>Engedélyezd a bővítményt — kész is!</li>
            </ol>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-rk-md">
            <h4 className="font-semibold">Gyors linkek</h4>
            <ul className="mt-3 text-sm text-slate-600 space-y-2">
              <li>
                Firefox Add-ons:{" "}
                <a className="text-sky-600 underline" href={addonUrl} target="_blank" rel="noopener noreferrer">
                  reKréta a Firefox Add-ons-on
                </a>
              </li>
              <li>GitHub repo: <span className="font-mono text-xs">/puspus-dev/rekreta-bovitmeny</span></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-white/60 py-6 mt-12">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-700">
          © reKréta — Nem hivatalos bővítmény. Csak megjelenést módosít.
        </div>
      </footer>
    </div>
  );
}
