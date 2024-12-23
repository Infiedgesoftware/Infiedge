import React from "react";

export default function TopUpButton() {
  return (
    <div>
      <a
        href="#top"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          backgroundColor: "var(--go-green)", // Primary button color
          color: "var(--white)", // Text/icon color
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          boxShadow: "0 4px 6px var(--go-green_50)", // Soft shadow
          textDecoration: "none",
          fontSize: "24px",
          transition: "all 0.3s ease",
          zIndex: 1000,
        }}
        className="back-top-btn"
        aria-label="Back to top"
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = "var(--go-green_50)") // Lighter green on hover
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = "var(--go-green)") // Original green color
        }
      >
        <ion-icon name="arrow-up" aria-hidden="true"></ion-icon>
      </a>
    </div>
  );
}
