"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import emailjs from "emailjs-com";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Snackbar, Alert } from "@mui/material";

function page() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");
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
        setSnackbarMessage("Email uğurla göndərildi!");
        setSeverity("success");
        setOpenSnackbar(true);
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setSnackbarMessage("Email göndərərkən xəta baş verdi.");
        setSeverity("error");
        setOpenSnackbar(true);
      });
  };

  const socialMediaLinks = [
    {
      id: 1,
      icon: <FaLocationDot className="text-xl" />,
      content: "Gəncə, Azerbaycan",
      link: "https://www.google.com/maps?q=Ganja,+Azerbaycan",
    },
    {
      id: 2,
      icon: <FaPhoneAlt className="text-xl" />,
      content: "+994 99 808 6988",
      link: "https://wa.me/994998086988",
    },
    {
      id: 3,
      icon: <MdOutlineEmail className="text-xl" />,
      content: "pracfixstudio@gmail.com",
      link: "mailto:pracfixstudio@gmail.com",
    },
    {
      id: 4,
      icon: <FaInstagram className="text-xl" />,
      content: "@pracfix",
      link: "https://www.instagram.com/pracfix/",
    },
    {
      id: 5,
      icon: <FaFacebookF className="text-xl" />,
      content: "pracfix",
      link: "https://www.facebook.com/profile.php?id=61566216962404&rdid=DEf0wwnKFUAEms7l&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FGajzi1LSjibNQuX3%2F",
    },
  ];

  return (
    <>
      <Container sx={{ padding: "20px" }}>
        <Navbar />
      </Container>
      <Container sx={{ padding: "40px" }}>
        <h1 className="text-center font-semibold text-4xl mb-10">
          Bizimlə Əlaqə
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#04d18e] p-8 h-full col-span-1 border rounded-2xl">
            <h2 className="text-white text-2xl font-semibold">
              Gəlin əlaqə saxlayaq
            </h2>
            <p className="text-white font-semibold mt-3">
              İstənilən təklifə və ya sadəcə <br /> söhbətə açığıq
            </p>
            <div className="flex flex-col gap-5 mt-5">
              {socialMediaLinks.map((social) => (
                <div className="flex items-center gap-5" key={social.id}>
                  <div className="p-3 border-2 border-[#ccc] rounded-full text-white flex items-center justify-center">
                    {social.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={social.link}
                      className="text-white font-bold text-[18px]"
                    >
                      {social.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            gap={2}
            className="col-span-2"
          >
            {["name", "surname", "email", "phone", "message"].map(
              (label, index) => (
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
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#ccc",
                        },
                        "&:hover fieldset": {
                          borderColor: "#04d18e",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#04d18e",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#ccc",
                        "&.Mui-focused": {
                          color: "#04d18e",
                        },
                      },
                    }}
                  />

                  {errors[label] && (
                    <Typography
                      className="mt-2 text-[13px]"
                      variant="body2"
                      color="error"
                    >
                      {errors[label]}
                    </Typography>
                  )}
                </div>
              )
            )}

            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "5px",
                fontWeight: "bold",
                backgroundColor: "#04d18e",
                color: "white",
                "&:hover": {
                  backgroundColor: "#388e3c",
                },
              }}
            >
              Göndər
            </Button>
          </Box>
        </div>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Footer />
    </>
  );
}

export default page;