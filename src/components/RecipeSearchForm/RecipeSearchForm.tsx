import * as React from 'react';
import './RecipeSearchForm.css';

interface IRecipeSearchFormProps {
    getRecipes: (event: any) => Promise<void>
};

const RecipeSearchForm: React.SFC<IRecipeSearchFormProps> = props => (
    <form className="App__input-form" onSubmit={props.getRecipes}>
        <p className="t-input-label">Search by Ingredient</p>
        <input className="t-input-text input-form__input" type="text" name="RecipeName" placeholder="Recipe..."/>
        <button className="t-form-button input-form__button">Search Recipes</button>
    </form>
);

export default RecipeSearchForm;