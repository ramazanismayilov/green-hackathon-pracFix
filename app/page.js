"use client"
import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import AllPosts from './components/AllPosts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Navbar from './components/Navbar'
import "./globals.css";


function page() {

  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(Date.now());
  }, []);

  return (
    <>
      <Container sx={{padding : "20px" , display: "flex" , flexDirection : "column" , gap : "3px" }}    >
      <Navbar/>

      <div className='fixed right-10 bottom-10 w-[100px] flex items-center justify-center rounded-full text-white h-[100px] bg-green-600'>WP</div>




      <Hero />
      <Services />
      <Pricing />
      <AllPosts/>
    </Container>
      <Footer />
    </>
  )
}

export default page