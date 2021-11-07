import $ from "jquery";
export default {
  width: theme => ({
    [theme.breakpoints.up("xs")]: {
      width: "95%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "85%"
    },
    [theme.breakpoints.up("md")]: {
      width: "80%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%"
    }
  }),
  windowHeight: $(window).height(),
  flex: 1,
  margin: "0 auto",
};