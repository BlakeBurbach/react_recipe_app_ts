import * as React from 'react';

interface IRecipesProps {
    recipes: string[]
};

const Recipes: React.SFC<IRecipesProps> = props => (
    <div>
        {props.recipes.map((recipe: any) => {
            return (
                <div key={recipe.recipe_id}>
                    <img src={recipe.image_url} alt={recipe.title} />
                    <p>{recipe.title}</p>
                </div>
            );
        })
        }
    </div>
);

export default Recipes;