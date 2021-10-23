import React from 'react';
import './ServiceFood.css';

const ServiceFood = () => {
    return(
        <section className="thirty">
            <div className="image-service">
                <img src="https://bitbucket.org/grupo_gcb/teste-frontend/raw/5fc814a80a765b678375ed0cbe56b763d73bbe76/imagens/bloco_services.svg" alt="woman cooking"/>
            </div>

            <div className="thirty-text">
                <h2>The best services ready To serve you</h2>
                <h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                A small river named Duden flows by their place and supplies it with the necessary regelialia.</h5>

                <button>Know More</button>
            </div>
        </section>
    )
}
export default ServiceFood