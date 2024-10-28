import React from 'react'
import Profile from '../components/Profile'
import Navbar from '../components/Navbar'
import { Container } from '@mui/material'

function page() {
  return (
    <Container sx={{padding : "20px" , display: "flex" , flexDirection : "column" , gap : "3px" , position : "relative" }}>
      <Navbar/>
        <Profile/>
    </Container>
  )
}

export default page