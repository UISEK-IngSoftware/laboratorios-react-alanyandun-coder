import { Grid } from '@mui/material';
import pokemons from "../data/pokemons";
import PokemonCard from './PokemonCard'

export default function PokemonList() {
   return (
     <Grid container spacing={2} marginTop={2}>
          {pokemons.map((pokemon, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <PokemonCard key={index} pokemon={pokemon} />
            </Grid>
          ))}
        </Grid>
      
   );
}