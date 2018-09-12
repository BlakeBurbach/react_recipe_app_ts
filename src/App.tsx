import * as React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Recipes from './components/Recipes/Recipes';
import RecipeSearchForm from './components/RecipeSearchForm/RecipeSearchForm';

const API_KEY = "17963c4e9b3d709bed93a750fdd4f7ea";

class App extends React.Component {
  public state = {
    recipes: []
  }

  // fetch function called by onSubmit from RecipeSearchForm to Fork2Food API
  public getRecipes = async (event: any) => {
    event.preventDefault();
    // value from text input
    const RecipeName = event.target.RecipeName.value;
    const API_CALL = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${RecipeName}&count=10`);
    const data = await API_CALL.json();
    this.setState({
      recipes: data.recipes
    });
    console.log(this.state.recipes);
  }

  public render() {
    return (
      <div className="App">
        <Header />
        <RecipeSearchForm getRecipes={this.getRecipes}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
