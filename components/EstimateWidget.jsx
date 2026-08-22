"use client";

import { } from "react";
import { waLink } from "@/lib/site";

export default function EstimateWidget() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const doorType = data.get("doorType");
    const width = data.get("width");
    const height = data.get("height");
    const quantity = data.get("quantity");
    const city = data.get("city");

    const message = `Hi WoodLand! I'd like an estimate:\n\nDoor type: ${doorType}\nSize: ${width} x ${height} mm\nQuantity: ${quantity}\nCity: ${city}`;

    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="estimate-box" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="est-doorType">Door type</label>
        <select id="est-doorType" name="doorType" required>
          <option value="PET">PET</option>
          <option value="PPH">PPH</option>
          <option value="CCP">CCP</option>
          <option value="Not sure">Not sure yet</option>
        </select>
      </div>
      <div>
        <label htmlFor="est-quantity">Quantity</label>
        <input
          id="est-quantity"
          name="quantity"
          type="number"
          min={1}
          defaultValue={1}
          required
        />
      </div>
      <div>
        <label htmlFor="est-width">Width (mm)</label>
        <input id="est-width" name="width" type="number" placeholder="900" required />
      </div>
      <div>
        <label htmlFor="est-height">Height (mm)</label>
        <input id="est-height" name="height" type="number" placeholder="2100" required />
      </div>
      <div className="field-full">
        <label htmlFor="est-city">City</label>
        <input id="est-city" name="city" type="text" placeholder="e.g. Rawalpindi" required />
      </div>
      <div className="field-full">
        <button type="submit" className="btn-wa">
          <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.25.62 4.44 1.8 6.36L3.5 29l7.8-2.24a11.98 11.98 0 0 0 4.72.96h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-4.63 1.33 1.36-4.51-.24-.37a9.86 9.86 0 0 1-1.53-5.24C5.56 9.5 10.28 4.8 16.02 4.8c5.74 0 10.44 4.7 10.44 10.44 0 5.75-4.7 10.44-10.44 10.44v.02z" />
          </svg>
          Get Estimate on WhatsApp
        </button>
      </div>
    </form>
  );
}
