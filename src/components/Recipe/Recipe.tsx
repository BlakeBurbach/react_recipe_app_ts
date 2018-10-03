import * as React from 'react';
import Header from '../Header/Header';

interface IRecipeProps {
    location: {
        state: {
            recipe: {}
        }
    },
}

const API_KEY = "17963c4e9b3d709bed93a750fdd4f7ea";

class Recipe extends React.Component< IRecipeProps > {
    public state = {
        activeRecipe: {
            image_url: '',
            publisher: '',
            publisher_url: '',
            recipe_id: '',
            source_url: '',
            title: '',
        }
    }

    public componentDidMount = async () => {
        const title = await this.props.location.state.recipe;
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const res = await req.json();
        this.setState({
            activeRecipe: res.recipes[0]
        });
    }

    public render() {
        const recipe = this.state.activeRecipe;
        console.log(recipe);
        return (
            <div className="App">
                <Header />
                <h2>{recipe.title}</h2>
                <div>
                    <img src={recipe.image_url} alt={recipe.title}/>
                    <p>Publisher: {recipe.publisher}</p>
                </div>
            </div>
        )
    }
}

export default Recipe;