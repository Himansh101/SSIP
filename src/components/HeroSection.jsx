import { Button, Typography } from "@mui/material";
import React from "react";
import { ArrowRightAltRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/login");
  };
  return (
    <div
      className="w-full flex pb-5 flex-col items-center justify-center text-center bg-white"
      style={{ height: "90vh", paddingTop: "50px" }}
    >
      <Typography sx={{ fontSize: 50, fontWeight: 700 }}>
        Radiant Revelries, <br /> Sparkling Summer Parties Easy!
      </Typography>
      <Typography
        style={{
          fontSize: 15,
          color: "#939393",
          fontWeight: 300,
          letterSpacing: 1,
          marginTop: 30,
        }}
      >
        Dive into the ultimate summer party experience with SumipSplash
        Celebrations! We specialize in creating vibrant events.
      </Typography>
      <Typography
        style={{
          fontSize: 15,
          color: "#939393",
          fontWeight: 300,
          letterSpacing: 1,
        }}
      >
        Revolutionizing agriculture with AI—grow smarter, farm better!
      </Typography>
      <Typography
        style={{
          fontSize: 15,
          color: "#939393",
          fontWeight: 300,
          letterSpacing: 1,
        }}
      >
        Building Strong Relationships, Together.
      </Typography>
      <Button
        onClick={loginHandler}
        sx={{
          padding: "10px 15px",
          borderRadius: 10,
          color: "#fff",
          fontWeight: 800,
          fontSize: 15,
          marginTop: 3,
          backgroundColor: "#000",
        }}
      >
        Get Started
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#fff",
            width: 30,
            height: 30,
            borderRadius: 15,
            marginLeft: 15,
          }}
        >
          <ArrowRightAltRounded style={{ color: "#fff" }} />
        </div>
      </Button>
      <Typography sx={{ fontSize: 10, color: "#939393", letterSpacing: -0.5 }}>
        *Pause or cancel service anytime.
      </Typography>
    </div>
  );
};

export default HeroSection;
