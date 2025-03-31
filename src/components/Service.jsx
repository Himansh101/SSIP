import React from "react";
import RobotImage from "../assets/robot.jpg";
import TemperatureImage from "../assets/temperature.jpg";
import TechImage from "../assets/tech.jpg";
import MoistureImage from "../assets/moisture.jpg";
import { Typography } from "@mui/material";

const services = [
  {
    id: 1,
    image: RobotImage,
    service_name: "AI-Driven Model for Helper",
    description: "Smart AI assistance for optimized farming operations.",
  },
  {
    id: 2,
    image: TemperatureImage,
    service_name: "Real-Time Moisture & Temperature Recording",
    description: "Monitor field conditions instantly with precision.",
  },
  {
    id: 3,
    image: TechImage,
    service_name: "Seamless User Device Connection",
    description: "Effortless integration with mobile and IoT devices.",
  },
  {
    id: 4,
    image: MoistureImage,
    service_name: "Advanced Soil Monitoring",
    description: "Real-time insights to improve soil health and yield.",
  },
];

const Service = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Typography sx={{ fontSize: 30, fontWeight: 800 }}>Our Services</Typography>
      <Typography sx={{ color: "#939393", marginBottom: 2 }}>
        Enhancing agriculture with technology and precision.
      </Typography>

      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none", // Hides scrollbar
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              minWidth: "280px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "15px",
              textAlign: "center",
              transition: "transform 0.3s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={service.image}
              alt={service.service_name}
              style={{
                width: "100%",
                borderRadius: "10px",
                height: "180px",
                objectFit: "cover",
              }}
            />
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              {service.service_name}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#555",
                padding: "0 10px",
                textAlign: "center",
                marginTop: "5px",
              }}
            >
              {service.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
