import { ContactCTA } from "@/components/sections/ContactCTA";

const activities = [
  {
    title: "Téléphones",
    description:
      "Écrans, batteries, connecteurs, modules, nappes, vitres et composants pour smartphones selon vos besoins professionnels.",
    icon: (
      <path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2" />
    ),
  },
  {
    title: "Tablettes",
    description:
      "Des solutions pour tablettes, pensées pour les réparateurs, boutiques spécialisées, revendeurs et entreprises.",
    icon: (
      <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM11 17h2" />
    ),
  },
  {
    title: "Professionnels",
    description:
      "Nous travaillons principalement avec des entreprises ayant des besoins en volume, réguliers ou spécifiques.",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    highlighted: true,
  },
];

const commitments = [
  "Un contact direct pour comprendre vos besoins réels.",
  "Une approche adaptée à vos volumes et à votre organisation.",
  "Une base pensée pour évoluer vers un catalogue et de la commande en ligne.",
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-white px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#f3f5f7] p-8 shadow-xl shadow-black/5 md:p-12 lg:p-16">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#1E3A8A]">
              Ce que nous faisons
            </p>

            <h1 className="text-5xl font-black tracking-[-0.05em] text-neutral-950 md:text-7xl">
              Nous facilitons l’approvisionnement en pièces détachées.
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-neutral-600">
              Help 4 Today accompagne les professionnels dans leurs besoins en
              pièces détachées pour téléphones et tablettes. Notre rôle est de
              simplifier l’accès aux bonnes références, avec une approche claire,
              directe et adaptée à votre activité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#f7f8fa] p-6 md:p-8 lg:p-10">
          <div className="mb-8 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#1E3A8A]">
                Domaines
              </p>

              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] text-neutral-950 md:text-5xl">
                Des solutions pensées pour le terrain.
              </h2>
            </div>

            <p className="text-sm font-medium leading-7 text-neutral-500">
              Nous travaillons avec des réparateurs, revendeurs, boutiques et
              entreprises qui recherchent une solution fiable pour leurs besoins
              réguliers.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {activities.map((activity) => (
              <article
                key={activity.title}
                className={`rounded-[1.7rem] border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 ${
                activity.highlighted
                ? "border-[#d8e0f0] bg-[#f4f7fb]"
                : "border-neutral-100 bg-white"
                }`}
              >
                <div
                  className={`mb-6 flex h-13 w-13 items-center justify-center rounded-2xl shadow-sm ${
                    activity.highlighted
                    ? "bg-white text-[#1E3A8A]"
                    : "bg-[#eef3fb] text-[#1E3A8A]"
                  }`}
                >
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
                    {activity.icon}
                  </svg>
                </div>

                <h3 className="text-2xl font-black tracking-tight text-neutral-950">
                  {activity.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-neutral-500">
                  {activity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-neutral-100 bg-[#f7f8fa]">
          <div className="grid md:grid-cols-[1.02fr_0.98fr]">
            <div className="p-8 md:p-12">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1E3A8A]">
                Notre rôle
              </p>

              <h2 className="text-4xl font-black tracking-[-0.04em] text-neutral-950 md:text-5xl">
                Créer une relation commerciale fluide et durable.
              </h2>

              <p className="mt-6 font-medium leading-8 text-neutral-500">
                Notre valeur ne se limite pas à la vente de pièces. Nous voulons
                construire une relation simple avec nos partenaires : comprendre
                leurs contraintes, identifier leurs besoins et proposer une
                solution adaptée à leur activité.
              </p>

              <div className="mt-8 space-y-3">
                {commitments.map((commitment) => (
                  <div
                    key={commitment}
                    className="flex gap-3 rounded-[1.25rem] bg-white p-4 shadow-sm"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E3A8A] text-xs font-black text-white">
                      ✓
                    </span>
                    <p className="text-sm font-semibold leading-6 text-neutral-600">
                      {commitment}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80"
                alt="Travail professionnel avec smartphone"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] bg-white/90 p-5 shadow-xl backdrop-blur">
                <p className="text-sm font-black text-neutral-950">
                  Une approche professionnelle
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-neutral-500">
                  Des échanges simples, des besoins clairement identifiés et une
                  collaboration adaptée à vos volumes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}