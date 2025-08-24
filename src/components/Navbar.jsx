import { AppBar, Toolbar, Typography, Stack, Button, Avatar, Box } from '@mui/material'
import image from '../images/139880.jpg'

const Navbar = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Box display='flex' alignItems='center' p={1}>
          <Avatar alt="Profile icon" src={image} />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} mx={1}>
            Ajay Pal
          </Typography>
        </Box>

        <Stack spacing={1} direction='row' display='flex' flexWrap='wrap'>
          <Button color='inherit' href='#about'>ABOUT</Button>
          <Button color='inherit' href='#education'>EDUCATION</Button>
          <Button color='inherit' href='#skills'>SKILLS</Button>
          <Button color='inherit' href='#projects'>PROJECTS</Button>
          <Button color='inherit' href='#contact'>CONTACT</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
