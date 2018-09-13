import * as React from 'react';
import { Link } from 'react-router-dom';

import './Recipes.css';

interface IRecipesProps {
    recipes: string[];
};

const Recipes: React.SFC<IRecipesProps> = props => (
    <div>
        {props.recipes.map((recipe: any) => {
            return (
                <div className="recipes__card" key={recipe.recipe_id}>
                    <img className="recipes__card-img" src={recipe.image_url} alt={recipe.title} />
                    <p className="t-recipes__card-title recipes__card-text">
                        {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}
                    </p>
                    <p className="t-recipes__card-subtitle recipes__card-text">Publisher: <span className="t-recipes__card-subtitle-span recipes__card-text">{recipe.publisher}</span>
                    </p>
                    <Link className="t-recipes__card-button recipes__card-button" to={{ pathname: `/recipe/${recipe.recipe_id}` }}>
                        View
                    </Link>
                </div>
            );
        })
        }
    </div>
);

export default Recipes;