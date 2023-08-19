import { useState } from "react";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

const Card = ({ category, description, image, price, rating, title }) => {

    const [cart, setCart] = useState([]);

    // const navigate = useNavigate();

    // const addToCart = () => {
    //     const newItem = {
    //         title,
    //         price,
    //         description,
    //         image,

    //     }

    //     setCart((prevItem) => [...prevItem, newItem]);

    //     navigate('/cart');
        

    // };



    return (
        <>

          


        </>
    );
}

export default Card;
