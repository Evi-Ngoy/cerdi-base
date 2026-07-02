import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BackToTop } from "../components/common/BackToTop";
import { Button } from "../components/common/Button";
import { navItems, organization } from "../data/site";
import { useDarkMode } from "../hooks/useDarkMode";
import { cn } from "../utils/cn";

export function MainLayout() {
  const [open, setOpen] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-[#F7FAF8] text-gray-950 dark:bg-[#07100C] dark:text-white">
      <header className="glass fixed inset-x-0 top-0 z-40 border-b border-black/5 dark:border-white/10">
        <div className="container-page flex h-20 items-center justify-between gap-5">
          <NavLink to="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={() => setOpen(false)}>
            <LogoMark />
            <span className="min-w-0 whitespace-nowrap leading-tight">
              <span className="block text-lg font-black">{organization.shortName}</span>
              <span className="hidden text-xs font-semibold text-gray-500 dark:text-gray-300 sm:block">Développement durable</span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-1 2xl:flex" aria-label="Navigation principale">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "focus-ring rounded-md px-3 py-2 text-sm font-bold text-gray-700 transition hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10",
                    isActive && "bg-[#2E7D32]/10 text-[#2E7D32] dark:text-green-200",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label="Changer le thème"
              className="focus-ring grid size-11 place-items-center rounded-md border border-black/10 bg-white dark:border-white/10 dark:bg-white/10"
            >
              {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <div className="hidden lg:block">
              <Button to="/nous-rejoindre">Faire un don</Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label="Ouvrir le menu"
              className="focus-ring grid size-11 place-items-center rounded-md border border-black/10 bg-white 2xl:hidden dark:border-white/10 dark:bg-white/10"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open ? (
          <div className="border-t border-black/5 bg-white px-4 py-4 shadow-xl 2xl:hidden dark:border-white/10 dark:bg-[#07100C]">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className="rounded-md px-4 py-3 font-bold hover:bg-gray-100 dark:hover:bg-white/10">
                  {item.label}
                </NavLink>
              ))}
              <Button to="/nous-rejoindre" className="mt-2">Faire un don</Button>
            </div>
          </div>
        ) : null}
      </header>
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#07100C] py-16 text-white">
      <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <LogoMark />
            <span className="text-xl font-black">{organization.shortName}</span>
          </div>
          <p className="max-w-md leading-8 text-white/70">
            {organization.legalStatus} engagée pour le développement durable, le renforcement des capacités et l'accompagnement des initiatives de base depuis {organization.createdAt}.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-black">Liens rapides</h3>
          <div className="grid gap-3 text-white/70">
            {navItems.slice(0, 6).map((item) => (
              <NavLink key={item.path} to={item.path} className="hover:text-white">{item.label}</NavLink>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-black">Coordonnées</h3>
          <div className="grid gap-3 text-white/70">
            <span>{organization.address}</span>
            {organization.phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white">{phone}</a>
            ))}
            {organization.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="hover:text-white">{email}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-black">Newsletter</h3>
          <form className="grid gap-3">
            <input aria-label="Email newsletter" type="email" placeholder="Votre email" className="rounded-md border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50" />
            <Button type="submit">S'abonner</Button>
          </form>
          <p className="mt-6 text-sm text-white/50">LinkedIn · Facebook · X · YouTube</p>
        </div>
      </div>
      <div className="container-page mt-12 border-t border-white/10 pt-8 text-sm text-white/50">
        © {new Date().getFullYear()} {organization.shortName}. Tous droits réservés.
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <span className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-md border border-black/5 bg-white p-1 shadow-sm sm:size-16">
      <img src="/logo-mark.png" alt="Logo CERDI-BAS" className="h-full w-full object-contain" />
    </span>
  );
}
