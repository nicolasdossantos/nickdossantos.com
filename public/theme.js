import { createMuiTheme } from "@material-ui/core"

const defaultTheme = createMuiTheme({})
const { breakpoints, typography } = defaultTheme

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h3: {
        fontSize: "5rem",
        [breakpoints.down("xs")]: {
          fontSize: "1 rem"
        }
      }
    }
  }
}
export default theme