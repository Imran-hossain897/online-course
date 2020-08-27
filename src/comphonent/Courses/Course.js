import React, { useState } from 'react';
import Product from '../product/Product';
import Cart from './Cart/Cart';
import './Course.css'
import fakedata from '../../fakeData/Courses'

const Course = () => {
    const [cart, setcart]= useState([]);
    const handleAddCourse =(product) =>{
        console.log('add me')
        const newCart =[...cart, product]
        setcart(newCart)
    }
    const frist = fakedata;
    const [products, setproducts] = useState(frist)

    return (
        <div className='displaying '>
          <div className='course-container'>
            {
                    products.map(pd => <Product
                        handleAddCourse ={handleAddCourse}
                        product={pd}></Product>)
                }
          </div>
    
            <Cart cart={ cart}></Cart>
            
         </div>
    );
};

export default Course;