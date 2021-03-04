import React from 'react'

const Nav = () => {
    // Recieve props by passing them as a parameter to Nav.

    //Give the 'previous' button an onClick event, assigning it to the decrease method from props.

    //Give the 'next' button an onClick event, assigning it to the increase method from props.
    return (
        <div className="buttons">
            <button>Previous</button>
            <button>Next</button>
        </div>
    )

}

export default Nav