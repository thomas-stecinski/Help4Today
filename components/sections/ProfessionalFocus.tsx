import Link from "next/link";

export function ProfessionalFocus() {
  return (
    <section className="bg-white px-5 py-6 md:px-8 md:py-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-neutral-100 bg-white p-8 shadow-xl shadow-black/5 md:p-10">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1E3A8A]">
            Pour les professionnels
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] text-neutral-950 md:text-5xl">
            Une relation pensée pour les besoins en volume.
          </h2>

          <p className="mt-6 font-medium leading-8 text-neutral-500">
            Help 4 Today travaille avec des entreprises qui ont besoin d’un
            approvisionnement fiable, régulier et adapté à leur activité. Nous
            prenons le temps de comprendre vos contraintes pour mettre en place
            une collaboration claire et durable.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/partenariats"
              className="rounded-full bg-neutral-950 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-neutral-800"
            >
              Voir les partenariats
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-neutral-200 bg-white px-7 py-4 text-center text-sm font-black text-neutral-950 transition hover:-translate-y-1 hover:bg-neutral-50"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="overflow-hidden rounded-[2rem] border border-neutral-100 bg-[#f7f8fa]">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
              alt="Préparation de commandes professionnelles"
              className="h-64 w-full object-cover"
            />

            <div className="p-8">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#1E3A8A]">
                Évolution future
              </p>

              <h3 className="text-3xl font-black tracking-[-0.04em] text-neutral-950">
                Prêt pour la commande en ligne.
              </h3>

              <p className="mt-4 font-medium leading-7 text-neutral-500">
                Le site est pensé pour évoluer vers un catalogue produits, des
                demandes de devis, un espace client et des commandes en ligne.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-[1.5rem] bg-[#f7f8fa] p-5">
              <p className="text-2xl font-black text-[#1E3A8A]">B2B</p>
              <p className="mt-1 text-sm font-semibold text-neutral-500">
                Relation pro
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[#f7f8fa] p-5">
              <p className="text-2xl font-black text-[#1E3A8A]">Volume</p>
              <p className="mt-1 text-sm font-semibold text-neutral-500">
                Besoins réguliers
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[#f7f8fa] p-5">
              <p className="text-2xl font-black text-[#1E3A8A]">Devis</p>
              <p className="mt-1 text-sm font-semibold text-neutral-500">
                Futur catalogue
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}