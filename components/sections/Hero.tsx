"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Écrans & vitres",
    description:
      "Sélection de pièces pour réparations smartphone et tablette, avec une approche adaptée aux besoins professionnels. Nous vous accompagnons sur les références les plus demandées afin de faciliter vos approvisionnements réguliers.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Batteries & autonomie",
    description:
      "Références pensées pour les réparateurs, boutiques et entreprises avec des demandes régulières. L’objectif est de vous aider à maintenir un stock cohérent selon vos volumes, vos modèles les plus courants et vos priorités.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Connectique & composants",
    description:
      "Connecteurs, nappes, modules et composants techniques pour les interventions les plus courantes. Nous privilégions une approche simple : comprendre vos besoins, identifier les références utiles et construire une solution adaptée.",
    image:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Approvisionnement B2B",
    description:
      "Une relation commerciale pensée pour les volumes, les références récurrentes et les besoins évolutifs. Help 4 Today travaille avec les professionnels pour mettre en place des partenariats clairs, durables et personnalisés.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="bg-white px-5 pt-8 pb-6 md:px-8 md:pt-10 md:pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-[#f3f5f7] p-8 shadow-xl shadow-black/5 md:p-12 lg:p-16">
          <div className="max-w-4xl">
            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.05em] text-neutral-950 md:text-7xl">
              Un approvisionnement fiable, pensé pour les professionnels.
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-neutral-600">
              Help 4 Today accompagne les entreprises, réparateurs et revendeurs
              dans leurs besoins en pièces détachées pour téléphones et
              tablettes. Nous construisons des partenariats adaptés à vos
              volumes, vos références et votre organisation.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#solutions"
                className="rounded-full bg-[#1E3A8A] px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-red-900/10 transition hover:-translate-y-1 hover:bg-red-700"
              >
                Nos solutions
              </a>

              <a
                href="/partenariats"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-neutral-950 shadow-sm transition hover:-translate-y-1 hover:bg-neutral-50"
              >
                Demander un partenariat
              </a>
            </div>
          </div>
        </div>

        <div
          id="solutions"
          className="mt-8 overflow-hidden rounded-[2rem] border border-neutral-100 bg-white shadow-xl shadow-black/5"
        >
          <div className="relative min-h-[360px] overflow-hidden md:min-h-[460px]">
            {slides.map((item, index) => (
              <img
                key={item.title}
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  index === activeSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/5" />

            <a
              href="/contact"
              className="absolute right-5 top-5 rounded-full bg-white px-5 py-3 text-sm font-black text-neutral-950 shadow-xl transition hover:-translate-y-1 hover:bg-neutral-100 md:right-6 md:top-6"
            >
              Nous contacter
            </a>

            <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] bg-white/92 p-5 shadow-xl backdrop-blur md:bottom-6 md:left-6 md:max-w-xl md:p-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#1E3A8A]">
                {String(activeSlide + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-tight text-neutral-950 md:text-3xl">
                {slide.title}
              </h3>

              <p className="mt-3 text-sm font-medium leading-6 text-neutral-600 md:text-sm md:leading-7">
                {slide.description}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-neutral-100 px-6 py-5 md:px-8">
            <p className="hidden text-sm font-semibold text-neutral-500 md:block">
              Catalogue, demandes de devis et commande en ligne pourront être
              ajoutés progressivement.
            </p>

            <div className="flex gap-2">
              {slides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Afficher ${item.title}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeSlide
                      ? "w-10 bg-[#1E3A8A]"
                      : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}