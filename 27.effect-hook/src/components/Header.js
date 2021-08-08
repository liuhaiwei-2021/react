import React from 'react'

const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title:'Hej'
}
export default Header
