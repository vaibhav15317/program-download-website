import { useEffect, useMemo, useState } from 'react'
import { downloads, site, team } from '../data/site'
import { categories, courses, demoSchemes, states } from '../data/demo'

type Profile = { c: string; k: string; m: number; i: number; s: string }

const defaultProfile: Profile = {
  c: 'Engineering',
  k: 'General',
  m: 78,
  i: 450000,
  s: 'Karnataka',
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function match(p: Profile) {
  return demoSchemes
    .filter(
      (x) =>
        p.m >= x.m &&
        p.i <= x.i &&
        (!x.c || x.c.includes(p.c)) &&
        (!x.k || x.k.includes(p.k)) &&
        (!x.s || x.s.includes(p.s)),
    )
    .sort((a, b) => (a.d < b.d ? -1 : 1))
}

function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MarketingPage() {
  const [draft, setDraft] = useState<Profile>(defaultProfile)
  const [profile, setProfile] = useState<Profile>(defaultProfile)
  const [now, setNow] = useState<number | null>(null)
  useEffect(() => setNow(Date.now()), [])

  const results = useMemo(() => match(profile), [profile])

  return (
    <div className="w">
      <nav className="top">
        <a href="#top" className="logo">
          <i />
          {site.shortName}
        </a>
        <div className="links">
          <a href="#features">Features</a>
          <a href="#preview">Try it</a>
          <a href="#install">Install</a>
          <a href="#download" className="nav-cta">
            Download
          </a>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div>
            <div className="eb">Free desktop app for students</div>
            <h1>
              Find the scholarships <span>you qualify for.</span>
            </h1>
            <p className="lead">
              Smart Scholarship Engine runs on your own computer. Fill in your
              profile once, and it lists the schemes that fit, with the
              documents you need and links to the official portals.
            </p>
            <div className="hero-actions">
              <a className="btn" href={downloads.bundle.href} download>
                <DownloadIcon /> Download for Windows
              </a>
              <a className="btn ghost" href="#preview">
                Try the matcher first
              </a>
            </div>
            <div className="facts">
              <div>
                <b>Free</b>no sign-up needed
              </div>
              <div>
                <b>Offline</b>your profile stays on your PC
              </div>
              <div>
                <b>{downloads.bundle.size}</b>small download
              </div>
            </div>
          </div>

          <aside className="card dl-card" id="download" aria-labelledby="dl-h">
            <div className="win">
              <span />
              <span />
              <span />
              <em>Smart Scholarship Engine</em>
            </div>
            <h2 id="dl-h">Get the program</h2>
            <p className="muted">
              One zip with the app and a launcher. For Windows 10 or 11 with
              Python 3.10 or newer.
            </p>
            <a className="btn block" href={downloads.bundle.href} download>
              <DownloadIcon /> Download {downloads.bundle.file}
            </a>
            <div className="sub">
              <span className="muted">Or download the files one at a time</span>
              <ul>
                {downloads.files.map((f) => (
                  <li key={f.file}>
                    <a href={f.href} download>
                      {f.file}
                    </a>
                    <small>{f.note}</small>
                  </li>
                ))}
              </ul>
            </div>
            <p className="tiny">
              Don't have Python?{' '}
              <a
                href="https://www.python.org/downloads/"
                target="_blank"
                rel="noreferrer"
              >
                Get it from python.org
              </a>{' '}
              and tick “Add Python to PATH” when you install it.
            </p>
          </aside>
        </section>

        <section id="features" className="block-sec">
          <h2 className="sec-h">What's in the app</h2>
          <div className="features">
            <div className="card feat">
              <div className="eb">Student profile</div>
              <h3>Describe yourself once</h3>
              <p>
                Education level, category, state, family income, achievements
                and the documents you already have.
              </p>
            </div>
            <div className="card feat">
              <div className="eb">Scholarship explorer</div>
              <h3>Search and filter schemes</h3>
              <p>
                Browse a starter list of Karnataka and central schemes, ranked
                by how well they match your profile.
              </p>
            </div>
            <div className="card feat">
              <div className="eb">My shortlist</div>
              <h3>Save what looks promising</h3>
              <p>
                Keep good options in one place while you check eligibility and
                application dates.
              </p>
            </div>
            <div className="card feat">
              <div className="eb">Official portals</div>
              <h3>Go straight to the source</h3>
              <p>
                Each scheme links to Karnataka SSP, the National Scholarship
                Portal or AICTE, so you can confirm the rules and apply.
              </p>
            </div>
          </div>
        </section>

        <section id="preview" className="block-sec">
          <div className="rh">
            <div>
              <div className="eb">Live preview</div>
              <h2 className="sec-h">See how matching works</h2>
              <p className="muted">
                A small browser version of the matcher, using example schemes.
                The desktop app has the full profile and catalogue.
              </p>
            </div>
          </div>

          <div className="preview">
            <form
              className="card pform"
              aria-label="Student profile"
              onSubmit={(e) => {
                e.preventDefault()
                setProfile(draft)
              }}
            >
              <h3>Your profile</h3>
              <div className="fg">
                <label>
                  Course
                  <select
                    value={draft.c}
                    onChange={(e) => setDraft({ ...draft, c: e.target.value })}
                  >
                    {courses.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Category
                  <select
                    value={draft.k}
                    onChange={(e) => setDraft({ ...draft, k: e.target.value })}
                  >
                    {categories.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Marks (%)
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={draft.m}
                    onChange={(e) =>
                      setDraft({ ...draft, m: Number(e.target.value) || 0 })
                    }
                  />
                </label>
                <label>
                  Family income per year (₹)
                  <input
                    type="number"
                    min={0}
                    step={10000}
                    value={draft.i}
                    onChange={(e) =>
                      setDraft({ ...draft, i: Number(e.target.value) || 0 })
                    }
                  />
                </label>
                <label className="full">
                  State
                  <select
                    value={draft.s}
                    onChange={(e) => setDraft({ ...draft, s: e.target.value })}
                  >
                    {states.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
              </div>
              <button type="submit" className="btn">
                Find scholarships
              </button>
            </form>

            <div className="res" aria-live="polite">
              <div>
                <h3 className="res-h">
                  {results.length
                    ? `${results.length} scholarships match your profile`
                    : 'No matches yet'}
                </h3>
                <p className="muted">Sorted by nearest deadline.</p>
              </div>
              {results.length === 0 ? (
                <div className="empty">
                  Nothing fits these details. Try a different course, state or
                  income to see what changes.
                </div>
              ) : (
                <div className="list">
                  {results.map((x) => {
                    const days =
                      now === null
                        ? null
                        : Math.ceil((new Date(x.d).getTime() - now) / 864e5)
                    const tags = [
                      `Min ${x.m}% marks`,
                      `Income up to ₹${x.i / 100000}L`,
                      ...(x.c ? [x.c.join(', ')] : []),
                      ...(x.k ? [x.k.join(', ')] : []),
                      ...(x.s ? [x.s.join(', ')] : []),
                    ]
                    return (
                      <article className="card sc" key={x.n}>
                        <div>
                          <h4>{x.n}</h4>
                          <div className="org">{x.o}</div>
                        </div>
                        <div className="amt">{x.a}</div>
                        <div className="tags">
                          {tags.map((t) => (
                            <span className="tag" key={t}>
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="dl">
                          <span>Closes {fmt(x.d)}</span>
                          {days !== null && (
                            <span
                              className={
                                'pill' +
                                (days < 0
                                  ? ' closed'
                                  : days <= 30
                                    ? ' soon'
                                    : '')
                              }
                            >
                              {days < 0 ? 'Closed' : `${days} days left`}
                            </span>
                          )}
                        </div>
                      </article>
                    )
                  })}
                </div>
              )}
              <p className="tiny">
                Listings in this preview are example data to demonstrate
                matching. They are not real schemes.
              </p>
            </div>
          </div>
        </section>

        <section id="install" className="block-sec">
          <h2 className="sec-h">Install in three steps</h2>
          <div className="steps">
            <div className="st">
              <div className="eb">Step 1</div>
              <h3>Install Python</h3>
              <p>
                Get Python 3.10 or newer from{' '}
                <a
                  href="https://www.python.org/downloads/"
                  target="_blank"
                  rel="noreferrer"
                >
                  python.org
                </a>
                . During setup, tick “Add Python to PATH”.
              </p>
            </div>
            <div className="st">
              <div className="eb">Step 2</div>
              <h3>Download and unzip</h3>
              <p>
                Download <code>{downloads.bundle.file}</code>, right-click it
                and choose “Extract All”. Keep the files together in one folder.
              </p>
            </div>
            <div className="st">
              <div className="eb">Step 3</div>
              <h3>Double-click the launcher</h3>
              <p>
                Open <code>Run_Smart_Scholarship_Engine.bat</code>. The first
                run installs PySide6 (needs internet), then the app opens.
              </p>
            </div>
          </div>

          <div className="faq">
            <details className="card">
              <summary>Windows says “Windows protected your PC”</summary>
              <p>
                This appears for new files downloaded from the internet. Click
                “More info”, then “Run anyway”. The launcher is a short text
                file, so you can open it in Notepad to see exactly what it does.
              </p>
            </details>
            <details className="card">
              <summary>Can I use it on macOS or Linux?</summary>
              <p>
                Yes. Open a terminal in the unzipped folder and run{' '}
                <code>python3 -m pip install -r requirements.txt</code>, then{' '}
                <code>python3 smart_scholarship_engine.py</code>.
              </p>
            </details>
            <details className="card">
              <summary>Is the scholarship information official?</summary>
              <p>
                The app ships with a starter list of schemes and links to their
                official portals. Matches are indicative, not a guarantee of
                eligibility, so always confirm deadlines and requirements on the
                portal before applying.
              </p>
            </details>
          </div>
        </section>

        <section className="card cta">
          <div>
            <h2>Ready to find your funding?</h2>
            <p className="muted">Free download · Windows · Python 3.10+</p>
          </div>
          <a className="btn" href={downloads.bundle.href} download>
            <DownloadIcon /> Download now
          </a>
        </section>
      </main>

      <footer>
        <span>{site.shortName} · BMSIT Innovation &amp; Design Thinking</span>
        <span>{team.join(' · ')}</span>
      </footer>
    </div>
  )
}
