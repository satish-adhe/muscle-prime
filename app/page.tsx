const mapsUrl = "https://maps.app.goo.gl/XwPSB5RTSCDnGEdR7";
const phoneHref = "tel:+919100462121";
const instagramUrl = "https://www.instagram.com/muscleprime2121/";
const mapEmbedUrl =
  "https://www.google.com/maps?q=Muscle+Prime+2121,+Trimurti+Park,+Saket+College,+Kalyan+East,+Maharashtra+421306&z=17&output=embed";

const gymSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "Muscle Prime 2121",
  telephone: "+91 91004 62121",
  hasMap: mapsUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Trimurti Park Saket, Shambhaji Nagar, Neelkanthnagar, Hanuman Nagar",
    addressLocality: "Kalyan",
    addressRegion: "Maharashtra",
    postalCode: "421306",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "05:00",
      closes: "23:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "94",
  },
  sameAs: [instagramUrl],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gymSchema) }}
      />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Muscle Prime home">
          <span className="brand-mark" aria-hidden="true">MP</span>
          <span className="brand-copy">
            <strong>Muscle Prime 2121</strong>
            <small>Trimurti Park · Kalyan East</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#training">Training</a>
          <a href="#about">About</a>
          <a href="#visit">Visit</a>
        </nav>

        <a className="header-cta" href={phoneHref}>
          Call the gym <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Open daily · 5:00 AM–11:00 PM
          </p>

          <h1>
            Your strongest
            <span>hour starts here.</span>
          </h1>

          <p className="hero-lede">
            A Kalyan East training space for strength, cardio, HIIT, group
            fitness and personal coaching—at Trimurti Park near Saket College.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={phoneHref}>
              <span>Start with a call</span>
              <span className="button-icon" aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href={mapsUrl} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </div>

          <div className="hero-proof" aria-label="Gym highlights">
            <div><strong>4.4</strong><span>Google rating</span></div>
            <div><strong>94</strong><span>Google reviews</span></div>
            <div><strong>7 days</strong><span>open each week</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-grid" />
          <div className="visual-kicker">Trimurti Park / Kalyan East</div>
          <div className="visual-type">
            <span>MOVE</span><span>WITH</span><span>INTENT</span>
          </div>
          <div className="plate plate-one"><span>20</span></div>
          <div className="plate plate-two"><span>10</span></div>
          <div className="barbell-line" />
          <div className="visual-tag">Strength / Cardio / Group fitness</div>
        </div>
      </section>

      <aside className="location-ribbon" aria-label="Gym location">
        <span className="ribbon-label">Find your floor</span>
        <p>Trimurti Park, near Saket College, Kalyan East</p>
        <a href={mapsUrl} target="_blank" rel="noreferrer">
          Open the Google Maps listing <span aria-hidden="true">→</span>
        </a>
      </aside>

      <section className="training-section" id="training">
        <div className="section-heading">
          <p className="section-label">What&apos;s on the floor</p>
          <h2>
            Train for the
            <span>long game.</span>
          </h2>
          <p>
            Build strength, improve endurance and move with purpose. Choose
            your zone, set your pace and ask a coach when you need direction.
          </p>
        </div>

        <div className="program-grid">
          <article className="program-card card-signal">
            <span className="program-number">01</span>
            <div className="program-graphic strength-graphic" aria-hidden="true">
              <span /><i /><span />
            </div>
            <div>
              <p>Build your base</p>
              <h3>Strength floor</h3>
              <span>Free weights · Resistance equipment</span>
            </div>
          </article>

          <article className="program-card card-dark">
            <span className="program-number">02</span>
            <div className="program-graphic cardio-graphic" aria-hidden="true">
              <span /><span /><span /><span />
            </div>
            <div>
              <p>Raise your pace</p>
              <h3>Cardio &amp; HIIT</h3>
              <span>Endurance · Conditioning · High intensity</span>
            </div>
          </article>

          <article className="program-card card-paper">
            <span className="program-number">03</span>
            <div className="program-graphic crossfit-graphic" aria-hidden="true">
              <span /><i />
            </div>
            <div>
              <p>Train together</p>
              <h3>Yoga &amp; Zumba</h3>
              <span>Group movement · Mobility · Energy</span>
            </div>
          </article>

          <article className="program-card card-ember">
            <span className="program-number">04</span>
            <div className="program-graphic coach-graphic" aria-hidden="true">
              <span>MP</span>
            </div>
            <div>
              <p>Get a clear plan</p>
              <h3>Personal training</h3>
              <span>Technique cues · One-to-one guidance</span>
            </div>
          </article>
        </div>
      </section>

      <div className="marquee" aria-label="Training values">
        <div>
          <span>Strength</span><i>✦</i><span>Endurance</span><i>✦</i>
          <span>Consistency</span><i>✦</i><span>Community</span><i>✦</i>
        </div>
      </div>

      <section className="about-section" id="about">
        <div className="about-intro">
          <p className="section-label light">Why Muscle Prime</p>
          <h2>
            Local energy.
            <span>Serious training.</span>
          </h2>
        </div>

        <div className="about-story">
          <p className="story-lede">
            Muscle Prime 2121 is a gym at Trimurti Park in Kalyan East, close
            to Saket College and open from early morning until late evening.
          </p>
          <p>
            Members highlight the range of equipment, trainer guidance and long
            opening hours. Its public listing includes strength training,
            cardio, HIIT, yoga, Zumba and personal training.
          </p>

          <div className="about-facts">
            <div><strong>05:00</strong><span>First session</span></div>
            <div><strong>23:00</strong><span>Floor closes</span></div>
            <div><strong>Near</strong><span>Saket College</span></div>
          </div>

          <a className="text-link light-link" href={instagramUrl} target="_blank" rel="noreferrer">
            See the latest on Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="review-section" aria-labelledby="reviews-title">
        <div className="rating-lockup">
          <span className="rating-stars" aria-hidden="true">★★★★<i>★</i></span>
          <strong>4.4</strong>
          <p>Google listing rating</p>
          <small>Rating checked Aug 2026</small>
        </div>

        <div className="review-copy">
          <p className="section-label">Member signal</p>
          <h2 id="reviews-title">A gym people keep coming back to.</h2>
          <p>
            The Google listing is reported at 4.4 from 94 reviews. Recent
            public review summaries also highlight supportive trainers,
            well-maintained equipment, a clean environment and positive energy.
          </p>
          <a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">
            View the Google listing <span aria-hidden="true">↗</span>
          </a>
        </div>

        <aside className="review-note">
          <span>Most mentioned</span>
          <ul>
            <li>Trainer guidance</li>
            <li>Equipment choice</li>
            <li>Extended hours</li>
          </ul>
        </aside>
      </section>

      <section className="visit-section" id="visit">
        <div className="map-wrap">
          <iframe
            title="Map showing Muscle Prime 2121 at Trimurti Park, Kalyan East"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className="map-button" href={mapsUrl} target="_blank" rel="noreferrer">
            Open in Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="visit-copy">
          <p className="section-label">Come by today</p>
          <h2>Easy to find. Built for consistency.</h2>

          <div className="visit-detail">
            <span>Address</span>
            <p>
              Trimurti Park Saket, Shambhaji Nagar, Neelkanthnagar,<br />
              Hanuman Nagar, Kalyan, Maharashtra 421306
            </p>
          </div>

          <div className="visit-detail-grid">
            <div className="visit-detail">
              <span>Hours</span>
              <p>Monday–Sunday<br />5:00 AM–11:00 PM</p>
            </div>
            <div className="visit-detail">
              <span>Call</span>
              <p>
                <a href="tel:+919100462121">+91 91004 62121</a>
              </p>
            </div>
          </div>

          <p className="hours-note">
            Holiday hours may vary. Call before making a special trip.
          </p>

          <div className="visit-actions">
            <a className="button button-primary" href={phoneHref}>
              <span>Call Muscle Prime</span>
              <span className="button-icon" aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href={mapsUrl} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </div>
        </div>
      </section>

      <section className="faq-section" aria-labelledby="faq-title">
        <div className="faq-heading">
          <p className="section-label">Good to know</p>
          <h2 id="faq-title">Before your first session.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>What training is available?<span>+</span></summary>
            <p>
              The verified public listing includes personal training, strength
              training, bodybuilding, cardio, HIIT, yoga and Zumba. Call to
              confirm the current class timetable.
            </p>
          </details>
          <details>
            <summary>What are the membership fees?<span>+</span></summary>
            <p>
              Current fees are not published on the Google Maps listing. Call
              the gym or message its Instagram profile for the latest plans,
              inclusions and free-trial availability.
            </p>
          </details>
          <details>
            <summary>Is the entrance accessible?<span>+</span></summary>
            <p>
              The verified public listing notes a wheelchair-accessible
              entrance. Call ahead if you need any specific assistance.
            </p>
          </details>
          <details>
            <summary>What landmark should I use?<span>+</span></summary>
            <p>
              Look for Trimurti Park near Saket College in Kalyan East. Use the
              directions button for the exact route from your current location.
            </p>
          </details>
        </div>
      </section>

      <section className="final-cta">
        <p className="section-label light">Your next session</p>
        <h2>Show up. We&apos;ll meet you there.</h2>
        <div className="final-actions">
          <a className="button button-primary" href={phoneHref}>
            <span>Call +91 91004 62121</span>
            <span className="button-icon" aria-hidden="true">↗</span>
          </a>
          <a className="button button-light" href={mapsUrl} target="_blank" rel="noreferrer">
            Navigate to the gym
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="Back to top">
          <span className="brand-mark" aria-hidden="true">MP</span>
          <span className="brand-copy">
            <strong>Muscle Prime 2121</strong>
            <small>Trimurti Park · Kalyan East</small>
          </span>
        </a>
        <p>Strength · Endurance · Consistency</p>
        <div className="footer-links">
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href={mapsUrl} target="_blank" rel="noreferrer">Google Maps ↗</a>
          <a href={phoneHref}>Call ↗</a>
        </div>
      </footer>
    </main>
  );
}
