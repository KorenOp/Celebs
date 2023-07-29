import React from 'react';
import './App.css';
import MockCelebs from './assets/MockCelebs.json';
import RecipeReviewCard from './Card/Card';

interface Person {
  name: string;
  birthDate: string;
  gender: string;
  role: string;
  image: string;
}

function App() {

  return (
    <>
      <div className="main-holder">
        <div className='main-headline'> Celebs</div>
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
