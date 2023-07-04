import React from 'react';
import jsonData from '../Data/data.json';
import Pizza from "../Components/Pizza"

interface PizzaUnpacked {
    name: string;
    ingredients: string[];
    price: number;
    image: string;
}

function Menu() {
    const pizzas: PizzaUnpacked[] = jsonData.pizzas;

    return (
        <>
        <div className="pizza-container">
            {pizzas.map((pizza: PizzaUnpacked) => (
              <Pizza 
              name={pizza.name} 
              ingredients={pizza.ingredients} 
              price={pizza.price} 
              image={pizza.image}/>

            ))}
        </div>
        </>
    );
}

export default Menu;

