import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';
import MusicPlayer from '../images/musicPlayer-card.webp';

const ProjectCard = () => {
  return (
    <Box width='300px'>
      <Card>
        <CardMedia
          component='img'
          height='144px'
          image={MusicPlayer}
        />
        <CardContent>
          <Typography variant='h5' component='div' gutterBottom>
            React
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProjectCard;
