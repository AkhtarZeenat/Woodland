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

      {/* =========================
          HERO
      ========================= */}

      <section className="page-hero collections-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1800"
            alt="Door catalogue"
          />
        </div>

        <div className="container collections-hero-content">
          <span className="eyebrow">
            2026 Catalogue
          </span>

          <h1 className="serif">
            Doors, By Material.
          </h1>

          <p className="kicker">
            PET, PPH and CCP panel doors — every one 100% water resistant,
            termite proof, and finished to never need paint.
          </p>
        </div>
      </section>

      {/* =========================
          COLLECTION
      ========================= */}

      <section className="section collections-section">
        <div className="container">

          {/* =========================
              FILTERS
          ========================= */}

          <div
            className="filters"
            data-reveal
          >
            <div
              className="filter-pill active"
              data-filter="all"
            >
              All Doors
            </div>

            <div
              className="filter-pill"
              data-filter="pet"
            >
              PET
            </div>

            <div
              className="filter-pill"
              data-filter="pph"
            >
              PPH
            </div>

            <div
              className="filter-pill"
              data-filter="ccp"
            >
              CCP
            </div>
          </div>

          {/* =========================
              DOOR CATALOGUE
          ========================= */}

          <div className="cat-grid">
            {products.map((p) => (
              <a
                key={p.slug}
                href={`/products/${p.slug}`}
                className="cat-item"
                data-cat={p.category}
              >
                {/* Door Image */}

                <div
                  className="img-reveal cat-image"
                >
                  <img
                    src={p.image}
                    alt={`${p.code} door`}
                  />
                </div>

                {/* Product Info */}

                <div className="item-info">
                  <h3 className="serif">
                    {p.code}
                  </h3>

                  <span>
                    {p.materialShort}
                  </span>
                </div>

                {/* Size */}

                <div className="item-size">
                  {p.size} · NW {p.nw}
                </div>

                {/* Features */}

                <div className="item-feats">
                  {p.features.slice(0, 2).map((feature) => (
                    <span key={feature}>
                      {feature}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {/* =========================
              PRODUCT SPECIFICATIONS
          ========================= */}

          <div
            className="spec-band"
            data-reveal
          >
            <div className="spec">
              <h4>
                Water Resistant
              </h4>

              <p>
                100% sealed core, safe for wet areas.
              </p>
            </div>

            <div className="spec">
              <h4>
                Scratch Resistant
              </h4>

              <p>
                Durable surface, holds up to daily use.
              </p>
            </div>

            <div className="spec">
              <h4>
                Termite Proof
              </h4>

              <p>
                No timber core, nothing for pests to eat.
              </p>
            </div>

            <div className="spec">
              <h4>
                Zero Maintenance
              </h4>

              <p>
                No polish or paint required, ever.
              </p>
            </div>

            <div className="spec">
              <h4>
                Weather Proof
              </h4>

              <p>
                Won&apos;t warp with heat, cold, or humidity.
              </p>
            </div>
          </div>

          {/* =========================
              CUSTOM SIZE CTA
          ========================= */}

          <div
            className="catalogue-cta"
            data-reveal
          >
            <span className="eyebrow">
              Need a size that&apos;s not listed?
            </span>

            <h2 className="serif catalogue-cta-title">
              We can size and finish to order.
            </h2>

            <a
              href="/contact"
              className="btn catalogue-cta-button"
            >
              Request a Quote
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}