import React, {useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () =>{

  const APP_ID = "ba3ac73d";
  const APP_KEY = "f13fa3ea57e6832516091229971bdf11";

  const [recepies , setRecepies] = useState([]);
  const [search , setSearch] = useState('');
  const [query , setQuery] = useState('');

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecepies(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch(search);
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className = "search-button">submit</button>
      </form>
      <div className="recipes">
      {recepies.map(recipe => (
        <Recipe
          key = {recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
