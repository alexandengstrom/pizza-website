interface Props {
    name: string;
    ingredients: string[];
    price: number;
    image: string;
}

function Pizza({ name, ingredients, price, image }: Props) {
    return (
        <>
             <div className="pizza-item">
                    <img className="pizza-image" src={"/PizzaImages/" + image} alt="Image" />
                    <div className="pizza-info">
                    <h3>{name}</h3>
                    <p key="ingredients">{ingredients.join(", ")}</p>
                    <h4>Price: €{price}</h4>
                    </div>
                </div>
        </>
    )
}

export default Pizza