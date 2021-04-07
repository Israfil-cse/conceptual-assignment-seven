import React from 'react';

const Cart = (props) => {
    const data = props.data;
    const totals = data.reduce((total, item) => total + item.Coursefree, 0 );
   
    return (
        <div>
           {
               data.map(dt => (
                   <div>
                       <h3>Name:{dt.CourseName}</h3>
                       <h3>Price:{dt.Coursefree}</h3>
                       <hr/>
                   </div>
               ))
           }
           <h1>Total-Price: {totals}</h1>
        </div>
    );
};

export default Cart;