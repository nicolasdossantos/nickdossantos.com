import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export default function NavigationBar({title = 'Education'}) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
        <AppBar className={classes.nav} position="static">
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h2" className={classes.title}>
              {title}
            </Typography>
            {/* <Button className={classes.downloadButton} variant="contained" color="inherit">Download PDF</Button> */}
          </Toolbar>
        </AppBar>
      </div>
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: '44px'
  },
  title: {
    flexGrow: 1,
    marginTop: '10px'
  },
  nav :{
    backgroundColor: "#3C4348"
  },
  downloadButton: {
   
        marginTop: '15px',
        backgroundColor: '#282C34',
        color: 'white',
        padding: '15px'

    }
}));