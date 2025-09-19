"use client"; // khai báo để chạy phía client (browser)

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(3);

  const buttonStyle = {
    backgroundColor: "rgba(6, 182, 212, 0.2)",
    border: "2px solid #06b6d4",
    color: "#ffffff",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    margin: "0 0.5rem",
    minWidth: "120px",
    boxShadow: "0 4px 15px rgba(6, 182, 212, 0.3)"
  };

  const hoverStyle = {
    backgroundColor: "rgba(6, 182, 212, 0.3)",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(6, 182, 212, 0.4)"
  };

  return (
    <div style={{
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      padding: "1.5rem",
      borderRadius: "8px",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      textAlign: "center"
    }}>
      <h2 style={{ 
        color: "#ffffff", 
        marginBottom: "1rem",
        fontSize: "1.5rem",
        fontWeight: "600"
      }}>
        Counter (Client Component)
      </h2>
      <div style={{ 
        backgroundColor: "rgba(6, 182, 212, 0.1)",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1.5rem",
        border: "1px solid rgba(6, 182, 212, 0.3)"
      }}>
        <p style={{ 
          color: "#ffffff", 
          fontSize: "1.2rem",
          fontWeight: "600",
          margin: "0"
        }}>
          Giá trị: <span style={{ color: "#06b6d4", fontSize: "1.5rem" }}>{count}</span>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button 
          onClick={() => setCount(count - 1)}
          style={buttonStyle}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, hoverStyle);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, buttonStyle);
          }}
        >
          - Giảm
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            ...buttonStyle,
            backgroundColor: "rgba(244, 114, 182, 0.2)",
            border: "2px solid #f472b6",
            boxShadow: "0 4px 15px rgba(244, 114, 182, 0.3)"
          }}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, {
              ...hoverStyle,
              backgroundColor: "rgba(244, 114, 182, 0.3)",
              boxShadow: "0 6px 20px rgba(244, 114, 182, 0.4)"
            });
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, {
              ...buttonStyle,
              backgroundColor: "rgba(244, 114, 182, 0.2)",
              border: "2px solid #f472b6",
              boxShadow: "0 4px 15px rgba(244, 114, 182, 0.3)"
            });
          }}
        >
          + Tăng
        </button>
      </div>
    </div>
  );
}
