import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarsIcon from "@mui/icons-material/Stars";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Grid from "@mui/material/Grid";
import PaidIcon from "@mui/icons-material/Paid";

import { Element } from "./Element";

import useStyles from "./style";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Apps = () => {
  let a1 = [
    {
      img: "https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc=s256-rw",
      title: "YouTube",
      type: "Video Players and Editors",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s256-rw",
      title: "Instagram",
      type: "Social",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s256-rw",
      title: "WhatsApp Messenger",
      type: "Messaging",
      fund: "Paid",
    },
    {
      img: "https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI=s256-rw",
      title: "Gmail",
      type: "Communication",
      fund: "Paid",
    },
  ];

  let a2 = [
    {
      img: "https://play-lh.googleusercontent.com/HFQH-DmzwCzgtiUisd_S-mPbUE7bfXRDyXUBEIBrM9y_nHbmEoQXz94BBHErEyOmPg=s64-rw",
      title: "Amazon kindle",
      type: "Books",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI=s64-rw",
      title: "Netflix",
      type: "Entertainment",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/L9MrbDlFtX8zfCMmyyiCRPAuVR4uWis1Ekw58TCVG5BbHIz7cyX15ahubb4ptsOZ6Sg=s64-rw",
      title: "Google One",
      type: "Productivity",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc=s64-rw",
      title: "Youtube kids",
      type: "video player",
      fund: "Free",
    },
  ];

  let a3 = [
    {
      img: "https://play-lh.googleusercontent.com/ZU9cSsyIJZo6Oy7HTHiEPwZg0m2Crep-d5ZrfajqtsH-qgUXSqKpNA2FpPDTn-7qA5Q=s64-rw",
      title: "Telegram",
      type: "Communication",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/q8hxnbpJCYfHipSOG_5tZe5jK_89T6QIsqrEklvGpMFKH8b98pDHJf2tPcn2bxEN96ON=s64-rw",
      title: "Flipkart",
      type: "shopping",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/nC95iM2f4dXas2K5x-heZ_uUVH9oc-mnlQF9phleiU2Kfk_Z1Rmwrbwv0QOdwQ__T4A=s64-rw",
      title: "Snapchat",
      type: "Photography",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/xDh13mMPU9Z0cuPybhWla8k8LsjhgMmDi7XSKKFjyazb0Rohn3EDXNq9blytK-dVfDQw=s64-rw",
      title: "Remini-AI enhancer",
      type: "Editing",
      fund: "Free",
    },
  ];

  let a4 = [
    {
      img: "https://play-lh.googleusercontent.com/2VgqYMAFw4aJvCab7sViUhWgqCkAX6Dn9uftmSM2LIgxHN9EqLOMjJFmnklvXvHBPfA=s64-rw",
      title: "MX Player Pro",
      type: "Video player",
      fund: "$24.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/Pxdgk7UjvfpihQv_WaAIndFJS0f_NcGvKGoKDN6HovXmnAQexYTgxDtPWdFRErJ_NRs=s64-rw",
      title: "FL STUDIO MOBILE",
      type: "Editing",
      fund: "$9.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/s8moWkCF9wE-ynJgNyq8k3uhhVlbQLdphqTYJWkrsLRxkFZxx9FvykHmwXYmTl_h0l8=s64-rw",
      title: "ibis Paint",
      type: "Drawing",
      fund: "$4.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/uaTwQIlEjPHHsqdpnmxLoT_XAgFtLXCYFncGAc85xs0hoEnYqLiANRwjnQXzgLcDHxs=s64-rw",
      title: "Simple Gallery Pro",
      type: "Photos & videos",
      fund: "$2.99",
    },
  ];

  let a5 = [
    {
      img: "https://play-lh.googleusercontent.com/VPqK75BwKMtTDFF6UQS6E3GYdYqzvZfddDxoKRH-DSlXIcYLN_EeSy5OXKx0bhBTtLUU=s64-rw",
      title: "To-Do List - Schedule Planner",
      type: "Productivity",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/QJObxznpklAxDNp0OVe3kAP5ZfUouIvRDO0kPj-V3MRjoRYKwj9RVTxOwG9yrlY-bgG3=s64-rw",
      title: "Evernote - Note Organizer",
      type: "Productivity",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/CPyW3M9UC_NR8IvcArOxull74LWiKL3WqfPfjfqZnWVhYR-aErm3PIDut6Q970xJkOI=s64-rw",
      title: "Device Utility",
      type: "Lifestyle",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/NWRVVF6zXvmcqspJwdFOKcQG6OlsNwpMOxED_DgB6B2BBDeWwAeWZKZxGhgqU0LQVJU=s64-rw",
      title: "Forest: Focus for Productivity",
      type: "Productivity",
      fund: "Free",
    },
  ];

  let a6 = [
    {
      img: "https://play-lh.googleusercontent.com/EoiTA0z1LdQHV2huvNc2NxXVquqAlOrwweONKMYjTYNYPK2KMQMOBR253NC6WsFm-dZl=s64-rw",
      title: "Samsung Health",
      type: "health & fitness",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/Jaw57u6LQJNeqKfjJER9MM5On66ZXopBk3rrShag1BBZrX6cZdxxIMGf8nYA_Av0meA=s64-rw ",
      title: "Kinemaster",
      type: "Video editing",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/qOmAdksC9eyOzYwQwx0faLL0EGvEKblQmuYVgtPcDA7B53-tyd0cEtrjmIFxN5qH5Q=s64-rw",
      title: "Applock",
      type: "Security",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/ldcQMpP7OaVmglCF6kGas9cY_K0PsJzSSosx2saw9KF1m3RHaEXpH_9mwBWaYnkmctk=s64-rw",
      title: "Messenger",
      type: "communication",
      fund: "Free",
    },
  ];

  let a7 = [
    {
      img: "https://play-lh.googleusercontent.com/QtxELma_6y1jezI8QKqVtI8Tb0flMhPjIAzU-VSZ2jz7RwriCENXQk4M6MvUyVi5qg=s256-rw",
      title: "Sony Liv-watch live tv and shows",
      type: "Entertainment",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/MmLkAp-x9OvA46_NgaD7dpXIsPkvb0OTJ-WlK_-7vyjZMjBMgJ0zHhsgg2NI3r0Lobc=s256-rw",
      title: "Disnep Hotstar",
      type: "Entertainment",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/1nOzeZQDXCVrjLlENKiC7queuW_mw7X2jWrWcGlKh8tQHOVreetauEReoJMuwVAiBz8=s256-rw",
      title: "Truecaller",
      type: "Communication",
      fund: "Free",
    },
    {
      img: "https://play-lh.googleusercontent.com/Rl-Cz9SdkVR-OKhXydZq0cVMocSSolBsox3PxIe_I2dy-6wXIc9u4gbZhT3C3MYPwg=s256-rw",
      title: "Lightroom",
      type: "Editing",
      fund: "Free",
    },
  ];

  const classes = useStyles();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          left: "1px",
          marginTop: "110px",
          top: "15px",
          height: "30px",
          width: "40px",
          background: "transparent",
          color: "#000",
          boxShadow: "none",
        }}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ marginTop: "120px" }}>
          <Typography
            variant="h6"
            sx={{
              marginTop: "10px",
              marginLeft: "10px",
              display: open ? "block" : "none",
            }}
            noWrap
            component="div"
          >
            Categories
          </Typography>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              marginLeft: "auto",
              marginTop: "10px",
              display: open ? "block" : "none",
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "Top free apps",
            "Top paid apps",
            "Trending apps",
            "Specials",
            "Others",
          ].map((text, index) => (
            <ListItem
              className={classes.listItem}
              key={text}
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index === 0 ? (
                    <WhatshotIcon className={classes.firstIcon} />
                  ) : (
                    ""
                  )}
                  {index === 1 ? (
                    <PaidIcon className={classes.secondIcon} />
                  ) : (
                    ""
                  )}
                  {index === 2 ? (
                    <TrendingUpIcon className={classes.thirdIcon} />
                  ) : (
                    ""
                  )}
                  {index === 3 ? (
                    <StarsIcon className={classes.fourthIcon} />
                  ) : (
                    ""
                  )}
                  {index === 4 ? (
                    <MoreHorizIcon className={classes.fifthIcon} />
                  ) : (
                    ""
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "50px",
          backgroundColor: "#E0DED1",
        }}
      >
        <DrawerHeader />
        <Typography
          variant="h4"
          sx={{
            paddingBottom: "10px",
            letterSpacing: "1px",
            paddingTop: "10px",
          }}
        >
          Trending Apps
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#E0DED1",
          }}
        >
          {a1.map((card, i) => {
            return <Element key={i} card={card} />;
          })}
        </Grid>

        <Typography variant="h4" className={classes.cardHeading}>
          New & notable Apps
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#E0DED1",
          }}
        >
          {a2.map((card, i) => {
            return <Element key={i} card={card} />;
          })}
        </Grid>

        <Typography variant="h4" className={classes.cardHeading}>
          Top Free Apps
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#E0DED1",
          }}
        >
          {a3.map((card, i) => {
            return <Element key={i} card={card} />;
          })}
        </Grid>

        <Typography variant="h4" className={classes.cardHeading}>
          Top paid Apps
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#E0DED1",
          }}
        >
          {a4.map((card, i) => {
            return <Element key={i} card={card} />;
          })}
        </Grid>

        <Typography variant="h4" className={classes.cardHeading}>
          Apps for Productivity
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#E0DED1",
          }}
        >
          {a5.map((card, i) => {
            return <Element key={i} card={card} />;
          })}
        </Grid>

        <Typography variant="h4" className={classes.cardHeading}>
          Apps Specials
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#E0DED1",
          }}
        >
          {a6.map((card, i) => {
            return <Element key={i} card={card} />;
          })}
        </Grid>

        <Typography variant="h4" className={classes.cardHeading}>
          Collections
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#E0DED1",
          }}
        >
          {a7.map((card, i) => {
            return <Element key={i} card={card} />;
          })}
        </Grid>
      </Box>
    </Box>
  );
};
