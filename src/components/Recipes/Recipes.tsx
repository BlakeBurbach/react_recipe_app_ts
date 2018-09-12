import * as React from 'react';

interface IRecipesProps {
    recipes: string[]
};

const Recipes: React.SFC<IRecipesProps> = props => (
    <div>
        { props.recipes.map((recipe: any) => {
                return <p key={recipe.recipe_id}>{recipe.title}</p>
            })
        }
    </div>
);

export default Recipes;