import React from 'react'

const Nav = (props) => {
    // Recieve props by passing them as a parameter() to Nav.

    //Give the 'previous' button an onClick event, assigning it to the decrease method from props.

    //Give the 'next' button an onClick event, assigning it to the increase method from props.
    return (
        <div className="buttons">
            <button onClick="{props.decrease}">Previous</button>
            <button onClick={props.increase}>Next</button>
        </div>
    )

}

export default Nav