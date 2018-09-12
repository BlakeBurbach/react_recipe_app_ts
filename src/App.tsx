import * as React from 'react';
import './App.css';

import Header from './components/Header/Header';
import RecipeSearchForm from './components/RecipeSearchForm/RecipeSearchForm';

class App extends React.Component {

  public getRecipes = async (event: any) => {
    event.preventDefault();
    console.log('getRecipes working');
  }

  public render() {
    return (
      <div className="App">
        <Header />
        <RecipeSearchForm getRecipes={this.getRecipes}/>
      </div>
    );
  }
}

export default App;
