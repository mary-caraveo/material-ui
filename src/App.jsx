import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { getUser } from './services/users';
import Searcher from './components/Searcher';

const App = () => {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('inputUser');

  useEffect(() => {
    const fetchUser = async (user) => {
      const userResponse = await getUser(user);
      console.log(userResponse);
    };

    fetchUser(inputUser);
  }, []);

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
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  );
};

export default App;
