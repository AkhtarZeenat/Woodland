"use client";

import { useState } from "react";
import { products } from "@/lib/products";

export default function CollectionProducts() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() ===
            activeFilter.toLowerCase()
        );

  return (
    <>
      {/* FILTERS */}
      <div className="filters" data-reveal>
        <button
          type="button"
          className={`filter-pill ${
            activeFilter === "all" ? "active" : ""
          }`}
          onClick={() => setActiveFilter("all")}
        >
          All Doors
        </button>

        <button
          type="button"
          className={`filter-pill ${
            activeFilter === "pet" ? "active" : ""
          }`}
          onClick={() => setActiveFilter("pet")}
        >
          PET
        </button>

        <button
          type="button"
          className={`filter-pill ${
            activeFilter === "pph" ? "active" : ""
          }`}
          onClick={() => setActiveFilter("pph")}
        >
          PPH
        </button>

        <button
          type="button"
          className={`filter-pill ${
            activeFilter === "ccp" ? "active" : ""
          }`}
          onClick={() => setActiveFilter("ccp")}
        >
          CCP
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="cat-grid">
        {filteredProducts.map((p) => (
          <a
            key={p.slug}
            href={`/products/${p.slug}`}
            className="cat-item"
          >
            {/* Door Image */}
            <div className="img-reveal cat-image">
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
    </>
  );
}