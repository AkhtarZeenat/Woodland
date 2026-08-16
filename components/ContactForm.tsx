"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          contact: data.get("email"),
          interest: data.get("interest"),
          message: data.get("message"),
        }),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email us directly."
      );
    }
  }

  return (
    <form data-reveal onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email / Phone</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="you@email.com or 03xx-xxxxxxx"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="interest">Interested in</label>
        <select id="interest" name="interest">
          <option>PET Door</option>
          <option>PPH Door</option>
          <option>CCP Door</option>
          <option>Door Lock Installation</option>
          <option>Door + Lock Package</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Tell us about the project</label>
        <textarea
          id="message"
          name="message"
          placeholder="Opening size, quantity, timeline..."
        ></textarea>
      </div>
      <button type="submit" className="submit-btn" disabled={status === "submitting"}>
        {status === "submitting"
          ? "Sending..."
          : status === "success"
          ? "Sent — thank you"
          : "Send inquiry"}
      </button>
      {status === "error" && (
        <p style={{ color: "#a33", fontSize: "13px", marginTop: "-14px" }}>
          {errorMsg}
        </p>
      )}
    </form>
  );
}
