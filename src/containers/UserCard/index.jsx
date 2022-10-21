import React from 'react';
import { CardMedia, Grid } from '@mui/material';

const UserCard = ({ userState: { avatar_url } }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <CardMedia component="img" alt="GitHub User" image={avatar_url} />
      </Grid>
    </Grid>
  );
};

export default UserCard;
