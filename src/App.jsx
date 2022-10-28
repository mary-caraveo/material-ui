import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { getUser } from './services/users';
import Searcher from './components/Searcher';
import UserCard from './containers/UserCard';
import theme from '../src/theme';
import './styles/globals.css';

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
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#22272d',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            width: { xs: '100vw', sm: '90vw', md: '90vw', lg: '100vw' },
            height: { xs: '100vh', sm: '500px' },
            borderRadius: '16px',
            margin: { sm: '0 40px' },
            padding: { xs: '0', sm: '2rem', md: '0', lg: '0' },
          }}
        >
          <Searcher inputUser={inputUser} setInputUser={setInputUser} />
          <UserCard userState={userState} />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
