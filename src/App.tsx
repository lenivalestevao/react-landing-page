import { Faq } from './components/Faq';
import { Icon } from './components/Icon';
import { Pricing } from './components/Pricing';
import { FEATURES, TESTIMONIALS } from './data/content';
import { useTheme } from './lib/theme';

const initials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('');

export default function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <div id="top">
      <header className="nav">
        <a className="brand" href="#top">
          <span className="logo" aria-hidden="true" />
          Aurora
        </a>
        <nav aria-label="Main">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button type="button" className="icon-btn" aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} onClick={toggleTheme}>
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
        </button>
        <a className="btn btn-primary" href="#pricing">
          Get started
        </a>
      </header>

      <main>
        <section className="hero">
          <span className="pill">New: automations are here</span>
          <h1>
            Ship your product <span className="grad">faster</span>, together.
          </h1>
          <p className="lead">Aurora brings planning, analytics and automation into one calm workspace, so your team can focus on what matters.</p>
          <div className="cta-row">
            <a className="btn btn-primary btn-lg" href="#pricing">
              Start for free
            </a>
            <a className="btn btn-lg" href="#features">
              See how it works
            </a>
          </div>
          <p className="small muted">No credit card required · Free plan forever</p>
        </section>

        <section className="stats" aria-label="Highlights">
          {[
            ['12k+', 'Teams onboarded'],
            ['99.9%', 'Uptime last year'],
            ['4.9/5', 'Average rating'],
          ].map(([v, l]) => (
            <div key={l}>
              <strong>{v}</strong>
              <span>{l}</span>
            </div>
          ))}
        </section>

        <section id="features" className="section">
          <div className="section-head">
            <h2>Everything your team needs</h2>
            <p>Small, sharp tools that work well together.</p>
          </div>
          <div className="features">
            {FEATURES.map((f) => (
              <article key={f.title} className="feature">
                <span className="feature-icon">
                  <Icon name={f.icon} />
                </span>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Loved by busy teams</h2>
          </div>
          <div className="quotes">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="quote">
                <div className="stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Icon key={i} name="star" size={16} />
                  ))}
                </div>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="avatar">{initials(t.name)}</span>
                  <span>
                    <strong>{t.name}</strong>
                    <small>{t.role}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <Pricing />
        <Faq />

        <section className="cta">
          <h2>Ready to ship faster?</h2>
          <p>Join thousands of teams who moved to Aurora.</p>
          <a className="btn btn-lg btn-light" href="#pricing">
            Create your free workspace
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Aurora. Free template, MIT licensed.</span>
        <nav aria-label="Footer">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
      </footer>
    </div>
  );
}
