"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Ce que nous faisons", href: "/about" },
  { label: "Partenariats", href: "/partenariats" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-neutral-950 px-5 py-2 text-center text-xs font-semibold text-white md:text-sm">
        Pièces détachées téléphone & tablette pour professionnels — contactez-nous pour vos besoins en volume
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="flex min-w-fit items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1E3A8A] text-sm font-black text-white">
            H4T
          </div>

          <div className="leading-tight">
            <p className="text-xl font-black tracking-tight text-neutral-950">
              Help 4 Today
            </p>
            <p className="text-xs font-semibold text-neutral-500">
              Pièces détachées B2B
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold transition ${
                  isActive
                    ? "text-[#1E3A8A]"
                    : "text-neutral-600 hover:text-[#1E3A8A]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <span className="text-sm font-bold text-neutral-400">
            Futur catalogue
          </span>
        </nav>

        <Link
          href="/contact"
          className="rounded-2xl bg-[#1E3A8A] px-5 py-3 text-sm font-black text-white transition hover:bg-blue-900"
        >
          Contacter
        </Link>
      </div>
    </header>
  );
}