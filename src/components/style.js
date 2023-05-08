import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    padding: "60px",
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "50px",
  },
  cardGrid: {
    padding: "28px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    transition: "0.2s ease-in",

    "&:hover": {
      WebkitTransform: "scale(1.02)",
      transform: "scale(1.02)",
      boxShadow: "0 0 5px rgba(0,0,0,0.5)",
      transition: "0.2s ease-out",
    },
  },
  menuItems: {
    "&:hover": {
      WebkitTransform: "scale(1.02)",
      transform: "scale(1.02)",
      // boxShadow: "0 0 5px rgba(0,0,0,0.5)",
      transition: "0.2s ease-out",
    },
  },
  listItem: {
    "&:hover": {
      WebkitTransform: "scale(1.03)",
      transform: "scale(1.03)",
      transition: "0.2s ease-out",
    },
  },
  cardHeading: {
    paddingTop: "70px",
    paddingBottom: "10px",
    letterSpacing: "2px",
  },

  cardMedia: {
    paddingTop: "56.25%",
    height: "300px",
    boxShadow: "0 0 2px 2px rgba(0,0,0,0.1)",

    // objectFit: "cover",
  },
  cardContent: {
    flexGrow: 1,
  },
  firstIcon: {
    color: "#ff4500",
  },
  secondIcon: {
    color: "#FFD700",
  },
  thirdIcon: {
    color: "#00FF00",
  },
  fourthIcon: {
    color: "#800000",
  },
  fifthIcon: {
    color: "#191919",
  },
  footer: {
    backgroundColor: "#eeeeee",
    padding: "50px 0",
  },
}));

export default useStyles;
