import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 bg-neutral-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1E3A8A] text-sm font-black text-white">
            H4T
          </div>

          <h2 className="text-2xl font-black tracking-tight text-neutral-950">
            Help 4 Today
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-neutral-600">
            Vente de pièces détachées pour téléphones et tablettes. Nous aidons
            les professionnels à mettre en place des partenariats adaptés à
            leurs volumes, leurs délais et leurs besoins.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-neutral-400">
            Navigation
          </h3>

          <div className="flex flex-col gap-3 text-sm font-semibold text-neutral-600">
            <Link className="transition hover:text-[#1E3A8A]" href="/">
              Accueil
            </Link>
            <Link className="transition hover:text-[#1E3A8A]" href="/about">
              Ce que nous faisons
            </Link>
            <Link
              className="transition hover:text-[#1E3A8A]"
              href="/partenariats"
            >
              Partenariats
            </Link>
            <Link className="transition hover:text-[#1E3A8A]" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-neutral-400">
            Contact
          </h3>

          <div className="flex flex-col gap-3 text-sm font-semibold text-neutral-600">
            <a className="transition hover:text-[#1E3A8A]" href="tel:+33000000000">
              +33 0 00 00 00 00
            </a>
            <a
              className="transition hover:text-[#1E3A8A]"
              href="mailto:contact@help4today.com"
            >
              contact@help4today.com
            </a>
            <a
              className="transition hover:text-[#1E3A8A]"
              href="https://wa.me/33000000000"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 px-5 py-5 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Help 4 Today. Tous droits réservés.
      </div>
    </footer>
  );
}