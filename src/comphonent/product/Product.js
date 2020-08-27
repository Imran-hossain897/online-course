import React from 'react';
import Button from 'react-bootstrap/Button'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt, faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const { name, price, img, oldPrice} = props.product;
    return (
       
        <div className='container'>
            
          <div className='item info' >
          <img src={img} alt=""/>
            <h6 className='text-primary' >{name}</h6>
           <span className='icon'>
           <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/> 
            <FontAwesomeIcon icon={ faStarHalfAlt}/> 
           </span>
           <FontAwesomeIcon icon={faUser}/>(35,200)

            <br/>
            <p> <strong> <FontAwesomeIcon icon={ faDollarSign}/>{price}</strong>
            <small> <del>${oldPrice}</del></small></p>
            <Button onClick={()=>props.handleAddCourse(props.product)}  variant="dark">enroll now</Button>
            
          </div>

        </div>
    );
};

export default Product;