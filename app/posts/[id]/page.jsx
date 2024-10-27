import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import PostDetails from '@/app/components/PostDetails'
import { Container } from '@mui/material'
import React from 'react'

function page() {
  return (
    <>
    <Container>
        <Navbar/>
        <PostDetails/>
    </Container>
    <Footer/>
    </>
  )
}

export default page