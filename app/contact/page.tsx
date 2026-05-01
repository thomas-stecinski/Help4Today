const contactMethods = [
  {
    label: "Téléphone",
    value: "+33 0 00 00 00 00",
    href: "tel:+33000000000",
    featured: false,
  },
  {
    label: "WhatsApp",
    value: "Discuter maintenant",
    href: "https://wa.me/33000000000",
    featured: true,
  },
  {
    label: "Email",
    value: "contact@help4today.com",
    href: "mailto:contact@help4today.com",
    featured: false,
  },
];

const messageTips = [
  "Le type de pièces recherchées",
  "Les modèles concernés",
  "Vos volumes approximatifs",
  "Vos délais ou contraintes",
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-white px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#f3f5f7] p-8 text-center shadow-xl shadow-black/5 md:p-12 lg:p-16">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#1E3A8A]">
            Contact
          </p>

          <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-[-0.05em] text-neutral-950 md:text-7xl">
            Contactez Help 4 Today.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-neutral-600">
            Une question, un besoin en volume ou une demande de partenariat ?
            Contactez-nous directement par téléphone, WhatsApp ou email.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              className={`rounded-[2rem] p-8 text-center transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 ${
                method.featured
                  ? "bg-[#1E3A8A] text-white shadow-xl shadow-red-900/10 hover:bg-red-700"
                  : "border border-neutral-100 bg-[#f7f8fa] text-neutral-950 hover:bg-white"
              }`}
            >
              <p
                className={`text-sm font-black uppercase tracking-[0.25em] ${
                  method.featured ? "text-white/70" : "text-neutral-400"
                }`}
              >
                {method.label}
              </p>

              <p className="mt-5 text-xl font-black">{method.value}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-neutral-100 bg-[#f7f8fa]">
          <div className="grid md:grid-cols-[0.98fr_1.02fr]">
            <div className="relative min-h-[420px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Contact professionnel"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] bg-white/90 p-5 shadow-xl backdrop-blur">
                <p className="text-sm font-black text-neutral-950">
                  Réponse rapide
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-neutral-500">
                  Plus votre demande est précise, plus nous pouvons vous
                  orienter efficacement.
                </p>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#1E3A8A]">
                Votre demande
              </p>

              <h2 className="text-4xl font-black tracking-[-0.04em] text-neutral-950 md:text-5xl">
                Décrivez-nous votre besoin.
              </h2>

              <p className="mt-6 font-medium leading-8 text-neutral-500">
                Pour aller plus vite, indiquez les pièces recherchées, les
                modèles concernés, vos volumes approximatifs et vos délais. Nous
                pourrons ensuite vous proposer un échange adapté.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {messageTips.map((tip) => (
                  <div
                    key={tip}
                    className="flex gap-3 rounded-[1.25rem] bg-white p-4 shadow-sm"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E3A8A] text-xs font-black text-white">
                      ✓
                    </span>

                    <p className="text-sm font-semibold leading-6 text-neutral-600">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}