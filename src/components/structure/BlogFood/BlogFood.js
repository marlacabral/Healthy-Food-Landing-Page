import React from 'react';
import './BlogFood.css';

const BlogFood = () => {
    return(
        <main className="list-food">
            <h3>Read Our Blog</h3>
            <h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h5>
            
            <section className="nuts">
                <div className="img-nuts">
                    <img src="https://bitbucket.org/grupo_gcb/teste-frontend/raw/5fc814a80a765b678375ed0cbe56b763d73bbe76/imagens/blog_image_1.svg" alt="nuts image"></img>
                </div>
                <div className="title-nuts">
                    <h3>Quick-start guide to nuts and seeds</h3>
                </div>
                <div className="author-blog"> 
                    <img src="https://storage.alboom.ninja/sites/2851/albuns/427514/2019.04.03_-_Fotos_Perfil_Profissional_Carlo__55_de_68_.jpg?t=1556218040" alt="man image"/>
                    <h5>Kevin Ibrahim</h5>
                </div>
            </section>

            <section className="tips">
                <div className="img-tips">
                    <img src="https://bitbucket.org/grupo_gcb/teste-frontend/raw/5fc814a80a765b678375ed0cbe56b763d73bbe76/imagens/bloco_image_2.svg" alt="tips image"></img>
                </div>
                <div className="title-tips">
                    <h3>Nutrition: Tips for Improving Your Health</h3>
                </div>
                <div className="author-blog"> 
                    <img src="https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg?size=626&ext=jpg" alt="man image"/>
                    <h5>Mike Jackson</h5>
                </div>
            </section>

            <section className="benefits">
                <div className="img-benefits">
                    <img src="https://bitbucket.org/grupo_gcb/teste-frontend/raw/5fc814a80a765b678375ed0cbe56b763d73bbe76/imagens/bloco_image_3.svg" alt="benefits image"></img>
                </div>
                <div className="title-benefits">
                    <h3>The top 10 benef its of eating healthy</h3>
                </div>
                <div className="author-blog"> 
                    <img src="https://st2.depositphotos.com/3433891/6661/i/600/depositphotos_66613339-stock-photo-man-with-crossed-arms.jpg" alt="man image"/>
                    <h5>Bryan McGregor</h5>
                </div>
            </section>

            <section className="dish">
                <div className="img-dish">
                    <img src="https://bitbucket.org/grupo_gcb/teste-frontend/raw/5fc814a80a765b678375ed0cbe56b763d73bbe76/imagens/bloco_image_4.svg" alt="dish image"></img>
                </div>
                <div className="title-dish">
                    <h3>What to eat to be healthy</h3>
                </div>
                <div className="author-blog"> 
                    <img src="http://www.cdlrio.com.br/wp-content/uploads/2015/07/Homem.jpg" alt="man image"/>
                    <h5>John Mayer</h5>
                </div>
            </section>
    </main>
    )
}

export default BlogFood