import { Box } from '@mui/material'
import Navbar from '../components/Navbar'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
  return (
    <Box>
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  )
}

export default Home
