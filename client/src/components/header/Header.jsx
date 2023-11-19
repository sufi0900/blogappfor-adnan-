import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Component = styled(AppBar)`
  background: #ffffff;
  color: black;
`;

const Container = styled(Toolbar)`
  justify-content: center;

  & > a {
    color: #000;
    text-decoration: none;
    padding: 10px; /* Adjust the padding as needed */
    margin: 0; /* Reset margin to remove extra space */
  }

  @media (max-width: 600px) {
    & > a {
      display: none;
    }
  }

  @media (min-width: 601px) and (max-width: 960px) {
    & > a {
      padding: 10px; /* Adjust the padding as needed */
    }
  }

  @media (min-width: 961px) {
    & > a {
      padding: 10px; /* Adjust the padding as needed */
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const logout = async () => {
    toggleDrawer(); // Close the drawer when logging out
    navigate("/account");
  };

  return (
    <>
      <Component>
        <Container>
          {/* <Link to="/contact"></Link>
          <Link to="/contact"></Link>
          <Link to="/contact"></Link>
          <Link to="/contact"></Link> */}
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>

          <Link to="/account">LOGOUT</Link>
          {/* <Link to="/contact"></Link>
          <Link to="/contact"></Link>
          <Link to="/contact"></Link>
          <Link to="/contact"></Link> */}
          <IconButton
            onClick={toggleDrawer}
            sx={{ display: { sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Container>
      </Component>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="HOME" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={toggleDrawer}>
            <ListItemText primary="ABOUT" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/contact"
            onClick={toggleDrawer}
          >
            <ListItemText primary="CONTACT" />
          </ListItem>
          <ListItem button component={Link} to="/account" onClick={logout}>
            <ListItemText primary="LOGOUT" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
