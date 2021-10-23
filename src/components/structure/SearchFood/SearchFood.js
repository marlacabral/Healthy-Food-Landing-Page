import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './SearchFood.css';

const Search = () => {
    return(
        <section className="first">
            <div className="first-text">
                <h2>Ready for Trying a new recipe?</h2>
                <input type="text" placeholder="Search healthy recipes"/>
                < FiSearch />
            </div>

            <div className="img-search">
                <img src="https://bitbucket.org/grupo_gcb/teste-frontend/raw/5fc814a80a765b678375ed0cbe56b763d73bbe76/imagens/Illustration.svg" alt="image group"/>
            </div>
        </section>
    )
}

export default Search