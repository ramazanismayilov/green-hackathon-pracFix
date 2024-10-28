import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import PostDetails from '@/app/components/PostDetails'
import { Container } from '@mui/material'
import React from 'react'

function page() {
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
        <Navbar/>
        <PostDetails/>
    </Container>
    <Footer/>
    </>
  )
}

export default page