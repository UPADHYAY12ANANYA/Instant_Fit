import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import './Footer.css'
import Logo from '../../assets/Logo-1.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='logo1'>
        <img src= {Logo} alt="Logo" />
      </div>
      <div>
        <p className='message'>Made with ❤️ by Ananya</p>
      </div>
    </div>
  )
}

export default Footer



{/* <Box mt="80px" bgcolor="#fff3f4">
      <Stack  alignItems= "center" px="40px" pt="24px" width="200px" height="40px">
          <img src = {Logo} alt = "" />
          <Typography  variant='h6' pb="40px" mt="40px" bgcolor="#fff3f4">
            Made with ❤️ by Ananya
          </Typography>
      </Stack>
    </Box> */}
