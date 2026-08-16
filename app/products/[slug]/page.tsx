import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";
import "../products.css";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.code} — ${product.materialShort} Door | WoodLand`,
    description: `${product.code}: a ${product.materialLong} (${product.materialShort}) door, ${product.size}, ${product.nw}. Water resistant, termite proof, and finished to never need paint.`,
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 3);

  return (
    <>
      <Loader />
      <Nav />

      <section className="section" style={{ paddingTop: "160px" }}>
        <div className="container">
          <a href="/collections" className="product-back">
            Back to Collections
          </a>

          <div className="product-layout">
            <div className="product-gallery img-reveal">
              <img src={product.image} alt={`${product.code} door`} />
            </div>

            <div className="product-info" data-reveal>
              <span className="tag">{product.materialShort} Door</span>
              <h1 className="serif">{product.code}</h1>
              <p className="material-full">{product.materialLong}</p>

              <div className="product-specs">
                <div className="spec-item">
                  <h5>Size</h5>
                  <p>{product.size}</p>
                </div>
                <div className="spec-item">
                  <h5>Net Weight</h5>
                  <p>{product.nw}</p>
                </div>
                <div className="spec-item">
                  <h5>Material</h5>
                  <p>{product.materialShort}</p>
                </div>
                <div className="spec-item">
                  <h5>Category</h5>
                  <p>Interior / Exterior Door</p>
                </div>
              </div>

              <div className="product-features">
                <h5>Key Features</h5>
                <ul>
                  {product.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="product-cta-row">
                <a href="/contact" className="btn">
                  Request a Quote
                </a>
                <a href="/door-locks" className="hero-link">
                  Add a matching lock
                </a>
              </div>

              <div className="product-note">
                Product photo sourced from the manufacturer&apos;s catalogue.
                Finish and colour may vary slightly from the physical
                sample — visit the showroom to confirm before ordering.
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section" style={{ background: "var(--bg-soft)" }}>
          <div className="container">
            <div className="related-heading">
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                More {product.materialShort}
              </span>
              <h2 className="serif" style={{ fontSize: "40px" }}>
                You might also like
              </h2>
            </div>
            <div className="related-grid">
              {related.map((p) => (
                <a
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="related-card"
                >
                  <div className="related-img">
                    <img src={p.image} alt={`${p.code} door`} />
                  </div>
                  <h4 className="serif">{p.code}</h4>
                  <span>
                    {p.materialShort} · {p.size}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
