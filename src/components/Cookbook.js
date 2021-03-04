import React, { Component } from 'react'
import RecipeCard from './RecipeCard'
import recipes from '../recipes'

class Cookbook extends Component {
    constructor(){
        super();
        this.state = {
            recipes,
            index: 0
        }
    }
    // Create two methods... one called increase, and one called decrease. In the increase method, check the value of index to see if it is less than recipes.length - 1. If so, use setState to increment index by 1.

    // In the decrease method, check to see if the value of index is greater than 0. If so, use setState to decrement index by 1.

    // Bind these methods, giving them the context of this.

    render(){
        // Pass recipes and index as props to RecipeCard.

        //Give the 'previous' button an onClick event, assigning it to the decrease method.

        //Give the 'next' button an onClick event, assigning it to the increase method.

        return (
            <div className="container">
                <RecipeCard/>
                <div className="buttons">
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
        )
    }

}

export default Cookbook