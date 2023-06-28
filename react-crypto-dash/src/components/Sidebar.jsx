import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useTheme, useThemeUpdate } from "./ThemeContext";
// import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Item = ({ title, to, icon, selected, setSelected }) => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      // style={{
      //   color: colors.grey[100],
      // }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<NavLink to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MenuBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  return (
    <Box
      sx={{
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px",
        },
        width: "250px",
        margin: "0px 0px",
        padding: "0px 0px",
        borderWidth: "0px",
      }}
    >
      <Sidebar collapsed={collapsed}>
        <Menu IconShape="square">
          <MenuItem
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setCollapsed(!collapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
                <Typography variant="h6">Crypto Dash</Typography>
              </Box>
            )}
          </MenuItem>
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
          </Box>
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Portfolio"
              to="/portfolio"
              icon={<AccountBalanceOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="News"
              to="/news"
              icon={<NewspaperOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="Login"
              to="/login"
              icon={<LoginOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
          </Box>
          <Box paddingLeft={collapsed ? undefined : "10%"} paddingTop="35px">
            <MenuItem
              icon={darkTheme ? <DarkModeIcon /> : <LightModeIcon />}
              onClick={toggleTheme}
            ></MenuItem>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MenuBar;
