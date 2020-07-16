import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import SearchForm from './SearchForm';
import CocktailList from './CocktailList';
import Header from '../Common/Header';

function Search() {
    const searchHeader = "What do you want to drink???";
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cocktail, setCocktail] = useState("");
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    console.log(result);
                    result.drinks === null ? setCocktails([]) : setCocktails(result.drinks);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const searchCocktail = (cocktailToSearch) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailToSearch}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    console.log(result);
                    result.drinks === null ? setCocktails([]) : setCocktails(result.drinks);
                    setCocktail(cocktailToSearch);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="searchPage">
                <Header headerText={searchHeader} />
                <SearchForm passInputToSearch={searchCocktail} />
                <SearchInput cocktailSearched={cocktail} />
                <CocktailList cocktails={cocktails} />
            </div>
        );
    }
}

export default Search;