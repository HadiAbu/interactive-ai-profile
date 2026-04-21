import { useEffect, useState } from "react";
import { Chat } from "./components/Chat";

const API = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

interface Project {
  slug: string;
  title: string;
  summary: string | null;
  primary_lens: string | null;
  signals: string[];
}

interface Lens {
  slug: string;
  label: string;
  display_order: number;
}

const proofPoints = [
  "Flagship-first recruiter flow",
  "Evidence-backed project storytelling",
  "Capability lens for emphasis, not identity",
];

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [lenses, setLenses] = useState<Lens[]>([]);
  const [selectedLens, setSelectedLens] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${API}/projects`).then((r) => r.json()),
      fetch(`${API}/lenses`).then((r) => r.json()),
    ]).then(([projectData, lensData]: [Project[], Lens[]]) => {
      setProjects(projectData);
      setLenses(lensData);
      setLoading(false);
    });
  }, []);

  const visibleProjects =
    selectedLens === "all"
      ? projects
      : projects.filter((p) => p.primary_lens === selectedLens);

  const allSignals = Array.from(
    new Set(visibleProjects.flatMap((p) => p.signals)),
  );

  return (
    <div className="min-h-screen bg-sand text-ink">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 sm:px-10">
        <header className="mb-12 flex flex-col gap-6 rounded-[32px] border border-ink/10 bg-white/80 p-8 shadow-panel backdrop-blur">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-slate">
                Candidate Evaluation Console
              </p>
              <h1 className="font-display text-4xl leading-tight sm:text-5xl">
                Frontend-first systems builder with evidence you can inspect.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate">
                Hadi Abu Hamed — one coherent engineering profile. Use the
                Capability Lens to shift emphasis.
              </p>
            </div>
            <div className="flex w-full max-w-xs flex-col gap-3">
              <label className="text-sm font-medium text-slate" htmlFor="lens">
                Capability Lens
              </label>
              <select
                id="lens"
                className="rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none ring-0"
                value={selectedLens}
                onChange={(e) => setSelectedLens(e.target.value)}
              >
                <option value="all">All</option>
                {lenses.map((lens) => (
                  <option key={lens.slug} value={lens.slug}>
                    {lens.label}
                  </option>
                ))}
              </select>
              <a
                className="inline-flex items-center justify-center rounded-2xl bg-ink px-4 py-3 text-sm font-medium text-white transition hover:bg-ink/90"
                href="#flagship-work"
              >
                View Flagship Work
              </a>
            </div>
          </div>
        </header>

        <main className="flex flex-col gap-10">
          <section
            id="flagship-work"
            className="rounded-[32px] border border-ink/10 bg-[#f8f5ef] p-8 shadow-panel"
          >
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-ember">
                  Case Studies
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Flagship work</h2>
              </div>
              {selectedLens !== "all" && (
                <span className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate">
                  {lenses.find((l) => l.slug === selectedLens)?.label}
                </span>
              )}
            </div>
            {loading ? (
              <p className="text-sm text-slate">Loading...</p>
            ) : visibleProjects.length === 0 ? (
              <p className="text-sm text-slate">No projects for this lens.</p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {visibleProjects.map((project) => (
                  <article
                    key={project.slug}
                    className="rounded-[24px] bg-white p-6 shadow-panel"
                  >
                    <p className="text-sm uppercase tracking-[0.18em] text-moss">
                      Flagship
                    </p>
                    <h3 className="mt-3 text-xl font-semibold">
                      {project.title}
                    </h3>
                    {project.summary && (
                      <p className="mt-3 text-sm leading-6 text-slate">
                        {project.summary.split("\n")[0]}
                      </p>
                    )}
                    {project.signals.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.signals.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-sand px-3 py-1 text-xs text-ink"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="grid gap-4 lg:grid-cols-3">
            {proofPoints.map((point) => (
              <div
                key={point}
                className="rounded-[24px] border border-ink/10 bg-white p-6 shadow-panel"
              >
                <p className="text-sm font-medium text-ink">{point}</p>
              </div>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-[32px] border border-ink/10 bg-white p-8 shadow-panel">
              <p className="text-sm uppercase tracking-[0.18em] text-ember">
                Signal Evidence
              </p>
              {allSignals.length === 0 ? (
                <p className="mt-5 text-sm text-slate">
                  No signals for this lens.
                </p>
              ) : (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {allSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-2xl bg-sand px-4 py-4 text-sm text-ink"
                    >
                      {signal}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="rounded-[32px] border border-ink/10 bg-ink p-8 text-white shadow-panel">
              <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                Capability Lenses
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/80">
                {lenses.map((lens) => (
                  <li key={lens.slug}>{lens.label}</li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
      <Chat />
    </div>
  );
}

export default App;
