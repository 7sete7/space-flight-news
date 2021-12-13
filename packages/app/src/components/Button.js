import withStyles from "@mui/styles/withStyles";
import get from "lodash/get";

const Button = ({ classes, variant, children, ...props }) => {
  return (
    <button className={classes.btn} {...props}>
      {children}
    </button>
  );
};

const style = (theme) => {
  return {
    btn: {
      backgroundColor: ({ bg }) => (bg ? get(theme.palette, bg) : "none"),
    },
  };
};

export default withStyles(style)(Button);
