import React from 'react';

function Header(props) {
    return (
        <header className="App-header">
            {props.headerText}
        </header>

    );
}

export default Header;