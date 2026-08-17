import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./door-locks.css";

export const metadata = {
  title: "Door Lock Solutions | WoodLand",
};

export default function DoorLocksPage() {
  return (
    <>
      <Loader />

      <Nav active="locks" />

      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1800"
            alt="Door lock hardware"
          />
        </div>
        <div className="container">
          <span className="eyebrow">Complete the Door</span>
          <h1 className="serif">
            Door Lock
            <br />
            Solutions.
          </h1>
          <p className="kicker">
            A door is only as secure as what closes it. We supply and fit
            locking hardware matched to every WoodLand door and most
            existing ones too.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="lock-grid">
            <div className="lock-card" data-reveal data-tilt>
              <div className="lock-card-img img-reveal">
                <img
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000"
                  alt="Mortise lockset"
                />
              </div>
              <div className="lock-card-body">
                <span className="tag">Mechanical</span>
                <h3 className="serif">Mortise &amp; Cylindrical Locksets</h3>
                <p>
                  Heavy-duty mortise and cylindrical locks for entrance,
                  bedroom, and commercial doors supplied in a range of
                  finishes to match your hardware.
                </p>
              </div>
            </div>
            <div className="lock-card" data-reveal data-tilt>
              <div className="lock-card-img img-reveal">
                <img
                  src="https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?q=80&w=1000"
                  alt="Smart digital lock"
                />
              </div>
              <div className="lock-card-body">
                <span className="tag">Smart</span>
                <h3 className="serif">Digital &amp; Keypad Locks</h3>
                <p>
                  Fingerprint, PIN-code, and app-controlled smart locks for
                  homes and offices that want keyless, trackable access.
                </p>
              </div>
            </div>
            <div className="lock-card" data-reveal data-tilt>
              <div className="lock-card-img img-reveal">
                <img
                  src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1000"
                  alt="Door handles and hinges"
                />
              </div>
              <div className="lock-card-body">
                <span className="tag">Hardware</span>
                <h3 className="serif">Handles, Hinges &amp; Closers</h3>
                <p>
                  Matched handle sets, heavy-duty hinges, and door closers
                  finished to complement your chosen door panel.
                </p>
              </div>
            </div>
            <div className="lock-card" data-reveal data-tilt>
              <div className="lock-card-img img-reveal">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000"
                  alt="Lock installation service"
                />
              </div>
              <div className="lock-card-body">
                <span className="tag">Service</span>
                <h3 className="serif">Installation &amp; Maintenance</h3>
                <p>
                  On-site fitting by our own technicians, plus after-sales
                  repair and replacement for both new WoodLand doors and
                  existing ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              How It Works
            </span>
            <h2 className="serif" style={{ fontSize: "52px" }}>
              From consultation to fitted lock
            </h2>
          </div>
          <div className="process" data-reveal>
            <div className="process-step">
              <h4>Consultation</h4>
              <p>
                Tell us your door type and security needs. We recommend the
                right lock system.
              </p>
            </div>
            <div className="process-step">
              <h4>Site Visit</h4>
              <p>
                Our technician measures the door and confirms hardware
                compatibility on-site.
              </p>
            </div>
            <div className="process-step">
              <h4>Fitting</h4>
              <p>
                Clean, precise installation with zero damage to your door
                panel or frame.
              </p>
            </div>
            <div className="process-step">
              <h4>Support</h4>
              <p>Ongoing servicing and warranty support for every lock we install.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="brand-band">
            <div className="brand-img img-reveal">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200"
                alt="Smart lock on WoodLand door"
              />
            </div>
            <div data-reveal>
              <span className="eyebrow">Why Bundle With Us</span>
              <h2 className="serif" style={{ fontSize: "44px", marginBottom: "24px" }}>
                One supplier. One warranty. Zero guesswork.
              </h2>
              <p
                style={{
                  color: "var(--ivory-dim)",
                  fontSize: "17px",
                  lineHeight: 1.8,
                  marginBottom: "18px",
                }}
              >
                Buying your door and lock from the same place means the
                hardware is pre-matched to the panel thickness and frame, no
                last-minute compatibility issues on install day.
              </p>
              <p
                style={{
                  color: "var(--ivory-dim)",
                  fontSize: "17px",
                  lineHeight: 1.8,
                  marginBottom: "30px",
                }}
              >
                It also means one point of contact for support, whether
                that&apos;s a squeaky hinge or a lock that needs re-coding
                two years down the line.
              </p>
              <a href="/contact" className="btn">
                Book a site visit
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="craft-banner"
        style={{
          height: "60vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2000"
          alt="Door lock detail"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "130%",
            objectFit: "cover",
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, var(--bg), rgba(248,244,236,.28) 40%, var(--bg))",
          }}
        ></div>
        <div style={{ position: "relative", zIndex: 2, textAlign: "center" }} data-reveal>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Secure It Right
          </span>
          <h2
            className="serif"
            style={{
              fontSize: "clamp(38px,5.5vw,72px)",
              textShadow: "0 6px 30px rgba(33,27,18,.15)",
            }}
          >
            Every door deserves the right lock.
          </h2>
        </div>
      </section>

      <Footer />
    </>
  );
}
