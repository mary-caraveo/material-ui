import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { getUser } from './services/users';
import Searcher from './components/Searcher';
import UserCard from './containers/UserCard';

const App = () => {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('inputUser');

  useEffect(() => {
    const fetchUser = async (user) => {
      const userResponse = await getUser(user);
      try {
        if (userState === 'octocat') {
          localStorage.setItem('octocat', JSON.stringify(userResponse));
        }
        if (userResponse.message === 'Not found') {
          const octocat = localStorage.getItem('octocat');
          setInputUser(JSON.parse(octocat));
        }
        setUserState(userResponse);
      } catch (error) {
        setUserState(userResponse);
      }
    };

    fetchUser(inputUser);
  }, [inputUser]);

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
      <UserCard userState={userState} />
    </Container>
  );
};

export default App;
