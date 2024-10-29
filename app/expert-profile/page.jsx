import React from 'react'
import Profile from '../components/Profile'
import Navbar from '../components/Navbar'
import { Container } from '@mui/material'
import Footer from '../components/Footer'

function page() {
  return (
    <>
      <Container sx={{padding : "20px" , display: "flex" , flexDirection : "column" , gap : "3px" , position : "relative" }}>
      <Navbar/>
        <Profile/>
    </Container>
    <Footer/>
    
    </>
  
  )
}

export default page