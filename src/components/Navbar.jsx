import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";


//add the logic that if user exist then ,dont show the login btns
const Navbar = () => {
  const navigate=useNavigate()
  const loginHandler=()=>{
    navigate('/login')
    console.log("login")
  }
  const RegisterHandler=()=>{
    navigate('/login')
    console.log("register")
  }
  return (
    <div
    style={{
        height: 70,
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 20px",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
        zIndex: 10,
        position: "relative",
      }}
    >
      <div
        style={{
          flex: 0.2,
          display: "flex",
          flexDirection: "row",
          alignItems: "end",
        }}
      >
        <Typography sx={{ fontSize: 40, color: "#10ff10", fontWeight: 800 }}>
          V
        </Typography>
        <Typography
          sx={{
            fontSize: 30,
            color: "black",
            marginBottom: "3px",
            fontWeight: 800,
          }}
        >
          CAN
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flex: 0.6,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            color: "#000",
            padding: "0 10px",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Home
        </Typography>
        <Typography
          style={{
            color: "#000",
            padding: "0 10px",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Service
        </Typography>
        <Typography
          style={{
            color: "#000",
            padding: "0 10px",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Feedback
        </Typography>
      </div>
      <div
        style={{
          flex: 0.2,
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          height: "100%",
          gap:"10px"
        }}
      >
        <Button
        onClick={loginHandler}
          sx={{
            padding: "0 20px",
            borderRadius: 10,
            height: "35px",
            backgroundColor: "#000",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>
            LogIn
          </Typography>
        </Button>
        <Button
        onClick={RegisterHandler}
          sx={{
            padding: "0 18px",
            border: "1px solid #000",
            borderRadius: 10,
            height: "35px",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 17, color: "#000" }}>
            SignUp
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
