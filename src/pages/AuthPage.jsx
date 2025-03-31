import React, { useState } from "react";
import LoginImage from "../assets/login.jpg";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { grey } from "@mui/material/colors";

const AuthPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(true);

  // ------------------------------------
  const [credentials, setCredentials] = useState({
    phone: "",
    password: "",
  });
  console.log('credentials', credentials);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();
    if (!validateNumber(credentials.phone.trim())) {
      toast.error("Invalid phone number format");
      return;
    }
    if (credentials.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      setLoading(true);
      setButtonDisable(true);
      const res = await axios.post("/api/user/login", credentials);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setButtonDisable(false);
      setLoading(false);
    }
  };

  const validateNumber = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  // Register

  const [regCredentials, setRegCredentials] = useState({
    phone: "",
    password: "",
    confirmPassword: "",
  });
  console.log('regCredentials: ', regCredentials)
  const [regButtonDisabled, setRegButtonDisabled] = useState(false);
  const [regLoading, setRegLoading] = useState(false);

  const onRegister = async (e) => {
    e.preventDefault();
    if (!validateNumber(regCredentials.phone.trim())) {
      toast.error("Invalid phone number format");
      return;
    }
    if (regCredentials.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (regCredentials.password !== regCredentials.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setRegLoading(true);
      setRegButtonDisabled(true);
      const res = await axios.post("/api/user/register", regCredentials);
      toast.success("register successful!");
      navigate("/question");
    } catch (error) {
      console.error("Register failed:", error);
      toast.error(
        error.response?.data?.message || "Register failed. Please try again."
      );
    } finally {
      setRegButtonDisabled(false);
      setRegLoading(false);
    }
  };

  // ------------------------------------

  const backHandler = () => {
    navigate("/");
  };
  const ToggleForm = () => {
    setUser(!user);
  };
  // const LoginHandler = (e) => {
  //   e.preventDefault();
  //   console.log("Login");
  // };
  // const HandlerRegister = (e) => {
  //   e.preventDefault();
  //   navigate("/question");
  //   console.log("Register");
  // };
  const formVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const imageVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      {user ? (
        <motion.div
          key={user ? "login" : "register"}
          initial="hidden"
          animate="visible"
          variants={formVariants}
          style={{
            flex: 0.35,
            backgroundColor: "#fff",
            display: "flex",
            padding: "20px",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Paper
            onClick={backHandler}
            elevation={5}
            sx={{
              width: 45,
              height: 45,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              borderRadius: "50%",
              paddingLeft: 1,
            }}
          >
            <ArrowBackIosIcon />
          </Paper>
          <Typography sx={{ fontSize: 45, marginTop: 5, color: grey[700] }}>Login</Typography>
          <Typography sx={{ fontSize: 15, marginTop: 1, color: grey[700] }}>
            Enter Your details to start with the VCAN
          </Typography>
          <form
            onSubmit={onLogin}
            style={{ marginTop: 25, width: "100%" }}>

            <TextField
              required
              fullWidth
              label="Phone"
              value={credentials?.phone || ""}
              onChange={(e) =>
                setCredentials((prev) => ({ ...prev, phone: e.target.value }))
              }
              variant="outlined"
              margin="normal"
              InputProps={{
                style: { borderRadius: 25 },
              }}
              InputLabelProps={{
                style: { color: "#333", fontWeight: 500 },
              }}
              sx={{
                input: { color: "black" }, // Ensures text inside input is black
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#3F4F44", // Hover border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#2C3930", // Focused border color
                    borderWidth: "2px", // Optional: Increase border width
                  },
                },
              }}
            />

            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials((prev) => ({ ...prev, password: e.target.value }))
              }
              variant="outlined"
              margin="normal"
              InputProps={{
                style: { borderRadius: 25 },
              }}
              InputLabelProps={{
                style: { color: "#333", fontWeight: 500 },
              }}
              sx={{
                input: { color: "black" }, // Ensures text inside input is black
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#3F4F44", // Hover border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#2C3930", // Focused border color
                    borderWidth: "2px", // Optional: Increase border width
                  },
                },
              }}
            />

            <Button
              // onClick={LoginHandler}
              variant="contained"
              disabled={buttonDisable}
              type="submit"
              sx={{
                backgroundColor: "#2C3930",
                width: "100%",
                marginTop: 5,
                borderRadius: 25,
              }}
            >
              <Typography sx={{ fontWeight: 800, fontSize: 25, color: "#fff" }}>
                Login
              </Typography>
            </Button>
          </form>
          <Typography
            sx={{
              fontSize: 15,
              marginTop: 1,
              color: "#555",
              textAlign: "center",
            }}
          >
            Don't have an account?{" "}
            <span
              onClick={ToggleForm}
              style={{
                color: "#2C3930",
                cursor: "pointer",
                fontWeight: 800,
                fontSize: "25",
                textDecoration: "underline",
              }}
            >
              Register
            </span>
          </Typography>
        </motion.div>
      ) : (
        <motion.div
          key={user ? "login" : "register"}
          initial="hidden"
          animate="visible"
          variants={formVariants}
          style={{
            flex: 0.35,
            backgroundColor: "#fff",
            display: "flex",
            padding: "20px",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Paper
            onClick={backHandler}
            elevation={5}
            sx={{
              width: 45,
              height: 45,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              borderRadius: "50%",
              paddingLeft: 1,
            }}
          >
            <ArrowBackIosIcon />
          </Paper>
          <Typography sx={{ fontSize: 45, marginTop: 5, color: grey[800] }}>Register</Typography>
          <Typography sx={{ fontSize: 15, marginTop: 1, color: grey[800] }}>
            Enter Your details to start with the VCAN
          </Typography>
          <form
            onSubmit={onRegister}
            style={{ marginTop: 25, width: "100%" }}>

            <TextField
              required
              fullWidth
              value={regCredentials.phone} // Prevents undefined errors
              onChange={(e) =>{
                console.log("Phone input:", e.target.value)
                setRegCredentials((prev) => ({ ...prev, phone: e.target.value }))
              }}
              label="Phone"
              variant="outlined"
              margin="normal"
              InputProps={{
                style: { borderRadius: 25 },
              }}
              InputLabelProps={{
                style: { color: "#333", fontWeight: 500 },
              }}
              sx={{
                input: { color: "black" }, // Ensures text inside input is black
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#3F4F44", // Hover border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#2C3930", // Focused border color
                    borderWidth: "2px", // Optional: Increase border width
                  },
                },
              }}
            />

            <TextField
              required
              fullWidth
              value={regCredentials.password}
              onChange={(e) =>
                setRegCredentials((prev) => ({ ...prev, password: e.target.value }))
              }
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              InputProps={{ style: { borderRadius: 25, borderColor: "#000" } }}
              InputLabelProps={{ style: { color: "#333", fontWeight: 500 } }}
              sx={{
                input: { color: "black" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#3F4F44", // Hover border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#2C3930", // Focused border color
                    borderWidth: "2px", // Optional: Increase border width
                  },
                },
              }}
            />
            <TextField
              required
              fullWidth
              value={regCredentials.confirmPassword}
              onChange={(e) =>{
                
                setRegCredentials({
                  ...regCredentials,
                  confirmPassword: e.target.value,
                })}
              }
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              InputProps={{ style: { borderRadius: 25, borderColor: "#000" } }}
              InputLabelProps={{ style: { color: "#333", fontWeight: 500 } }}
              sx={{
                input: { color: "black" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#3F4F44", // Hover border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#2C3930", // Focused border color
                    borderWidth: "2px", // Optional: Increase border width
                  },
                },
              }}
            />
            <Button
              // onClick={onRegister}
              disabled={regButtonDisabled}
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#2C3930",
                width: "100%",
                marginTop: 5,
                borderRadius: 25,
              }}
            >
              <Typography sx={{ fontWeight: 800, fontSize: 25, color: "#fff" }}>
                Register
              </Typography>
            </Button>
          </form>
          <Typography
            sx={{
              fontSize: 15,
              marginTop: 1,
              color: "#555",
              textAlign: "center",
            }}
          >
            Already have an account?
            <span
              onClick={ToggleForm}
              style={{
                color: "#2C3930",
                cursor: "pointer",
                fontWeight: 800,
                fontSize: "25",
                textDecoration: "underline",
              }}
            >
              Login
            </span>
          </Typography>
        </motion.div>
      )}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        style={{
          flex: 0.65,
          height: "100vh",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            height: "100%",
            borderRadius: 5,
            backgroundImage: `url(${LoginImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </motion.div>
    </Box>
  );
};

export default AuthPage;
