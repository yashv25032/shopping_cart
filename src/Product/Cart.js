import React, { useContext } from 'react';
import { Cartcontext } from '../context/Context';

const Cart = () => {

    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state
    const dispatch = Globalstate.dispatch;

    const total = state.reduce((total,item)=>{
        return total + parseFloat(item.price) * parseFloat(item.quantity);
    },0);
    
    

    return (
        <>

            <div className='cart'>
                {state.map((item, index) => {
                
                    return (

                        <div className='card' key={index}>
                            <img src={item.image} alt='image' />

                            <p>{item.title}</p>
                            <p>{ item.quantity * item.price}</p>
                            <div className='quantity'>
                                <button onClick={()=> dispatch({type:'INCREASE', payload:item})} >+</button>
                                <p>{item.quantity}</p>
                                <button onClick={()=>{ if(item.quantity >1){ dispatch({type:'DECREASE', payload:item})} else {dispatch({type:'REMOVE', payload:item})}}}>-</button>
                            </div>
                            <h2 onClick={()=> dispatch({type:'REMOVE', payload:item})}>x</h2>
                        </div>

                    )
                })}

                {state.length > 0 && (
                    <div className='total'>
                        <p>{total}</p>
                    </div>
                )}

                {state.length === 0 &&(
                    <div className='card_message'>

                    <h1>NO ITEM AVAILABLE IN CART</h1>

                    </div>
                )}

            </div>

        </>
    );
}

export default Cart;
