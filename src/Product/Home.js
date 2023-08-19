import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Cartcontext } from '../context/Context';
import { NavLink } from 'react-router-dom';



const Home = () => {

    const [data, setData] = useState([]);

    const getData = async () => {

        let url = `https://fakestoreapi.com/products`;
        const apiData = await fetch(url);
        const Data = await apiData.json();

        setData(Data);

    }

    useEffect(() => {

        getData();

    } ,[]);

    const GlobalState = useContext(Cartcontext);
    const dispatch = GlobalState.dispatch;
    

    return (

        <>

            <div className='head'>

                <h2>Product Description</h2>

            </div>

            {
                Array.isArray(data) && data.map((elem , index) => {
                    elem.quantity = 1;
                    return (

                        <div className='main_div' key={index}>

                        <div className='sub_div'>
        
                            <img className='images' src={elem.image} alt="image1" />
        
                        </div>
        
                        <div className='sub_div'>
        
                            <div className='card_details'>
        
                                <div className='card_head'>
        
                                    <h1>{elem.title}</h1>
        
                                </div>
        
                                <div className='card_price'>
        
                                    <h5>${elem.price}</h5> <del> $783</del>
        
                                </div>
        
                                <div className='add_cart_button'>
        
                                 <NavLink to={'/cart'}><button className='main_button' onClick={()=> dispatch({type:'ADD',payload:elem})} > Add to Cart </button></NavLink>
        
                                </div>
        
                                <div className='description_details'>
        
                                    <span>Product Details:-</span>
                                    <p>{elem.description}</p>
        
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            };

        </>

    );




}

export default Home;
