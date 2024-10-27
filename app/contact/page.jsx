"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import emailjs from "emailjs-com";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.name) newErrors.name = "Adınızı daxil edin.";
    if (!formData.surname) newErrors.surname = "Soyadınızı daxil edin.";
    if (!formData.email) newErrors.email = "Emailinizi daxil edin.";
    if (!formData.phone) newErrors.phone = "Telefon nömrənizi daxil edin.";
    if (!formData.message) newErrors.message = "Mesajınızı daxil edin.";

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    emailjs
      .send(
        "service_e1qa4yg",
        "template_ibsbc0e",
        formData,
        "NxA3z0j-2elWjKsWZ"
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        setFormData({
          name: "",
          surname: "",
          email: "",
          phone: "",
          message: "",
        });
        setSnackbarMessage("Mesajınız göndərildi!");
        setOpenSnackbar(true);
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setSnackbarMessage("Mesaj göndərilərkən xəta baş verdi.");
        setOpenSnackbar(true);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Container sx={{ padding: "20px" }}>
        <Navbar />
      </Container>
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Bizimlə Əlaqə</h1>
            <div className="flex items-center justify-center gap-3">
              <a href="/">Ana səhifə</a>
              {" / "}
              <a href="#">Bizimlə Əlaqə</a>
            </div>
          </div>
        </div>
      </div>
      <Container sx={{ padding: "40px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                backgroundColor: "#f5f5f5",
                padding: 3,
                borderRadius: "8px",
                boxShadow: 2,
              }}
            >
              <Typography variant="h6" sx={{ color: "#000", fontWeight: "bold" }}>
                Telefon:
              </Typography>
              <Typography variant="body1" sx={{ color: "#000" }}>
                <a href="tel:+994998086988" className="text-black">
                  +994 99 808 6988
                </a>
              </Typography>

              <Typography variant="h6" sx={{ color: "#000", fontWeight: "bold" }}>
                Email:
              </Typography>
              <Typography variant="body1" sx={{ color: "#000" }}>
                <a
                  href="mailto:pracfixstudio@gmail.com"
                  className="text-black"
                >
                  pracfixstudio@gmail.com
                </a>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              display="flex"
              flexDirection="column"
              gap={2}
              width="100%"
              sx={{
                backgroundColor: "#f5f5f5",
                padding: 3,
                borderRadius: "8px",
                boxShadow: 2,
              }}
            >
              {["name", "surname", "email", "phone", "message"].map((label, index) => (
                <div key={index}>
                  <TextField
                    label={label.charAt(0).toUpperCase() + label.slice(1)}
                    name={label}
                    variant="outlined"
                    fullWidth
                    multiline={label === "message"}
                    rows={label === "message" ? 4 : 1}
                    value={formData[label]}
                    onChange={handleChange}
                  />
                  {errors[label] && (
                    <Typography variant="body2" color="error">
                      {errors[label]}
                    </Typography>
                  )}
                </div>
              ))}

              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                sx={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                }}
              >
                Göndər
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Footer />
    </div>
  );
}

export default Page;
