import React from 'react';
import './ListFood.css';


const ListFood = () => {
  return (
    <main className="list-food">
      <h3>Our Best Recipes</h3>
      <h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h5>
      
      <section className="broccoli">
        <div className="img">
          <img src="https://bitbucket.org/grupo_gcb/teste-frontend/raw/5fc814a80a765b678375ed0cbe56b763d73bbe76/imagens/comida_1.svg" alt="broccoli image"></img>
        </div>
        <div className="food-title">
          <h3>Broccoli Salad with Bacon</h3>
          <button>See Recipe</button>
        </div>
      </section>

      <section className="beef-burger">
        <div className="img">
          <img src="https://bitbucket.org/grupo_gcb/teste-frontend/raw/5fc814a80a765b678375ed0cbe56b763d73bbe76/imagens/comida_2.svg" alt="Beef Burger image"></img>
        </div>
        <div className="food-title">
          <h3>Classic Beef Burgers</h3>
          <button>See Recipe</button>
        </div>
      </section>

      <section className="potato-salad">
        <div className="img">
          <img src="https://bitbucket.org/grupo_gcb/teste-frontend/raw/5fc814a80a765b678375ed0cbe56b763d73bbe76/imagens/comida_3.svg" alt="Potato Salad image"></img>
        </div>
        <div className="food-title">
          <h3>Classic Potato Salad</h3>
          <button>See Recipe</button>
        </div>
      </section>

      <section className="cherry-cobbler">
        <div className="img">
          <img src="https://bitbucket.org/grupo_gcb/teste-frontend/raw/5fc814a80a765b678375ed0cbe56b763d73bbe76/imagens/comida_4.svg" alt="Cherry Cobbler on the Grill image"></img>
        </div>
        <div className="food-title">
          <h3>Cherry Cobbler on the Grill</h3>
          <button>See Recipe</button>
        </div>
      </section>
     

  </main>
  )
}

export default ListFood
