import React from 'react';
import { Grid, Typography } from '@mui/material';

const HomeTitle = () => {
  return (
    <Grid item xs={12} textAlign='center'>
      <Typography variant='h4' component='div'>
        View Commit History
      </Typography>
    </Grid>
  );
};

export default HomeTitle;
