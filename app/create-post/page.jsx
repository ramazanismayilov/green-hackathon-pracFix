import { Container } from '@mui/material'
import React from 'react'
import CreatePost from '../components/CreatePost'

function page() {
  return (
    <Container sx={{padding : "20px"}} >
      <CreatePost/>
    </Container>
  )
}

export default page