import { Box, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/authService";

export default function LoginPage() {
    const navigate = useNavigate();

    const [logindata, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setLoginData({
            ...logindata,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const responseData = await login(logindata.username, logindata.password);
            localStorage.setItem('access_token', responseData.access_token);
            alert('Inicio de sesión exitoso');
            navigate('/');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión');
        }
    }

    return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Typography variant="h4" gutterBottom>
            Iniciar Sesión
        </Typography>
        <TextField
        label = "Usuario"
        name = "username"
        variant = "outlined"
        value = {logindata.username}
        onChange = {handleChange}
        required
        />
        <TextField
        label = "Contraseña"
        name = "password"
        type = "password"
        variant = "outlined"
        value = {logindata.password}
        onChange = {handleChange}
        required
        />
        <Button type="submit" variant="contained" color="primary">
            Iniciar Sesión
        </Button> 
    </Box>
  )
}