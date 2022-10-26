import React from 'react';
import { Grid, Avatar, Stack } from '@mui/material';
import MainInformation from '../../components/MainInformation';
import Description from '../Description';

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: { xs: '40px', md: '10px', lg: '40px' },
      }}
    >
      <Stack
        display="flex"
        justifyContent="center"
        width={{ xs: '100%', md: '100%', lg: '80%' }}
        direction={{ xs: 'column', sm: 'row', md: 'row' }}
        sx={{ alignItems: 'center' }}
      >
        <Grid
          item
          xs={6}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Avatar
            alt="GitHub User"
            src={avatar_url}
            sx={{
              width: { xs: 160, md: 200 },
              height: { xs: 160, md: 200 },
            }}
          />
        </Grid>
        <Grid item xs={12} md={7} lg={9}>
          <Stack
            direction="column"
            spacing={1}
            sx={{ margin: '25px', textAlign: 'left' }}
          >
            <MainInformation userState={userState} />
            <Description userState={userState} />
          </Stack>
        </Grid>
      </Stack>
    </Grid>
  );
};

export default UserCard;
