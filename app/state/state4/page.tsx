"use client";

import { useState } from "react";

export default function TextInput() {
  const [text, setText] = useState(""); // анхны утга хоосон string

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Нэрээ бичээрэй"
        onChange={(e) => setText(e.target.value)}
      />
      <p>Таны бичсэн: {text}</p>
    </div>
  );
}
