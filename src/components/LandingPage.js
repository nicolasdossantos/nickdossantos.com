import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Typography, Button } from '@material-ui/core'
import Typing from 'react-typing-animation'
import ContactTray from './ContactTray'

export default function LadingPage({ handleResume, isFirstTime }) {
    const classes = useStyles()
    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.landing}>
            <ContactTray />

            <Grid item style={{ marginTop: '100px' }} xs={12} >
                <Avatar alt="Nicolas dos Santos" src="Nicolas.jpg" className={classes.avatar} />
            </Grid>
            <Grid item className={classes.text} xs={12}>
                <Typing>
                    <Typography variant='h3' align='center'>Hi, I'm <span id="name">Nick dos Santos</span>,
                            <Typing.Delay ms={500} />
                        <br />
                                Full Stack Software Engineer
                        </Typography>
                </Typing>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={handleResume} className={classes.button}><Typography variant='h6'>Go To Interactive Resume</Typography></Button>
            </Grid>


        </Grid>
    );
}
const useStyles = makeStyles((theme) => ({
    "@global": {
        html: {
            [theme.breakpoints.down("xs")]: {
                fontSize: '10px'
            }
        }
    },
    landing: {
        minHeight: '100vh'
    },
    avatar: {

        width: '50%',
        height: 'auto',

        left: '25%',

    },
    text: {
        paddingTop: '15px'
    },
    button: {
        marginTop: '15px',
        backgroundColor: '#3C4348',
        color: 'white',
        padding: '15px'

    }
}));
