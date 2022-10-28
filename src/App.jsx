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
            width: { xs: '100%', md: '80vw' },
            height: { xs: '100%', md: '80vh', lg: '500px' },
            borderRadius: '16px',
            marginTop: { xs: '0', md: '30px', lg: '40px' },
            paddingBottom: { xs: '1rem', sm: '3rem', lg: '0' },
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
