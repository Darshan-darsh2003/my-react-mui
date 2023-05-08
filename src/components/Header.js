import React from "react";
import { AppBar, Container, Toolbar, Typography, colors } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled, alpha } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { GetApp } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import MuiAppBar from "@mui/material/AppBar";
import useStyles from "./style";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();
  const classes = useStyles();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      width: "400px",
      marginRight: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "450px",
      marginRight: "10px",
    },
    [theme.breakpoints.down("md")]: {
      width: "300px",
      marginRight: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400",
      fontSize: "15px",
      width: "400px",
      marginLeft: "5px",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawerWidth = 240;

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

  const TypoRes = styled("Typography")(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "22px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400",
      fontSize: "15px",
    },
  }));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // event.preventDefault();
    setValue(newValue);
    if (newValue === 0) {
      navigate("/");
    }

    if (newValue === 1) {
      navigate("/games");
    }

    if (newValue === 2) {
      navigate("/movies");
    }
  };

  return (
    <>
      <AppBar sx={{ bgcolor: "#424242", position: "fixed" }}>
        <Toolbar
          sx={{
            width: "100%",
            bgcolor: "background.red",
            color: "#fff",
          }}
        >
          <GetApp color={"#fff"} />

          <TypoRes
            sx={{
              // letterSpacing: "1px",
              whiteSpace: "nowrap",
              marginRight: "auto",
              marginLeft: "2px",
            }}
            variant="h6"
            color={"#fff"}
          >
            App Store
          </TypoRes>

          <Search
            sx={{
              display: "flex",
              alignItems: "center",
              boxShadow: 3,
              color: "#fff",
              marginLeft: "10px",
              backgroundColor: "#fff",
              color: "#000",
              transition: "0.2s ease-in",

              "&:hover": {
                WebkitTransform: "scale(1.02)",
                transform: "scale(1.02)",
                transition: "0.2s ease-out",
                backgroundColor: "#fff",
              },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: "1px" }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  sx={{ width: 32, height: 32, backgroundColor: "#ad2a1a" }}
                >
                  D
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                marginLeft: "1100px",
                marginTop: "40px",
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar
                sx={{
                  backgroundColor: "#424242",
                  marginRight: "10px",
                }}
              />{" "}
              Profile
            </MenuItem>
            <Divider />
            <MenuItem className={classes.menuItems} onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>

            <MenuItem className={classes.menuItems} onClick={handleClose}>
              <DownloadIcon sx={{ color: "#808080 ", marginRight: "10px" }} />
              Downloads
            </MenuItem>
            <MenuItem className={classes.menuItems} onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem className={classes.menuItems} onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
        <Toolbar sx={{ bgcolor: "#fff" }}>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Apps" sx={{ color: "#000" }} />
              <Tab label="Games" sx={{ color: "#000" }} />
              <Tab label="Movies" sx={{ color: "#000" }} />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {value === 0 && navigate("/")}
      {value === 1 && navigate("/games")}
      {value === 2 && navigate("/movies")} */}
    </>
  );
}
