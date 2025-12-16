import { AppBar, Container, Toolbar } from "@mui/material";
import logo from "../assets/logo.png";

import "./Header.css";

export default function Header() {
  return (
    <header className="pokedex-navbar">
      <Container>
        <AppBar position="static">
          <Toolbar>
            <div className="image-container">
              <img src={logo} alt="Pokédex Logo" height="100" />
            </div>
          </Toolbar>
        </AppBar>
      </Container>
    </header>
  );
}