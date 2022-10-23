import { Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const PaperInformation = (props) => {
  const { userState } = props;
  const { public_repos, followers, following } = userState;

  return (
    <Paper
      elevation={3}
      sx={{ borderRadius: '15px', backgroundColor: '#B270A2', color: 'white' }}>
      <Stack
        spacing={3}
        direction="row"
        sx={{ justifyContent: 'space-evenly', margin: '20px' }}>
        <Stack>
          <Typography variant="h5">Repos</Typography>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            {public_repos}
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h5">Followers</Typography>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            {followers}
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h5">Following</Typography>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            {following}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PaperInformation;
