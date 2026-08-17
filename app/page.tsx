import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getProductBySlug } from "@/lib/products";
import "./home.css";

export default function HomePage() {
  const featured = ["zf-6813", "lb2601-15-122", "26p1-10-lb205"]
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getProductBySlug>>[];

  return (
    <>
      <Loader />

      <Nav active="home" />

      <section className="hero" id="home">
        <div className="hero-left">
          <span className="hero-eyebrow" id="heroEyebrow">
            Water Resistant · Termite Proof · Zero Maintenance
          </span>
          <h1 className="hero-title serif" id="heroTitle">
            Doors, <em>Redefined</em>.
          </h1>
          <p className="hero-sub" id="heroSub">
            Engineered PET, PPH &amp; CCP doors built for Pakistan&apos;s
            climate no polish, no paint, no compromise.
          </p>
          <div className="hero-row" id="heroRow">
            <div className="hero-cta">
              <a href="/collections">Browse Doors →</a>
            </div>
            <a href="/door-locks" className="hero-link">
              Door Locks Too
            </a>
          </div>
          <div className="hero-num" id="heroNum">
            <span className="big serif">03</span>
            <span className="lbl">Engineered Panel Systems</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="door-backdrop">
            <img src="/homepage.png" alt="Modern entrance" />
          </div>
          <div className="door-stage" id="doorStage">
            <div className="door-leaf left">
              <img src="/image.png" alt="WoodLand door leaf" />
            </div>
            <div className="door-leaf right">
              <img src="/image.png" alt="WoodLand door leaf" />
            </div>
          </div>
          <div className="hero-right-tag" id="heroTag">
            <div className="code">ZF-6813</div>
            <div className="name serif">Crystal Carbon Panel</div>
          </div>
        </div>
      </section>

      <div className="trust-strip" data-reveal>
        <div className="trust-item">
          <div className="num serif">100%</div>
          <div className="lbl">Water Resistant</div>
        </div>
        <div className="trust-item">
          <div className="num serif">0</div>
          <div className="lbl">Polish or Paint Needed</div>
        </div>
        <div className="trust-item">
          <div className="num serif">900×2100</div>
          <div className="lbl">Standard Panel Size</div>
        </div>
        <div className="trust-item">
          <div className="num serif">3</div>
          <div className="lbl">Engineered Materials</div>
        </div>
      </div>

      <section className="section" id="story">
        <div className="container">
          <div className="story-layout">
            <div className="story-img img-reveal">
              <img
                src="/4.jpeg"
                alt="WoodLand door detail"
              />
            </div>
            <div className="story-text" data-reveal>
              <span className="eyebrow">Who We Are</span>
              <h2 className="serif">
                More than
                <br />
                an entrance.
              </h2>
              <p>
                At WoodLand, we believe a door is more than just an entrance
                it&apos;s the first impression of a space. That&apos;s why we
                create doors that combine timeless design, reliable quality,
                and lasting durability.
              </p>
              <p>
                Every WoodLand door is thoughtfully crafted to complement
                modern living, offering the perfect balance of style,
                strength, and functionality from contemporary interiors to
                elegant commercial spaces.
              </p>
              <a href="/our-story" className="btn">
                More about WoodLand
              </a>
            </div>
          </div>
        </div>
      </section>

    <section className="section" style={{ paddingTop: 0 }}>
  <div className="container">

    <div
      style={{
        textAlign: "center",
        marginBottom: "70px",
      }}
    >
      <span
        className="eyebrow"
        style={{
          justifyContent: "center",
        }}
      >
        Why WoodLand
      </span>

      <h2
        className="serif"
        style={{
          fontSize: "50px",
        }}
      >
        Built for how doors actually get used
      </h2>
    </div>

    <div className="bento" data-reveal>

      {/* 01 */}
      <div className="bento-card wide brass">
        <div className="n">01</div>

        <h4 className="serif">
          No polish. No paint. Ever.
        </h4>

        <p>
          The finish is sealed into the panel, not painted on
          so there&apos;s nothing to redo, ever.
        </p>
      </div>


      {/* 02 - TALL CARD */}
      <div className="bento-card tall water-card">
        {/* <div className="bento-mini-visual">
          <span className="water-drop">💧</span>
        </div> */}

        <div className="n">02</div>

        <h4 className="serif">
          Fully water resistant
        </h4>

        <p>
          Fit them in bathrooms, kitchens, and balconies without
          a second thought.
          
        </p>
      </div>


      {/* 03 */}
      <div className="bento-card">
        <div className="n">03</div>

        <h4 className="serif">
          Termite proof
        </h4>

        <p>
          No timber core means nothing for pests to eat.
        </p>
      </div>


      {/* 04 */}
      <div className="bento-card">
        <div className="n">04</div>

        <h4 className="serif">
          Zero maintenance
        </h4>

        <p>
          No sanding, repainting, polishing, or yearly
          touch-ups required.
        </p>
      </div>


      {/* 05 */}
      <div className="bento-card " >
        <div className="n">05</div>

        <h4 className="serif">
          Built for everyday living
        </h4>

        <p>
          Designed to handle busy homes, offices, children,
          pets, and daily use.
        </p>
      </div>


      {/* 06 */}
      <div className="bento-card">
        <div className="n">06</div>

        <h4 className="serif">
          Scratch resistant
        </h4>

        <p>
          Holds up to daily knocks, keys, and pets while
          keeping its refined finish.
        </p>
      </div>


      {/* 07 */}
      <div className="bento-card wide">
        <div className="n">07</div>

        <h4 className="serif">
          Won&apos;t warp with the weather
        </h4>

        <p>
          Stable across Pakistan&apos;s heat, humidity, and
          monsoon swings — closes true, every season.
        </p>
      </div>


      {/* 08 */}
      <div className="bento-card wide">
        <div className="n">08</div>

        <h4 className="serif">
          Consistent finish, every time
        </h4>

        <p>
          What you approve in the showroom is what arrives
          on-site — with consistent colour, texture, and finish.
        </p>
      </div>

    </div>
  </div>
</section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Engineered Materials
            </span>
            <h2 className="serif" style={{ fontSize: "52px" }}>
              Three panel systems. One standard.
            </h2>
          </div>
          <div className="mat-grid">
            <div className="mat-card" data-reveal data-tilt>
              <span className="tag">PET</span>
              <h3 className="serif">Polyethylene Terephthalate</h3>
              <p>
                A dense, fully sealed panel core built for wet areas
                bathrooms, kitchens, and utility spaces where timber simply
                can&apos;t compete.
              </p>
            </div>
            <div className="mat-card" data-reveal data-tilt>
              <span className="tag">PPH</span>
              <h3 className="serif">Polypropylene Homopolymer</h3>
              <p>
                Lightweight yet rigid, PPH doors resist warping through
                humidity and temperature swings, holding their line for
                years.
              </p>
            </div>
            <div className="mat-card" data-reveal data-tilt>
              <span className="tag">CCP</span>
              <h3 className="serif">Crystal Carbon Panel</h3>
              <p>
                Our premium finish line a refined surface texture and depth
                of colour that reads closest to natural wood grain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="feat-head">
            <div>
              <span className="eyebrow">2026 Catalogue</span>
              <h2 className="serif" style={{ fontSize: "52px" }}>
                Best-Selling Doors
              </h2>
            </div>
            <a href="/collections" className="btn">
              View full collection
            </a>
          </div>
          <div className="cat-grid">
            <a href={`/products/${featured[0].slug}`} className="feat-card c1" data-tilt>
              <div className="feat-img img-reveal" style={{ aspectRatio: "4/5" }}>
                <img
                  src={featured[0].image}
                  alt={`${featured[0].code} ${featured[0].materialLong} door`}
                />
              </div>
              <div className="feat-info">
                <h3 className="serif">{featured[0].code}</h3>
                <span>
                  {featured[0].materialShort} · {featured[0].size}
                </span>
              </div>
            </a>
            <a href={`/products/${featured[1].slug}`} className="feat-card c2" data-tilt>
              <div
                className="feat-img img-reveal"
                style={{ aspectRatio: "4/5.5" }}
              >
                <img
                  src={featured[1].image}
                  alt={`${featured[1].code} ${featured[1].materialLong} door`}
                />
              </div>
              <div className="feat-info">
                <h3 className="serif">{featured[1].code}</h3>
                <span>
                  {featured[1].materialShort} · {featured[1].size}
                </span>
              </div>
            </a>
            <a href={`/products/${featured[2].slug}`} className="feat-card c3" data-tilt>
              <div className="feat-img img-reveal" style={{ aspectRatio: "1" }}>
                <img
                  src={featured[2].image}
                  alt={`${featured[2].code} ${featured[2].materialLong} door`}
                />
              </div>
              <div className="feat-info">
                <h3 className="serif">{featured[2].code}</h3>
                <span>
                  {featured[2].materialShort} · {featured[2].size}
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="lock-banner">
            <div className="lock-img img-reveal">
              <img
                src="10.jpeg"
                alt="Door lock hardware"
              />
            </div>
            <div className="lock-text" data-reveal>
              <span className="eyebrow">Complete the Door</span>
              <h2 className="serif" style={{ fontSize: "44px" }}>
                Door lock supply &amp; installation.
              </h2>
              <p style={{ color: "var(--ivory-dim)", fontSize: "17px", lineHeight: 1.8 }}>
                A door is only as secure as what closes it. Alongside our
                door range, WoodLand supplies and fits a full range of
                locking hardware — matched to your door, sized to your
                opening.
              </p>
              <ul>
                <li>Mortise &amp; cylindrical locksets</li>
                <li>Smart digital &amp; keypad locks</li>
                <li>Handles, hinges &amp; door closers</li>
                <li>On-site fitting and after-sales support</li>
              </ul>
              <a href="/door-locks" className="btn">
                Explore lock solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="craft-banner">
        <img
          src="/5.jpeg"
          alt="Door surface finish"
          id="craftImg"
        />
        <div className="craft-content" data-reveal>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Zero Maintenance
          </span>
          <h2 className="serif">No polish. No paint. No worry.</h2>
        </div>
      </section>

      <section className="dual-cta" data-reveal>
        <div className="cta-panel">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Ready to Choose?
          </span>
          <h3 className="serif">Browse the full catalogue</h3>
          <p>PET, PPH and CCP doors across every size and finish we stock.</p>
          <a href="/collections" className="btn">
            View Doors
          </a>
        </div>
        <div className="cta-panel">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Need It Fitted?
          </span>
          <h3 className="serif">Get a free quote</h3>
          <p>
            Send us your opening size and we&apos;ll reply within one
            business day.
          </p>
          <a href="/contact" className="btn">
            Get a Quote
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
