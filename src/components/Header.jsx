import { AppBar, Container, Toolbar, Button } from "@mui/material";
import logo from "../assets/logo.png";

import "./Header.css";

export default function Header() {
  return (
    <header className="pokedex-navbar">
      <Container>
        <AppBar position="static">
          <Toolbar>
            <div className="image-container">
              <img src={logo} alt="Pokédex Logo" height="300" />
            </div>
          </Toolbar>
          <Toolbar>
            <Button color="inherit" href="/">Principal</Button>
            <Button color="inherit" href="/add-pokemon">Agregar Pokémon</Button>
          </Toolbar>
        </AppBar>
      </Container>
    </header>
  );
}