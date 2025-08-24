import { Box, Typography, Grid, Paper } from '@mui/material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'

const Education = () => {
  return (
    <Box id='education' sx={{ background: '#fff' }} width='80%' margin='50px auto'>
      <Paper elevation={8}>
      <Typography variant='h3' component='div' p={3} fontWeight='bold' sx={{ color: '#0288d1' }}>
        EDUCATION
      </Typography>

      <Grid container justifyContent='space-evenly'>
        <Grid item md={5}>
          <Timeline sx={{ "& .MuiTimelineItem-root:before": { flex: 0 } }}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color='info' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='subtitle1'>Jan 2023 - June 2023</Typography>
                <Typography variant='h6' fontWeight='bold'>Full Stack Developer</Typography>
                <Typography>Ducat IT Institute, Noida</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color='info' variant='outlined' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='subtitle1'>July - Dec 2022</Typography>
                <Typography variant='h6' fontWeight='bold'>UI Development</Typography>
                <Typography>Brain Mentors, Ghaziabad</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>

        <Grid item md={5}>
          <Timeline sx={{ "& .MuiTimelineItem-root:before": { flex: 0 } }}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color='info' variant='outlined' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='subtitle1'>2018-2022</Typography>
                <Typography variant='h6' fontWeight='bold'>B.Tech IT</Typography>
                <Typography>Dr. A.P.J. Abdul Kalam Technical University, Lucknow</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color='info' variant='outlined' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='subtitle1'>2016-2018</Typography>
                <Typography variant='h6' fontWeight='bold'>12th (U.P Board)</Typography>
                <Typography>SRI Vishwanath I.C., Uttar Pradesh</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color='info' variant='outlined' />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='subtitle1'>2014-2016</Typography>
                <Typography variant='h6' fontWeight='bold'>10th (U.P Board)</Typography>
                <Typography>SRI Vishwanath I.C., Uttar Pradesh</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
      </Paper>
    </Box>
  )
}

export default Education
