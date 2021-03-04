import React from 'react'

const RecipeCard = (props) => {
    //Take props in as a parameter.
    // Destructure recipes and index from props.
    const { recipes, index } = props
    //In the h2 tag, print 'Recipe # ' + the value of the id property from the recipe object at recipes[index].

    //In the h1 tag, print the value of the title property from the recipe object at recipes[index].

    //Escape JSX in the ul tag, and map over the ingredients property at recipes[index]. Then render an li tag for each value of the ingredients array.

    //In the h3 tag, print 'Prep Time: ' + the value of the prepTime property from the recipe object at recipes[index].

        return (
            <div className="card">
                <div className="card-number">
                    <h2>Recipe # {recipes[index].id}</h2>
                </div>
                <h1>{recipes[index].title}</h1>
                <ul>{recipes[index].ingredients.map(elem => <li>(elem)</li>)}</ul>
                <h3>Prep Time: {recipes[index].prepTime}</h3>
            </div>
        )
    
}

export default RecipeCard