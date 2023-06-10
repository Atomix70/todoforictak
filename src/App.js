// import logo from './logo.svg';
import './App.css';
import { AppBar,Toolbar,Typography } from '@mui/material';
import {React} from 'react'
import MainPage from './components/MainPage';

function App() {
  return (
    <div>
         <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
        </Toolbar>
      </AppBar>
      <MainPage className="main"/>
    </div>
  );
}

export default App;
