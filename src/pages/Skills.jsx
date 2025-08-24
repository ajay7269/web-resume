import { Box, LinearProgress, Typography, Paper } from '@mui/material'

const Skills = () => {
  const skills = [
    { name: "HTML 5", level: 80 },
    { name: "CSS 3", level: 80 },
    { name: "Bootstrap", level: 60 },
    { name: "JavaScript", level: 65 },
    { name: "React JS", level: 50 },
    { name: "TypeScript", level: 40 },
    { name: "Material UI", level: 50 },
    { name: "PHP", level: 80 },
    { name: "MySQL", level: 25 },
  ]

  return (
    <Box id='skills' sx={{ background: '#fff' }} width='80%' margin='50px auto'>
      <Paper elevation={8}>
      <Typography variant='h3' component='div' p={3} fontWeight='bold' sx={{ color: '#0288d1' }}>
        SKILLS
      </Typography>

      {skills.map(skill => (
        <Box key={skill.name} minWidth='300px' p={1}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>{skill.name}</Typography>
            <Typography>{skill.level}%</Typography>
          </Box>
          <LinearProgress variant='determinate' color='warning' value={skill.level} />
        </Box>
      ))}
      </Paper>
    </Box>
  )
}

export default Skills
