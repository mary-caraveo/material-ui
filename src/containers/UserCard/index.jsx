import React from 'react';
import { Grid, Avatar, Stack } from '@mui/material';
import MainInformation from '../../components/MainInformation';
import Description from '../Description';

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Grid container spacing={2} sx={{ marginTop: '15px' }}>
      <Grid item xs={3}>
        <Avatar
          alt="GitHub User"
          src={avatar_url}
          sx={{
            width: '100%',
            height: 'auto',
            marginLeft: '5px',
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack direction="column" spacing={1} sx={{ margin: '30px' }}>
          <MainInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserCard;
