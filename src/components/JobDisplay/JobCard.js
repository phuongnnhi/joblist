import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Stack } from '@mui/material';

export default function JobCard({job, onClick}) {
  return (
    <Card sx={{ display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%', 
      marginTop: 3,
      cursor: 'pointer'}}
      onClick={() => onClick(job)}>
      <CardContent>
        <Typography variant="h6" component="div">
          {job.title}
        </Typography>
        <Stack direction="row"  sx={{ display: 'flex', marginY: 2, flexWrap: 'wrap', gap: '4px', justifyContent: 'flex-start'}}>
          {job.skills && job.skills.slice(0,4).map((skill, id) => (
            <Chip key={id} label={skill} color="primary" sx={{ fontSize: '0.8rem' }}/>
          ))}
        </Stack>
        
        <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
          <b>City</b>: {job.city}
          <br />
          <br />
          {job.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginBottom: 2 }}>
      <Button variant="contained" sx={{ fontSize: '0.7rem', marginLeft: 1 }}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
