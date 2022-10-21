import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import MainInformation from '../../components/MainInformation';

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <CardMedia component="img" alt="GitHub User" image={avatar_url} />
      </Grid>
      <Grid item xs={9}>
        <MainInformation userState={userState} />
      </Grid>
    </Grid>
  );
};

export default UserCard;
