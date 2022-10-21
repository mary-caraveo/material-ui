import React from 'react';
import { Stack, Typography } from '@mui/material';

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;

  return (
    <>
      <Stack>
        {bio !== null ? (
          <Typography>{bio}</Typography>
        ) : (
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure illo
            illum eligendi, quia aperiam alias, sed unde necessitatibus repellat
            ratione incidunt repellendus earum aliquid! Voluptas officia
            perferendis expedita veniam laborum!
          </Typography>
        )}
      </Stack>
    </>
  );
};

export default Description;
