import React from 'react';
import { Stack, Typography } from '@mui/material';
import PaperInformation from '../../components/PaperInformation';
import LocationInformation from '../../components/LocationInformation';

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;

  return (
    <>
      <Stack sx={{ justifyContent: 'center', color: 'white' }}>
        {bio !== null ? (
          <Typography variant="body1" sx={{ paddingLeft: '14px' }}>
            {bio}
          </Typography>
        ) : (
          <Typography variant="body1" sx={{ paddingLeft: '14px' }}>
            No information recorded
          </Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  );
};

export default Description;
