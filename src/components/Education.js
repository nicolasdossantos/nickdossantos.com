import React from "react";
import Hexagon from "react-hexagon";
import Menu from "./Menu";
import { Typography, Grid, Box, List, ListItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core'
import NavigationBar from "./NavigationBar";

export default function Education({ handleResume, handleContact }) {
	const classes = useStyles()

	return (
		<div className={classes.education}>
			{/* <Box display={{ xs: 'none', sm: 'block'}}>
				<Grid container>
					<Grid item xs={12} className={classes.header}>
						<Typography  variant="h2">Education</Typography>
					</Grid>
				</Grid>
			</Box> */}
			{/* <Box display={{ xs: 'block', sm: 'none'}}> */}

			{/* </Box> */}



			<Grid container>
				<Grid item xs={3}>
					<Hexagon
						style={{
							stroke: "white",
							strokeWidth: "5"
						}}
						backgroundImage="/tu.jpg"
						className={classes.hexagon}
					/>
				</Grid>
				<Grid item xs={9} className={classes.textHeader}>
					<List disablePadding>
						<ListItem ><Typography variant="h3">Bachelor of Science: Computer Science</Typography></ListItem>
						<ListItem className={classes.indented}><Typography variant="h4">Temple University - College of Science and Technology</Typography></ListItem>
						<ListItem className={classes.indented}><Typography variant="h4">3.80 GPA (Cum Laude) | Dean's List</Typography></ListItem>
					</List>
				</Grid>



			</Grid>

			<Grid container>
				<Grid item xs={12} className={classes.relevantCourseText}>
					<Typography variant="h3">Relevant Coursework</Typography>
				</Grid>
				<Grid container style={{paddingLeft:'60px', paddingTop: '10px'}}>
				<Grid item xs={4}>
					<List disablePadding>
						<ListItem ><Typography variant="h5">Java I and II</Typography></ListItem>
						<ListItem ><Typography variant="h5">Web Application Dev</Typography></ListItem>
						<ListItem ><Typography variant="h5">Mobile Application Dev</Typography></ListItem>
					</List>
				</Grid>

				<Grid item xs={4}>
					<List disablePadding>
						<ListItem ><Typography variant="h5">Computer Systems</Typography></ListItem>
						<ListItem ><Typography variant="h5">Systems Programing</Typography></ListItem>
						<ListItem ><Typography variant="h5">Computer Architecture</Typography></ListItem>
					</List>
				</Grid>

				<Grid item xs={4}>
					<List disablePadding>
						<ListItem ><Typography variant="h5">Database Management</Typography></ListItem>
						<ListItem ><Typography variant="h5">Discrete Math I, II, and III</Typography></ListItem>
						<ListItem ><Typography variant="h5">Data Structures and Algorithms</Typography></ListItem>
					</List>
				</Grid>
				</Grid>



			</Grid>

		
		</div>





	)
}

const useStyles = makeStyles((theme) => ({
	"@global": {
		html: {
			[theme.breakpoints.down("xs")]: {
				fontSize: '10px'
			}
		}
	},
	education: {
		minHeight: '100vh'
	},
	header: {
		paddingTop: '20px',
		paddingLeft: '20px'
	},
	hexagon: {
		width: '100%',
		paddingTop: '60px',
		paddingLeft: ' 60px'
	},
	indented: {
		// paddingLeft: '50px'
	},
	textHeader: {
		paddingTop: '140px',
		paddingLeft: '40px'
	},
	relevantCourseText : {
		paddingTop: '60px',
		paddingLeft: '60px'
	}

}));



{/* <div className="title pbl">Education</div>
      <div className="row body-text pll">
        <div className="col-2 ptd">
          <Hexagon
            style={{
              background: "norepeat",
              stroke: "white",
              strokeWidth: "5",
              width: "80px",
            }}
            backgroundImage="/tu.jpg"
            className="hex"
          />
        </div>
        <div className="col-7 ptxl">
          <ul>
            <li>Temple University - College of Science and Technology</li>
            <li>Bachelor of Science: Computer Science</li>
            <li>3.80 GPA (Cum Laude) | Dean's List</li>
          </ul>
        </div>
        <div className="col-3">
          <Menu selected="education"  handleResume={handleResume} handleContact={handleContact}/>
        </div>
      </div>
      <div className="subtitle pbd"> > Relevant Coursework</div>
      <div className="body-text">
        <div className="row">
          <div className="col-4">
            <ul>
              <li>Java I & II</li>
              <li>Web Application Dev</li>
              <li>Mobile Application Dev</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>Computer Systems</li>
              <li>Systems Programing</li>
              <li>Computer Architecture</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>Database Management</li>
              <li>Discrete Math I,II & III</li>
              <li>Data Structures & Algorithms</li>
            </ul>
          </div>
        </div>
	  </div> */}

