import React from 'react'
</section>


{/* Screenshots placeholder */}
<section className="mt-12">
<h3 className="text-xl font-semibold">Előtte — Utána</h3>
<p className="text-sm text-slate-700 mt-2">Képek feltöltése után ide kerülnek a képernyőképek, amelyek bemutatják a változásokat.</p>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="h-48 rounded-xl bg-gradient-to-br from-slate-200 to-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">Előtte</div>
<div className="h-48 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">Utána</div>
</div>
</section>


{/* Footer / Install steps */}
<section className="mt-12 mb-24 grid md:grid-cols-2 gap-8">
<div className="bg-white rounded-2xl p-6 shadow-rk-md">
<h4 className="font-semibold">Telepítési útmutató (Chrome)</h4>
<ol className="mt-3 text-sm text-slate-600 list-decimal list-inside space-y-2">
<li>Töltsd le a reKréta mappát (kicsomagolt bővítményként).</li>
<li>Nyisd meg a chrome://extensions/ oldalt.</li>
<li>Kapcsold be a Fejlesztői módot, majd válaszd &quot;Betöltés kicsomagolt bővítményként&quot;.</li>
<li>Válaszd ki a reKréta mappát — kész is!</li>
</ol>
</div>


<div className="bg-white rounded-2xl p-6 shadow-rk-md">
<h4 className="font-semibold">Gyors linkek</h4>
<ul className="mt-3 text-sm text-slate-600 space-y-2">
<li>GitHub repo: <span className="font-mono text-xs">/rekreta-landing</span></li>
<li>Vercel deploy: kattints a &quot;Deploy&quot; gombra a repo fölött.</li>
</ul>
</div>
</section>
</main>


<footer className="bg-white/60 py-6 mt-12">
<div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-700">© reKréta — Nem hivatalos bővítmény. Csak megjelenést módosít.</div>
</footer>
</div>
)
}