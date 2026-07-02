import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "../components/common/Button";
import { Seo } from "../components/common/Seo";
import { news } from "../data/site";
import { PageHero } from "./AboutPage";

const PAGE_SIZE = 3;

export function NewsPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const filtered = useMemo(
    () => news.filter((item) => `${item.title} ${item.category} ${item.content}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <Seo title="Actualités" description="Actualités, articles et nouvelles des programmes de CERDI-BAS." />
      <PageHero title="Actualités" text="Les nouvelles de nos programmes, formations, recherches et actions de plaidoyer." />
      <section className="section-pad bg-white dark:bg-[#091711]">
        <div className="container-page">
          <label className="mb-8 flex items-center gap-3 rounded-md border border-gray-200 bg-[#F7FAF8] px-4 py-3 dark:border-white/10 dark:bg-white/5">
            <Search className="text-[#1565C0]" />
            <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Rechercher une actualité" className="w-full bg-transparent font-semibold outline-none" />
          </label>
          <div className="grid gap-6 lg:grid-cols-3">
            {visible.map((article) => (
              <article key={article.title} className="overflow-hidden rounded-md border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5">
                <img src={article.image} alt="" className="h-56 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <span className="text-sm font-bold text-[#2E7D32]">{article.category} · {article.date}</span>
                  <h2 className="mt-2 text-2xl font-black">{article.title}</h2>
                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{article.content}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Button variant="ghost" type="button" className={page === 1 ? "pointer-events-none opacity-40" : ""}>Page {page} / {totalPages}</Button>
            <button className="rounded-md bg-[#1565C0] px-5 py-3 font-bold text-white disabled:opacity-40" disabled={page >= totalPages} onClick={() => setPage((value) => value + 1)}>Suivant</button>
          </div>
        </div>
      </section>
    </>
  );
}
