"use client";

import { useState } from "react";

export default function ContactForm({ placeholder, button }) {
  const [email, setEmail] = useState("");

  function handleSubmit() {
    const trimmed = email.trim();
    if (!trimmed) return;
    const subject = encodeURIComponent("Discovery Call Request");
    const body = encodeURIComponent(
      `Hello Takumi House,\n\nI'd like to book a free Discovery Call.\n\nEmail: ${trimmed}\n`
    );
    window.location.href = `mailto:hello@takumihouse.jp?subject=${subject}&body=${body}`;
  }

  return (
    <div className="cta-form">
      <input
        className="cta-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      <button className="cta-btn" type="button" onClick={handleSubmit}>
        {button}
      </button>
    </div>
  );
}
