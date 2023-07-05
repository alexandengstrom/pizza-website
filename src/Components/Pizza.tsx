import { useState, useEffect } from "react"

interface Props {
    name: string;
    ingredients: string[];
    price: number;
    image: string;
}

function Pizza({ name, ingredients, price, image }: Props) {
    const [publicUrl, setPublicUrl] = useState('');

    useEffect(() => {
    setPublicUrl(import.meta.env.BASE_URL || '');
    }, []);

    return (
        <>
             <div className="pizza-item">
                    <img className="pizza-image" src={publicUrl + "/PizzaImages/" + image} alt="Image" />
                    <div className="pizza-info">
                    <h3>{name}</h3>
                    <i><p key="ingredients">{ingredients.join(", ")}</p></i>
                    <h4>Price: €{price}</h4>
                    </div>
                </div>
        </>
    )
}

export default Pizza