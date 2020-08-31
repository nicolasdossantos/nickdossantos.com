import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelopeOpen,
  faUserTie,
  faKeyboard,
  faTasks,
  faUniversity,
  faWindowClose,
  faDownload

} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'
import { Typography, Grid } from '@material-ui/core'

export default function Menu({
  selected = '',
  lastComponent = '',
  handleContact,
  handleResume,
}) {
  return (
    <div className="menu container" style={{ position: 'sticky', top: '145px' }}>
      <Link to="education" spy={true} smooth={true} duration={500}>
        <div
          className={
            selected === "education"
              ? "pbs selected pointer"
              : "pbs menuItem pointer"
          }
        >
        <Grid container spacing={1}>
            <Grid item>
              <FontAwesomeIcon className="icon" icon={faUniversity} />
            </Grid>
            <Grid item>
              <Typography variant="h5">Education</Typography>
            </Grid>
          </Grid>
        </div>
      </Link>
      <Link to="projects" spy={true} smooth={true} duration={500}>
        <div
          className={
            selected === "projects"
              ? "pbs selected pointer"
              : "pbs menuItem pointer"
          }
        >
          <Grid container spacing={1}>
            <Grid item>
              <FontAwesomeIcon className="icon" icon={faTasks} />
            </Grid>
            <Grid item>
              <Typography variant="h5">Projects</Typography>
            </Grid>
          </Grid>
        </div>
      </Link>
      <Link to="skills" spy={true} smooth={true} duration={500}>
        <div
          className={
            selected === "skills"
              ? "pbs selected pointer"
              : "pbs menuItem pointer"
          }
        >
         <Grid container spacing={1}>
            <Grid item>
              <FontAwesomeIcon className="icon" icon={faKeyboard} />
            </Grid>
            <Grid item>
              <Typography variant="h5">Technical Skills</Typography>
            </Grid>
          </Grid>
        </div>
      </Link>
      <Link to="experience" spy={true} smooth={true} duration={500}>
        <div
          className={
            selected === "experience"
              ? "pbs selected pointer"
              : "pbs menuItem pointer"
          }
        >
          <Grid container spacing={1}>
            <Grid item>
              <FontAwesomeIcon className="icon" icon={faUserTie} />
            </Grid>
            <Grid item>
              <Typography variant="h5">Experience</Typography>
            </Grid>
          </Grid>
        </div>
      </Link>

      <div
        onClick={handleContact}
        className={
          selected === "contact"
            ? "pbs selected pointer"
            : "menuItem pbs pointer"
        }
      >
       <Grid container spacing={1}>
            <Grid item>
              <FontAwesomeIcon className="icon" icon={faDownload} />
            </Grid>
            <Grid item>
              <Typography variant="h5">Download PDF</Typography>
            </Grid>
          </Grid>
      </div>
      <div
        onClick={handleContact}
        className={
          selected === "download"
            ? "pbs selected pointer"
            : "menuItem pbs pointer"
        }
      >
       <Grid container spacing={1}>
            <Grid item>
              <FontAwesomeIcon className="icon" icon={faEnvelopeOpen} />
            </Grid>
            <Grid item>
              <Typography variant="h5">Contact</Typography>
            </Grid>
          </Grid>
      </div>
      <div
        onClick={handleResume}
        className={
          selected === "contact"
            ? "pbs selected pointer"
            : "pbs menuItem pointer"
        }
      >
        <Grid container spacing={1}>
            <Grid item>
              <FontAwesomeIcon className="icon" icon={faWindowClose} />
            </Grid>
            <Grid item>
              <Typography variant="h5">Close Resume</Typography>
            </Grid>
          </Grid>
      </div>
    </div>
  )
}
