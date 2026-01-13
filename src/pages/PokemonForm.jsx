import { Box, Typography, TextField } from "@mui/material";

export default function PokemonForm() {
  return (
    <>
    <Typography variant="h4" component="h1" gutterBottom>
        formulario de nuevo pokemons
        </Typography>
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2,}}>
        <TextField label="Nombre" name="name" variant="outlined" required />
        <TextField label="Tipo" name="type" variant="outlined" required />
        <TextField label="Peso" name="weight" variant="outlined" required />
        <TextField label="Altura" name="height" variant="outlined" required />
        <input  type="file" accept="image/*" required />

    </Box>
    </>    
  )
}