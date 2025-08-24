import { Box, Paper, Typography, Grid, Button, Stack } from '@mui/material'
import GetAppIcon from '@mui/icons-material/GetApp'
import VisibilityIcon from '@mui/icons-material/Visibility'
import image from '../images/139880.jpg'

const About = () => {
  return (
    <Box id='about' sx={{ width: '80%', textAlign: 'center' }} p={2} margin='64px auto'>
      <Paper elevation={8}>
        <Grid container my={3} justifyContent='space-evenly' alignItems='center'>
          <Grid item md={7}>
            <Typography variant='h2' component='div' paddingTop={4} fontWeight='bold' sx={{ color: '#0288d1' }}>
              Hello,
            </Typography>
           <Typography variant='h6' component='div' textAlign='justify' p={2}>
  I am Ajay Pal, PHP Developer with over 2 years of experience in web development. 
  I have strong expertise in Core PHP, OOP, Laravel, MySQL, JavaScript, jQuery, 
  and API integrations. Currently, I am pursuing to grow my skills covering backend 
  and database technologies to become a Full Stack Developer.
</Typography>

            <Stack spacing={2} direction='row' justifyContent='center' m={3}>
              {/* ✅ Download Resume Button */}
              <Button
                variant='contained'
                color='info'
                startIcon={<GetAppIcon />}
                href='/resume.pdf'
                download
              >
                Resume
              </Button>

              {/* View Projects Button */}
              <Button
                variant='contained'
                color='info'
                startIcon={<VisibilityIcon />}
                href='#projects'
              >
                Projects
              </Button>
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Box component='img' src={image} alt='Profile' height='280px' width='220px' margin='auto' p={2} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default About
