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
                    <img className="recipes__card-img" src={recipe.image_url} alt={recipe.title} />
                    <p className="t-recipes__title recipes__text">
                        { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                    </p>
                    <p className="t-recipes__subtitle recipes__text">Publisher: <span className="t-recipes__subtitle-span recipes__text">{recipe.publisher}</span>
                    </p>
                    <button className="t-recipes__button recipes__button">View Recipe</button>
                </div>
            );
        })
        }
    </div>
);

export default Recipes;