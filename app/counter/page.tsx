"use client";

import Layout from "../components/layout";
import { useEffect, useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count өөрчлөгдөв:", count);
  }, [count]);

  const buttonStyle = {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    margin: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.2s ease",
  };

  const buttonHover = { backgroundColor: "#1d4ed8" };


  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Тоолуур 0-ээс бага болохгүй ❌");
    }
  };

  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p style={{ fontSize: "24px", marginBottom: "20px" }}>Count: {count}</p>

        {/* + Add */}
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={() => setCount(count + 1)}
        >
          + Add
        </button>

        {/* - Minus */}
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={handleMinus}
        >
          - Minus
        </button>

        {/* ×2 */}
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={() => setCount(count * 2)}
        >
          ×2
        </button>

        {/* ÷2 */}
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={() => setCount(Math.floor(count / 2))}
        >
          ÷2
        </button>

        {/* reset */}
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </Layout>
  );
}
