import { ContactCTA } from "@/components/sections/ContactCTA";

const steps = [
  {
    title: "Échange initial",
    text: "Nous échangeons sur votre activité, vos volumes, les références recherchées et vos priorités afin de comprendre précisément votre besoin.",
  },
  {
    title: "Proposition adaptée",
    text: "Nous construisons une approche personnalisée selon vos délais, votre organisation, vos contraintes et votre fréquence de commande.",
  },
  {
    title: "Relation durable",
    text: "Nous mettons en place une collaboration claire, simple et évolutive, pensée pour accompagner vos besoins professionnels dans le temps.",
  },
];

const benefits = [
  "Approche adaptée à vos volumes et références.",
  "Échange direct par téléphone, WhatsApp ou email.",
  "Relation B2B pensée pour les besoins réguliers.",
  "Base évolutive vers devis, catalogue et commande en ligne.",
];

export default function PartenariatsPage() {
  return (
    <main>
      <section className="bg-white px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#f3f5f7] p-8 shadow-xl shadow-black/5 md:p-12 lg:p-16">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#1E3A8A]">
              Partenariats
            </p>

            <h1 className="text-5xl font-black tracking-[-0.05em] text-neutral-950 md:text-7xl">
              Des partenariats personnalisés pour les professionnels.
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-neutral-600">
              Chaque entreprise a ses propres contraintes : références, volumes,
              délais, organisation interne ou fréquence de commande. Help 4
              Today vous accompagne avec une approche claire, flexible et pensée
              pour construire une relation durable.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
                href="/contact"
                className="rounded-full bg-[#1E3A8A] px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-900/10 transition hover:-translate-y-1 hover:bg-blue-900"
            >
                Nous contacter
            </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#f7f8fa] p-6 md:p-8 lg:p-10">
          <div className="mb-8 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#1E3A8A]">
                En 3 étapes
              </p>

              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] text-neutral-950 md:text-5xl">
                Une mise en place simple et progressive.
              </h2>
            </div>

            <p className="text-sm font-medium leading-7 text-neutral-500">
              L’objectif est de partir de vos besoins réels pour construire une
              collaboration pratique, claire et adaptée à votre activité.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.7rem] border border-neutral-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E3A8A] text-lg font-black text-white">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-black tracking-tight text-neutral-950">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-neutral-500">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-neutral-100 bg-[#f7f8fa]">
          <div className="grid md:grid-cols-[0.98fr_1.02fr]">
            <div className="relative min-h-[420px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
                alt="Partenariat professionnel"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] bg-white/90 p-5 shadow-xl backdrop-blur">
                <p className="text-sm font-black text-neutral-950">
                  Une relation B2B claire
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-neutral-500">
                  Des échanges simples, une proposition adaptée et une
                  collaboration pensée pour durer.
                </p>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1E3A8A]">
                Pourquoi travailler ensemble
              </p>

              <h2 className="text-4xl font-black tracking-[-0.04em] text-neutral-950 md:text-5xl">
                Une solution pensée pour vos volumes et vos priorités.
              </h2>

              <p className="mt-6 font-medium leading-8 text-neutral-500">
                Que vous soyez réparateur, boutique spécialisée, revendeur ou
                entreprise avec des besoins réguliers, nous pouvons établir une
                collaboration adaptée à votre rythme, vos contraintes et vos
                objectifs.
              </p>

              <div className="mt-8 space-y-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-3 rounded-[1.25rem] bg-white p-4 shadow-sm"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E3A8A] text-xs font-black text-white">
                      ✓
                    </span>

                    <p className="text-sm font-semibold leading-6 text-neutral-600">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/33000000000"
                  className="rounded-full bg-[#1E3A8A] px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-red-700"
                >
                  Discuter d’un partenariat
                </a>

                <a
                  href="/contact"
                  className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-neutral-950 shadow-sm transition hover:-translate-y-1 hover:bg-neutral-50"
                >
                  Voir les contacts
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}