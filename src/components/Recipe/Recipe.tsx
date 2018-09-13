import * as React from 'react';
import Header from '../Header/Header';

interface IRecipeProps {
    recipe: object;
}

class Recipe extends React.Component<IRecipeProps> {
    public render() {
        console.log(this.props);
        return (
            <div className="App">
                <Header />
                <h2>Recipe Component</h2>
            </div>
        )
    }
}

export default Recipe;