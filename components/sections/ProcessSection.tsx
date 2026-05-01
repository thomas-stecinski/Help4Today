const steps = [
  {
    title: "Comprendre",
    text: "Nous échangeons sur votre activité, vos modèles les plus fréquents, vos volumes et vos contraintes.",
  },
  {
    title: "Structurer",
    text: "Nous identifions les références utiles et la manière la plus simple de répondre à vos besoins.",
  },
  {
    title: "Accompagner",
    text: "Nous construisons une relation durable, avec une approche claire et capable d’évoluer dans le temps.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-white px-5 py-6 md:px-8 md:py-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-neutral-100 bg-[#f7f8fa]">
        <div className="grid md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[360px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="Matériel électronique et smartphone"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] bg-white/90 p-5 shadow-xl backdrop-blur">
              <p className="text-sm font-black text-neutral-950">
                Une méthode simple
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-neutral-500">
                Un échange direct pour construire une solution adaptée à votre
                organisation.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1E3A8A]">
              Méthode
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] text-neutral-950 md:text-5xl">
              Comprendre, structurer, accompagner.
            </h2>

            <p className="mt-5 font-medium leading-8 text-neutral-500">
              Notre objectif est d’avancer avec une démarche lisible : partir de
              vos besoins réels, proposer une solution cohérente et construire
              un partenariat qui peut évoluer avec votre activité.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-[1.5rem] bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E3A8A] text-sm font-black text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-black text-neutral-950">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium leading-6 text-neutral-500">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:contact@help4today.com"
              className="mt-8 inline-flex rounded-full bg-[#1E3A8A] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-red-700"
            >
              Demander un contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}