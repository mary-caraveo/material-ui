import React from 'react';
import { Stack, Typography } from '@mui/material';

const MainInformation = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;

  return (
    <>
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        color={'white'}
        sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle2">{created_at}</Typography>
      </Stack>
      <Typography
        variant="caption"
        sx={{ color: 'white' }}>{`@${login}`}</Typography>
    </>
  );
};

export default MainInformation;
