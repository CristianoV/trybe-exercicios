import Pokemon from './pokemon';
import Headers from './Header'
import data from './data'
import './App.css';

function App() {
  return (
    <>
    <Headers />
    <section className='Pokemon App'>
    {data.map((pokemon) => {
      return <Pokemon nome={ pokemon.name }
      tipo={ pokemon.type }
      imc={ `${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}` }
      img={ pokemon.image }/>
    })} 
    </section>
    </>
  );
}

export default App;
