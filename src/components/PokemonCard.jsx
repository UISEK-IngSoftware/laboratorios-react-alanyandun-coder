import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function PokemonCard({ pokemon }) {
   return (
      <Card>
          <CardMedia
         component="img"
         height={200}
         image={pokemon.image}
         alt={pokemon.name}
          />
         <CardContent>
          <Typography variant="h6" component="div">
            {pokemon.name}
          </Typography>
         <Typography variant="body2" color="text.secondary">
            Type: {pokemon.type}
         </Typography>
         </CardContent>
        <CardActions>
        <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
   );
}    