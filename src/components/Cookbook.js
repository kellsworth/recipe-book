import React, { Component } from 'react'
import RecipeCard from './RecipeCard'
import Nav from './Nav'
import recipes from '../recipes'

class Cookbook extends Component {
    constructor(){
        super();
        this.state = {
            recipes,
            index: 0
        }
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }
    // Create two methods... one called increase, and one called decrease. after the constructor. In the increase method, check the value of index to see if it is less than recipes.length - 1. If so, use setState to increment index by 1.
    increase(){
        if(this.state.index < this.state.recipes.length - 1){
            this.setState({ index: this.state.index + 1})
        }
    }
    // In the decrease method, check to see if the value of index is greater than 0. If so, use setState to decrement index by 1.
    decrease(){
        if(this.state.index > 0){
            this.setState({ index: this.state.index - 1})

        }
    }

    // Bind these methods, giving them the context of this.
    // put inside constructor function (after)


    //Pass these methods as props to Nav the component.

    render(){
        // Pass recipes and index as props to RecipeCard - and Pass increase and decrease to Nav tag - increase={this.increase} is passing them.

        return (
            <div className="container">
                <RecipeCard recipes={this.state.recipes} index={this.state.index}/>
                <Nav increase={this.increase} decrease={this.decrease}/>
            </div>
        )
    }

}

export default Cookbook