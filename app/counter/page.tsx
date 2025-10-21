"use client";

import Layout from "../components/layout";
import { useEffect, useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count өөрчлөгдөв:", count);
  }, [count]);

  const buttonStyle = {
    backgroundColor: "#2563eb", // blue-600
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    margin: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.2s ease",
  };

  const buttonHover = {
    backgroundColor: "#1d4ed8", // blue-700
  };

  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p style={{ fontSize: "20px", marginBottom: "20px" }}>Count: {count}</p>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
          onClick={() => setCount(count + 1)}
        >
          + Add
        </button>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
          onClick={() => setCount(count - 1)}
        >
          - Minus
        </button>
      </div>
    </Layout>
  );
}
