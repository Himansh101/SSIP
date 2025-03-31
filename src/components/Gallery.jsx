import { Typography } from "@mui/material";
import React from "react";
import AIImage from "../assets/ai.jpg";
import IrrigationImage from "../assets/irrigation.jpg";
import AnalysisImage from "../assets/analysis.jpg";

const Gallery = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: 40,
      }}
    >
      <div
        style={{
          flex: 0.2,
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 40,
            letterSpacing: 4,
            fontWeight: 700,
            color: "#939393",
          }}
        >
          Who cares about your needs the most?
        </Typography>
        <Typography sx={{ fontSize: 50, fontWeight: 700, color: "#000" }}>
          We do, every step of the way!
        </Typography>
      </div>
      <div style={{ flex: 0.8, display: "flex", flexDirection: "row" }}>
        <div
          style={{
            flex: 0.5,
            padding: "0 20px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ flex: 0.45 }}>
            <div
              style={{
                padding: 10,
                borderRadius: 10,
                width: "80%",
                height: "70%",
                position: "relative",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                backgroundImage: `url(${IrrigationImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <Typography
              sx={{
                mt: 2,
                fontWeight: 300,
                fontSize: 20,
                letterSpacing: -0.5,
                color: "#333",
              }}
            >
              A Picture of Trust,
            </Typography>
            <Typography
              sx={{
                letterSpacing: 2.9,
                fontWeight: 700,
                fontSize: 15,
                color: "#000",
              }}
            >
              Story of Satisfaction.
            </Typography>
          </div>
          <div style={{ flex: 0.54 }}>
            <Typography
              sx={{
                mt: 2,
                fontWeight: 300,
                fontSize: 20,
                letterSpacing: -0.5,
                color: "#333",
              }}
            >
              From Our Fields to Your Hearts
            </Typography>
            <Typography
              sx={{
                letterSpacing: 2.9,
                fontWeight: 700,
                fontSize: 15,
                color: "#000",
              }}
            >
              – Quality in Every Frame.
            </Typography>
            <div
              style={{
                top: "50%",
                left: "60%",
                transform: "translate(-50%,-50%)",
                padding: 10,
                borderRadius: 10,
                width: "70%",
                height: "70%",
                position: "relative",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                backgroundImage: `url(${AnalysisImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            flex: 0.5,
            padding: 10,
            borderRadius: 10,
            backgroundImage: `url(${AIImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Gallery;
