import React from 'react';
import CartItem from './CartItem';

function Cart(props) {

    const { products } = props.products;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem 
             product={product}
             key={product.id} 
             onIncreaseQuantity={props.onIncreaseQuantity}//pass to props an func.
             onDecreaseQuantity={props.onDecreaseQuantity}
             onDeleteQuantity={props.onDeleteQuantity}
               />
          )
        })}
      </div>
    );
  
}

export default Cart;


