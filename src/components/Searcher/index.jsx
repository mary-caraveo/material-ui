import React, { useState } from 'react';
import { IconButton, Stack, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = (props) => {
  const { setInputUser } = props;
  const [valueInput, setValueInput] = useState('');

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  return (
    <Stack
      direction="row"
      sx={{
        marginTop: '30px',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '6px',
      }}
    >
      <TextField
        id="outlined-basic"
        label="GitHub User"
        placeholder="Octocat"
        variant="outlined"
        color="primary"
        size="small"
        fullWidth={true}
        value={valueInput}
        onChange={onSearchValueChange}
        InputProps={{
          style: { paddingRight: '0' },
          endAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleSubmit}>
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
