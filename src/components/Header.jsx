import { AppBar, Container, Toolbar, Button } from "@mui/material";
import logo from "../assets/logo.png";
import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

import "./Header.css";

export default function Header() {

  const isLoggedIn = localStorage.getItem('access_token') !== null;
const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    alert('Cierre de sesión exitoso');
    navigate('/login');
  };

  return (
    <header className="pokedex-navbar">
        <AppBar position="static">
          <Toolbar>
            <div className="image-container">
              <img src={logo} alt="Pokédex Logo" height="300" />
            </div>
          </Toolbar>
          <Toolbar>
            <Button color="inherit" href="/">Principal</Button>
            {isLoggedIn && ( 
            <Button color="inherit" 
            href="/add-pokemon">
              Agregar Pokémon
              </Button>
            )}
            <Button color="inherit" onClick={handleLogout}
            >Cerrar Sesión
            </Button>
            {!isLoggedIn && (
              <Button color="inherit" href="/login">Iniciar Sesión</Button>
            )}
          </Toolbar>
        </AppBar>
    </header>
  );
}