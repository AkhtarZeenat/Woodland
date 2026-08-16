import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import "./collections.css";

export const metadata = {
  title: "Door Catalogue | WoodLand",
};

export default function CollectionsPage() {
  return (
    <>
      <Loader />

      <Nav active="doors" />

      <section className="page-hero" style={{ minHeight: "56vh" }}>
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1800"
            alt="Door catalogue"
          />
        </div>
        <div className="container">
          <span className="eyebrow">2026 Catalogue</span>
          <h1 className="serif">Doors, By Material.</h1>
          <p className="kicker">
            PET, PPH and CCP panel doors every one 100% water resistant,
            termite proof, and finished to never need paint.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="filters" data-reveal>
            <div className="filter-pill active" data-filter="all">
              All Doors
            </div>
            <div className="filter-pill" data-filter="pet">
              PET
            </div>
            <div className="filter-pill" data-filter="pph">
              PPH
            </div>
            <div className="filter-pill" data-filter="ccp">
              CCP
            </div>
          </div>

          <div className="cat-grid">
            {products.map((p) => (
              <a
                key={p.slug}
                href={`/products/${p.slug}`}
                className="cat-item"
                data-cat={p.category}
              >
                <div className="img-reveal" style={{ aspectRatio: "4/5" }}>
                  <img src={p.image} alt={`${p.code} door`} />
                </div>
                <div className="item-info">
                  <h3 className="serif">{p.code}</h3>
                  <span>{p.materialShort}</span>
                </div>
                <div className="item-size">
                  {p.size} · NW {p.nw}
                </div>
                <div className="item-feats">
                  {p.features.slice(0, 2).map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="spec-band" data-reveal>
            <div className="spec">
              <h4>Water Resistant</h4>
              <p>100% sealed core, safe for wet areas.</p>
            </div>
            <div className="spec">
              <h4>Scratch Resistant</h4>
              <p>Durable surface, holds up to daily use.</p>
            </div>
            <div className="spec">
              <h4>Termite Proof</h4>
              <p>No timber core, nothing for pests to eat.</p>
            </div>
            <div className="spec">
              <h4>Zero Maintenance</h4>
              <p>No polish or paint required, ever.</p>
            </div>
            <div className="spec">
              <h4>Weather Proof</h4>
              <p>Won&apos;t warp with heat, cold, or humidity.</p>
            </div>
          </div>

          <div style={{ textAlign: "center" }} data-reveal>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Need a size that&apos;s not listed?
            </span>
            <h2 className="serif" style={{ fontSize: "44px", marginBottom: "34px" }}>
              We can size and finish to order.
            </h2>
            <a href="/contact" className="btn">
              Request a quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
