"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import AllPosts from "./components/AllPosts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import "./globals.css";
import Chatbot from "./components/Chatbot";
import Profile from "./components/Profile";

function page() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(Date.now());
  }, []);

  return (
    <>
      <Container
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "3px",
          position: "relative",
        }}
      >
        <Navbar />
        <Hero />
        <Services />
        <Pricing />
        <Profile />
        <AllPosts />
      </Container>
      <Footer />
      <Chatbot />
    </>
  );
}

export default page;
