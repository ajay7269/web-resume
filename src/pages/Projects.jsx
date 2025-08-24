import { useState } from 'react'
import { Box, Typography, Tab, Paper} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import ProjectTab from '../components/ProjectTab'
import { projectData } from '../data/projectInfo'

const Projects = () => {
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue) => setValue(newValue)

  const reactProjects = projectData.filter(p => p.webLangUsed.includes('React JS'))
  const javascriptProjects = projectData.filter(p => p.webLangUsed.includes('Javascript'))
  const bootstrapProjects = projectData.filter(p => p.webLangUsed.includes('Bootstrap'))
  const htmlCssProjects = projectData.filter(p => p.webLangUsed.includes('CSS'))

  return (
    <Box id='projects' sx={{ background: '#fff' }} width='80%' margin='50px auto'>
      <Paper elevation={8}>
      <Typography variant='h3' component='div' p={3} fontWeight='bold' sx={{ color: '#0288d1' }}>
        PROJECTS
      </Typography>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} p={3}>
          <TabList onChange={handleChange} variant='scrollable' scrollButtons='auto'>
            <Tab label='All' value='1' />
            <Tab label='React JS' value='2' />
            <Tab label='JavaScript' value='3' />
            <Tab label='HTML5-CSS3' value='4' />
            <Tab label='Bootstrap' value='5' />
          </TabList>
        </Box>

        <TabPanel value='1'><ProjectTab data={projectData} /></TabPanel>
        <TabPanel value='2'><ProjectTab data={reactProjects} /></TabPanel>
        <TabPanel value='3'><ProjectTab data={javascriptProjects} /></TabPanel>
        <TabPanel value='4'><ProjectTab data={htmlCssProjects} /></TabPanel>
        <TabPanel value='5'><ProjectTab data={bootstrapProjects} /></TabPanel>
      </TabContext>
      </Paper>
    </Box>
  )
}

export default Projects
