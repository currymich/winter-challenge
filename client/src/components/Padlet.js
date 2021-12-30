import React from "react";

const Padlet = () => (
  <div
    className="padlet-embed"
    style={{
      border: "1px solid rgba(0,0,0,0.1)",
      borderRadius: "2px",
      boxSizing: "border-box",
      overflow: "hidden",
      position: "relative",
      width: "100%",
      background: "#F4F4F4",
    }}
  >
    <p style={{ padding: "0", margin: "0" }} />
    <iframe
      src="https://padlet.com/embed/mp6mgumo1rcgpch7"
      frameBorder="0"
      allow="camera;microphone;geolocation"
      style={{
        width: "100%",
        height: "608px",
        display: "block",
        padding: "0",
        margin: "0",
      }}
    />
    <div style={{ padding: "8px", textAlign: "right", margin: "0" }}>
      <a
        href="https://padlet.com?ref=embed"
        style={{
          padding: "0",
          margin: "0",
          border: "none",
          display: "block",
          lineHeight: "1",
          height: "16px",
        }}
        target="_blank"
      />
    </div>
  </div>
);

export default Padlet;
