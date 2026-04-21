const lenses = [
  "UI Systems",
  "Fullstack Delivery",
  "Distributed Patterns",
  "AI Automation",
];

const flagshipProjects = [
  {
    title: "Popcorn Palace",
    signal: "Transactional thinking and concurrency-aware booking flows.",
  },
  {
    title: "kafka-stream-store",
    signal: "FastAPI, Postgres, Kafka, and migration discipline in one stack.",
  },
];

const proofPoints = [
  "Flagship-first recruiter flow",
  "Evidence-backed project storytelling",
  "Capability lens for emphasis, not identity",
];

function App() {
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
                This shell is the Phase 1 frontend scaffold. It establishes the
                recruiter-first dashboard structure before API integration.
              </p>
            </div>
            <div className="flex w-full max-w-xs flex-col gap-3">
              <label className="text-sm font-medium text-slate" htmlFor="lens">
                Capability Lens
              </label>
              <select
                id="lens"
                className="rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none ring-0"
                defaultValue={lenses[0]}
              >
                {lenses.map((lens) => (
                  <option key={lens} value={lens}>
                    {lens}
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
                  First Major Block
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Flagship case studies</h2>
              </div>
              <span className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate">
                API wiring next
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {flagshipProjects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-[24px] bg-white p-6 shadow-panel"
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-moss">
                    Flagship
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate">{project.signal}</p>
                </article>
              ))}
            </div>
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
                Skill Evidence Matrix
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Transactions",
                  "Pessimistic locking",
                  "Kafka pub/sub",
                  "Authentication/security",
                  "Event sourcing",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-sand px-4 py-4 text-sm text-ink"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-ink/10 bg-ink p-8 text-white shadow-panel">
              <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                Scaffold Notes
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/88">
                <li>Frontend uses Vite + React + TypeScript + Tailwind.</li>
                <li>Project cards are placeholder data until the project API exists.</li>
                <li>Next UI step is wiring the dashboard to backend content endpoints.</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
