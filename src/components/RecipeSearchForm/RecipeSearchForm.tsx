import * as React from 'react';

interface IRecipeSearchFormProps {
    getRecipes: (event: any) => Promise<void>
};

const RecipeSearchForm: React.SFC<IRecipeSearchFormProps> = props => (
    <form onSubmit={props.getRecipes}>
        <p>Search by Ingredient</p>
        <input type="text" name="RecipeName" placeholder="Recipe..."/>
        <button>Search Recipes</button>
    </form>
);

export default RecipeSearchForm;