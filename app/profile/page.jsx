import { Container } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import ProfilePage from '../components/ProfilePage'

function page() {
  return (
    <Container className='flex flex-col gap-5'>
        <Navbar />
        <ProfilePage/>
    </Container>
  )
}

export default page