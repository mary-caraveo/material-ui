import React from 'react';
import { Container } from '@mui/material';
import Searcher from './components/Searcher';

const App = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgba(144, 19, 254, 0.5)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '50px',
      }}>
      <Searcher />
    </Container>
  );
};

export default App;
