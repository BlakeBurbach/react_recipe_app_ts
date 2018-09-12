import * as React from 'react';
import './Recipes.css';

interface IRecipesProps {
    recipes: string[]
};

const Recipes: React.SFC<IRecipesProps> = props => (
    <div>
        {props.recipes.map((recipe: any) => {
            return (
                <div className="recipes__card" key={recipe.recipe_id}>
                    <img className="recipes__img" src={recipe.image_url} alt={recipe.title} />
                    <p className="t-recipes__title recipes__text">{recipe.title}</p>
                </div>
            );
        })
        }
    </div>
);

export default Recipes;