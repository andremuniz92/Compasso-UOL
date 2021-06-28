import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import githubIcon from '../../assets/github-icon2.png';
import {goToSearch} from '../../routes/coordinator';
import {useHistory} from 'react-router-dom';

const Header = () => {
    const history = useHistory()

    return (
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => goToSearch(history)} color="inherit">
            <img src={githubIcon} width='40px' height='40px'/>
          </Button>
          <Typography variant="h6">
            {/* Procurar por usuários */}
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default Header