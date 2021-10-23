import React from 'react';
import './JoinFood.css';

const JoinFood = () => {
    return(
        <section className="join">
            <div className="join-text">
                <h2>Join our membership to get special offer</h2>
                <input type="text" placeholder="Enter your email address"/>
                <button>Join</button>
            </div>

            <div className="img-join">
                <img src="https://bitbucket.org/grupo_gcb/teste-frontend/raw/5fc814a80a765b678375ed0cbe56b763d73bbe76/imagens/bloco_final_image.svg" alt="image members of group"/>
            </div>
        </section>
    )
}

export default JoinFood