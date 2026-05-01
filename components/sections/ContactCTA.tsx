export function ContactCTA() {
  return (
    <section className="bg-white px-5 pt-6 pb-12 md:px-8 md:pt-8 md:pb-14">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-neutral-100 bg-[#f7f8fa] shadow-xl shadow-black/5">
        <div className="grid md:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 md:p-12">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1E3A8A]">
              Contact direct
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] text-neutral-950 md:text-5xl">
              Parlons de vos besoins en pièces détachées.
            </h2>

            <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-neutral-500">
              Vous êtes réparateur, revendeur, boutique spécialisée ou
              entreprise avec des besoins réguliers ? Contactez-nous pour
              construire une solution adaptée.
            </p>
          </div>

          <div className="bg-white p-5 md:p-8">
            <div className="grid h-full gap-4 md:grid-rows-2">
              <a
                href="tel:+33000000000"
                className="group flex items-center justify-between rounded-[1.5rem] bg-[#f7f8fa] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#eef3fb] hover:shadow-xl hover:shadow-black/5"
              >
                <span>
                  <span className="block text-sm font-bold text-neutral-500 transition group-hover:text-[#1E3A8A]">
                    Téléphone
                  </span>
                  <span className="mt-1 block text-lg font-black text-neutral-950">
                    +33 0 00 00 00 00
                  </span>
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-[#1E3A8A] shadow-sm transition group-hover:translate-x-1 group-hover:bg-[#1E3A8A] group-hover:text-white">
                  →
                </span>
              </a>

              <a
                href="mailto:contact@help4today.com"
                className="group flex items-center justify-between rounded-[1.5rem] bg-[#f7f8fa] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#eef3fb] hover:shadow-xl hover:shadow-black/5"
              >
                <span>
                  <span className="block text-sm font-bold text-neutral-500 transition group-hover:text-[#1E3A8A]">
                    Email
                  </span>
                  <span className="mt-1 block text-lg font-black text-neutral-950">
                    contact@help4today.com
                  </span>
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-[#1E3A8A] shadow-sm transition group-hover:translate-x-1 group-hover:bg-[#1E3A8A] group-hover:text-white">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}