import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Typography, Button, Box } from '@material-ui/core'
import Typing from 'react-typing-animation'

import { Link } from 'react-scroll'
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";
import GithubIcon from './GithubIcon';
import DownloadIcon from './DownloadIcon';

export default function ContactTray() {
  return (<>
  <Box display={{ xs: 'block', sm: 'none' }} style={{ position: 'absolute', top: '10px', left: '10px' }}>
                <Grid container spacing={0}>
                    <Grid item>
                        <EmailIcon round size={48} />
                    </Grid>
                    <Grid item>
                        <LinkedinIcon round size={48} />
                    </Grid>
                    <Grid item>
                        <GithubIcon round size={48} />
                    </Grid>
                </Grid>
            </Box>
            <Box display={{ xs: 'none', sm: 'block', lg:'none' }} style={{ position: 'absolute', top: '10px', left: '10px' }}>
                <Grid container spacing={0}>
                    <Grid item>
                        <EmailIcon round size={65} />
                    </Grid>
                    <Grid item>
                        <LinkedinIcon round size={65} />
                    </Grid>
                    <Grid item>
                        <GithubIcon round size={65} />
                    </Grid>
                </Grid>
            </Box>
            <Box display={{ xs: 'none', md: 'block' }} style={{ position: 'absolute', top: '0px', left: '0px' }}>
                <Grid container spacing={0}>
                    <Grid item>
                        <EmailIcon size={75} />
                    </Grid>
                    <Grid item>
                        <LinkedinIcon  size={75} />
                    </Grid>
                    <Grid item>
                        <GithubIcon  size={75} />
                    </Grid>
                </Grid>
            </Box>
            </>
  )}
