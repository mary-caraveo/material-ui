import React from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";

const App = () => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '50px'
    }}>
      <Searcher />
    </Container>
  )
};

export default App;