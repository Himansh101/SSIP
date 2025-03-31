import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop:100
      }}
    >
      {/* Left Side - Branding */}
      <div>
        <Typography sx={{ fontSize: 24, fontWeight: 700 }}>VCAN</Typography>
        <Typography sx={{ fontSize: 14, color: "#aaa" }}>
          Empowering Agriculture with Innovation.
        </Typography>
      </div>

      {/* Right Side - Basic Info */}
      <div style={{ textAlign: "right" }}>
        <Typography sx={{ fontSize: 16, fontWeight: 600 }}>Contact Us</Typography>
        <Typography sx={{ fontSize: 14, color: "#aaa" }}>📍 Location: Your City, Country</Typography>
        <Typography sx={{ fontSize: 14, color: "#aaa" }}>📧 Email: info@vcan.com</Typography>
        <Typography sx={{ fontSize: 14, color: "#aaa" }}>📞 Phone: +123 456 7890</Typography>
      </div>
    </div>
  );
};

export default Footer;
