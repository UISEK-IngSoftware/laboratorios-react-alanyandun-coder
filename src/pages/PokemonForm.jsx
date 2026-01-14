import { Box, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";
import { addPokemon } from "../services/PokemonService";

export default function PokemonForm() {
  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState({
    name: '',
    type: '',
    weight: '',
    height: '',
    picture: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'picture') {
      setPokemonData({ ...pokemonData, [name]: files[0] });
    } else {
      setPokemonData({ ...pokemonData, [name]: value });
    }
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPokemon = await addPokemon(pokemonData);
      alert('Pokémon agregado exitosamente');
      console.log(newPokemon);
      
      navigate('/');
    } catch (error) {
      console.error('Error al agregar Pokémon:', error);
      alert('Error al agregar Pokémon');
    }
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        formulario de nuevo pokemons
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Nombre" name="name" variant="outlined" onChange={handleChange} value={pokemonData.name} />
        <TextField label="Tipo" name="type" variant="outlined" onChange={handleChange} value={pokemonData.type} />
        <TextField label="Peso" name="weight" variant="outlined" onChange={handleChange} value={pokemonData.weight} />
        <TextField label="Altura" name="height" variant="outlined" onChange={handleChange} value={pokemonData.height} />
        <input type="file" accept="image/*" name="picture" onChange={handleChange} />
        <Button variant="contained" type="submit">Guardar</Button>
      </Box>
    </>
  );
}