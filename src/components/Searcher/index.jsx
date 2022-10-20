import React from 'react';
import { IconButton, Stack, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = () => {
  return (
    <Stack
      direction="row"
      sx={{
        marginTop: '30px',
        width: '80%',
      }}>
      <TextField
        id="outlined-basic"
        label="GitHub User"
        placeholder="Octocat"
        variant="outlined"
        color="secondary"
        size="small"
        fullWidth={true}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default Searcher;
