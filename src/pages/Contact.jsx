import { Box, Typography, Stack, IconButton, Link, Paper } from '@mui/material'

import PlaceIcon from '@mui/icons-material/Place'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import ContactImage from '../images/contact.jpg'

const Contact = () => {
  return (
    <Box id='contact' sx={{ background: '#fff' }} width='80%' margin='50px auto'>
      <Paper elevation={8}>
        <Typography variant='h3' component='div' p={3} fontWeight='bold' sx={{ color: '#0288d1' }}>
          CONTACT
        </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <Stack direction='column' spacing={1} paddingLeft={2}>
          <Typography variant='h6'>Ajay Pal</Typography>
          <Typography variant='subtitle1' color='error'>Full Stack Developer</Typography>

          <Typography>
            <IconButton aria-label="Location" color='error'><PlaceIcon /></IconButton>
            New Delhi
          </Typography>
          <Typography>
            <IconButton aria-label="Phone" color='error'><CallIcon /></IconButton>
            +91 9106098003
          </Typography>
          <Typography>
            <IconButton aria-label="Email" color='error'><EmailIcon /></IconButton>
            apal6315@gmail.com
          </Typography>
        </Stack>

        <Stack>
          <Box component='img' src={ContactImage} alt='Contact' sx={{ maxHeight: '200px', maxWidth: '300px', borderRadius: '8px' }} />
        </Stack>
      </Box>

      <Stack direction='row' spacing={1} p={3} justifyContent='center'>
        <Link href='#' target='_blank'>
          <IconButton color='error'><LinkedInIcon sx={{ fontSize: 40 }} /></IconButton>
        </Link>
        <Link href='#' target='_blank'>
          <IconButton color='error'><GitHubIcon sx={{ fontSize: 40 }} /></IconButton>
        </Link>
      </Stack>
      </Paper>
    </Box>
  )
}

export default Contact
