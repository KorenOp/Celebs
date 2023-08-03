import './App.css';
import RecipeReviewCard from './Card/Card';
import useGetRequest from './hooks/useGetRequest';

interface Person {
  Name: string;
  BirthDate: string;
  Gender: string;
  Role: string;
  Image: string;
}

function App() {
  const { Data, loading, error } = useGetRequest<any>('https://localhost:5001/api/CelebsController');

  return (
    <div className="main-holder">
      <div className='main-headline'>Celebs</div>
      <div className='card-holder'>
        {Data.map((celeb: Person, index: number) => (
          <RecipeReviewCard
            key={index}
            {...celeb}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
