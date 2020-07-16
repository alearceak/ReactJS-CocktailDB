import React from 'react';

function CocktailList(props) {

    return (
        <ul className="cocktailsList">
            {props.cocktails.map(item => (
                <li key={item.idDrink}>
                    {item.strDrink} {item.price}
                </li>
            ))}
        </ul>
    );
}

export default CocktailList;