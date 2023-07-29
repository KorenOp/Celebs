import { useEffect, useState } from 'react';
import './App.css';
import MockCelebs from './assets/MockCelebs.json';
import RecipeReviewCard from './Card/Card';
import useGetRequest from './hooks/useGetRequest';


interface PokemonData {
  name: string;
  abilities: string[];
  // Add other properties from the API response if needed
}

function App() {
  const { data, loading, error } = useGetRequest<PokemonData>('https://pokeapi.co/api/v2/pokemon/ditto');

  console.log(data, loading, error);

  return (
    <>
      <div className="main-holder">
        <div className='main-headline'>Celebs</div>
        <div className='card-holder'>
          {MockCelebs.map((celeb, index) => (
            <RecipeReviewCard
              key={index}
              name={celeb.name}
              birthDate={celeb.birthDate}
              gender={celeb.gender}
              role={celeb.role}
              image={celeb.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
