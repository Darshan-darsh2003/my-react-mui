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
import PaidIcon from "@mui/icons-material/Paid";

import Grid from "@mui/material/Grid";

import { Element } from "./Element";

import useStyles from "./style";

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

export const Movies = () => {
  let m1 = [
    {
      img: "https://assets.voxcinemas.com/posters/P_HO00008988.jpg",
      title: "KGF",
      type: "Action,Terror",
      fund: "$19.99",
    },
    {
      img: "https://images.news18.com/ibnlive/uploads/2022/10/asmdnasbd.jpg",
      title: "Kantara",
      type: "Action,Terror,Romance",
      fund: "$14.99",
    },
    {
      img: "https://pyxis.nymag.com/v1/imgs/8b3/ac6/ca28ec3072fdc00a5b59a72a75a39ab61b-20-avengers-lede.rsquare.w700.jpg",
      title: "Avengers:Infinity War",
      type: "Action,Sci-fi",
      fund: "$19.99",
    },
    {
      img: "https://i.pinimg.com/originals/91/1a/2d/911a2db55ff3a1faa44a7e766b9a1b3e.jpg",
      title: "Avatar:The way of water",
      type: "Action,Sci-fi,Adventure",
      fund: "$29.99",
    },
  ];

  let m2 = [
    {
      img: "https://play-lh.googleusercontent.com/--3iyCm-zk7p7kbbN9n7tbOpLrxttp56piHkmymAoo4XqFoj-0eOYVhANGYRAWiD348bLqAwRSGiTR3hurM=w88-h132-rw",
      title: "Ant-man and the wasp:Quantumania",
      type: "Sci-fi & fantasy",
      fund: "$19.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/SF3wh70uc8U1_avbCZ-uUvCzEpVidpymZMlqFc0TVFUP7IYiAx25Ll_P0PKyEUcUR8nYyw-JUKQJN8PjPw=w88-h132-rw",
      title: "John wick 3:Parabellum",
      type: "UA",
      fund: "$9.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/SBjD4QHi8GrUmGiTZbrg4ZswU-3ZyeqIYmHSH_DAsZKu67Dfyz3CFpaBDHBF7tOBqTYNYLPOOdscQ6qkn0Y=w88-h132-rw",
      title: "Shazam:Fury of gods",
      type: "Action & adventure",
      fund: "$15.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/ae77lmHUY67h75bRIGrunNV1rlafUrLbXNW5JTaNzaCNMfU_2w38ERzQvVteTp3VYcZCrxKOpyadtRPDYDg=w88-h132-rw",
      title: "A man called otto",
      type: "Comedy",
      fund: "5.99",
    },
  ];

  let m3 = [
    {
      img: "https://play-lh.googleusercontent.com/9bq3zYSps8kGVfeSvF7Px23CdvalN6QzMSjhYu2yYBLqBBrQPWayerx1r-SMhRt1grBnnA=s256-rw",
      title: "The Jungle book",
      type: "Adventure",
      fund: "$16.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/FVxjH_4dUj895i4Dggqmuyjb8e8nKsc3zJxvHE88N9UDseGMGQv4gqdAnKKq2ZsKD1ERefDY6ElhZATxQJ8=s256-rw",
      title: "Godzilla vs kong",
      type: "Action",
      fund: "$16.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/SfhqrdmXoIKL2iZb__03bW3JqGH8TslBGbGrW3Q6PRVXpnhbAess6qbWiUlblgfgJzdpGO--5_mHXtdOlQ=s256-rw",
      title: "The suicide squad",
      type: "Action & thriller",
      fund: "$9.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/onvu4xQu2yejovHGDeRkXdFc5qR_1dKkewbSiRCYa84AlWouRvb0gRYAzo7h9GPitu5s=s256-rw",
      title: "The spider man",
      type: "Action & fantasy",
      fund: "$12.99",
    },
  ];

  let m4 = [
    {
      img: "https://play-lh.googleusercontent.com/1o0A5GbWCCnXPexI4Rkz4qqfCWJ-2sjwBDX0X7INA3MPgOiayTkMqiNptUCe_P643enz=s256-rw",
      title: "The boss baby",
      type: "Comedy",
      fund: "$5.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/QNJcWaArp784wtqZjjwfmfQqhIpRhjP0EpB4Wcj_wUZElj2Ie4H-nUeUsepmAV_Mibjb7QnhuNxZcaxoTGc=s256-rw",
      title: "The Batman",
      type: "Action ",
      fund: "$19.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/MyOOqCQkjXkrmBeLvO0BNqmgmlhz31bge5zAP4aJ9B1DbZE1TICmznoQ-9-b_KMBM_Q3cGERFiwSTPPdllY=s256-rw",
      title: "Chennai Express",
      type: "Comedy & romance",
      fund: "$12.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/rj07Jk53ihfyseBC0thMDJkCr3smmLCn5U7NFoNfJxxBXhfFifbFjTb0Qub_QUq3JTOl=s256-rw",
      title: "Commando",
      type: "Action",
      fund: "$9.99",
    },
  ];

  let m5 = [
    {
      img: "https://play-lh.googleusercontent.com/FSueOVoYp5o2_zrxVVB0G3GspJuFs74Qw2NbWSlA8VALpaiRh_IztyIXaR8d9BHUUNa6NDwVJXDnkV-_WLR4=s256-rw",
      title: "Rocketry:the nambi effect",
      type: "Science",
      fund: "$9.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/PnDUWgBHbWOLip-DQ5DBYP0uCAreCH4-O8AcL_fIgiIYS0y8I6ninHQE-WKLTsOxor87ow=s256-rw",
      title: "Gladiator",
      type: "Action",
      fund: "$11.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/d2xjeOC64wDGuLdxYjr6uuQfkHuhXy0iquoBp4lVOFQUIajRpg9fxQg5LqkEQFY-xtBH=s256-rw",
      title: "Big hero 6",
      type: "Action & sci-fi",
      fund: "$4.99",
    },
    {
      img: "https://play-lh.googleusercontent.com/PZ3lB0FHXfD_MQTOo0C6AeLjEx5kxo9O4XUt0x6l1sGOd7FxZ8asJWEJ_DawDL0WIPj82Sm3QlEbccFT_lQ=s256-rw",
      title: "Deadpool",
      type: "Comedy & action",
      fund: "$9.99",
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
            "Top free movies",
            "Top paid movies",
            "Trending movies",
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
          Best Trending Movies
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#E0DED1",
          }}
        >
          {m1.map((card, i) => {
            return <Element key={i} card={card} />;
          })}
        </Grid>

        <Typography variant="h4" className={classes.cardHeading}>
          New & notable Movies
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#E0DED1",
          }}
        >
          {m2.map((card, i) => {
            return <Element key={i} card={card} />;
          })}
        </Grid>

        <Typography variant="h4" className={classes.cardHeading}>
          Top Selling Movies
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#E0DED1",
          }}
        >
          {m3.map((card, i) => {
            return <Element key={i} card={card} />;
          })}
        </Grid>

        <Typography variant="h4" className={classes.cardHeading}>
          Top paid Movies
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#E0DED1",
          }}
        >
          {m4.map((card, i) => {
            return <Element key={i} card={card} />;
          })}
        </Grid>

        <Typography variant="h4" className={classes.cardHeading}>
          Specials
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#E0DED1",
          }}
        >
          {m5.map((card, i) => {
            return <Element key={i} card={card} />;
          })}
        </Grid>
      </Box>
    </Box>
  );
};
