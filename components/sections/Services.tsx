const services = [
  {
    title: "Références adaptées",
    description:
      "Nous vous aidons à identifier les pièces les plus pertinentes selon votre activité, vos modèles fréquents et vos besoins récurrents.",
    icon: (
      <>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
        <path d="M8 4v4" />
        <path d="M14 10v4" />
        <path d="M10 16v4" />
      </>
    ),
  },
  {
    title: "Approvisionnement régulier",
    description:
      "Une solution pensée pour les professionnels qui ont besoin de volumes, de disponibilité et d’un interlocuteur fiable.",
    icon: (
      <>
        <path d="M3 8h11v9H3z" />
        <path d="M14 11h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </>
    ),
  },
  {
    title: "Partenariat sur mesure",
    description:
      "Chaque collaboration est construite selon vos priorités : types de pièces, quantités, délais et fréquence de commande.",
    icon: (
      <>
        <path d="M7 11l3 3l7-7" />
        <path d="M4 19h16" />
        <path d="M6 19V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12" />
      </>
    ),
  },
  {
    title: "Évolution digitale",
    description:
      "Le site pourra évoluer vers un catalogue, des demandes de devis, un espace client et de la commande en ligne.",
    icon: (
      <>
        <path d="M5 4h14a2 2 0 0 1 2 2v10H3V6a2 2 0 0 1 2-2z" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
        <path d="M8 8h8" />
        <path d="M8 12h5" />
      </>
    ),
  },
];

export function Services() {
  return (
    <section className="bg-white px-5 py-6 md:px-8 md:py-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#f7f8fa] p-6 md:p-8 lg:p-10">
        <div className="mb-8 grid gap-6 md:grid-cols-[1fr_0.75fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#1E3A8A]">
              Notre approche
            </p>

            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] text-neutral-950 md:text-5xl">
              Un accompagnement clair, fiable et pensé pour durer.
            </h2>
          </div>

          <p className="text-sm font-medium leading-7 text-neutral-500">
            Help 4 Today privilégie une relation directe avec ses partenaires :
            comprendre vos besoins, proposer une réponse adaptée et construire
            une collaboration simple sur le long terme.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[1.7rem] border border-neutral-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#eef3fb] text-[#1E3A8A] transition group-hover:bg-[#1E3A8A] group-hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  {service.icon}
                </svg>
              </div>

              <h3 className="text-xl font-black tracking-tight text-neutral-950">
                {service.title}
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-neutral-500">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}