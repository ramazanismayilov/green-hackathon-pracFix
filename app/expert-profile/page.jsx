import React from 'react'
import Profile from '../components/Profile'
import Navbar from '../components/Navbar'
import { Container } from '@mui/material'

function page() {
  return (
    <Container >
      <Navbar/>
        <Profile/>
    </Container>
  )
}

export default page