import React from 'react';
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia, Link } from '@mui/material';

const ProjectTab = ({ data }) => {
  const projects = data;

  return (
    <Box sx={{ display: 'inline-flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
      {projects.map((project) => (
        <Card key={project.id} sx={{ maxWidth: '300px', margin: '10px', bgcolor: '#efefef', position: 'relative' }}>
          <CardMedia
            component='img'
            height='144px'
            image={project.image}
          />
          <CardContent>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <Typography variant='subtitle1' component='div'>
                {project.title}
              </Typography>
              <Button size='small' variant='outlined'>
                <Link href={project.link} color='inherit' underline="none" target='_blank' rel="noopener">
                  Go To Website
                </Link>
              </Button>
            </Box>

            <Typography variant='body2' color='text.secondary' gutterBottom paddingBottom={2}>
              {project.desc}
            </Typography>
          </CardContent>
          <CardActions sx={{ position: 'absolute', bottom: '0px', textAlign: 'left' }}>
            {project.webLangUsed.map(item => (
              <Button key={item} size='small'>{item}</Button>
            ))}
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default ProjectTab;
