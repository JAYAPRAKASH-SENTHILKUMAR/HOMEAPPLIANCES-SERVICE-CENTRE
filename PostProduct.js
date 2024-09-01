import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react'
import { getProductById, postProduct } from '../Services/Api';

export default function PostProduct() {

  const [productName, setUname] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { productName };
    // axios.post('http://localhost:8080/products', data)
    postProduct(data)
      .then(response => { console.log(response.data) })
      .catch(err => { console.log(err) })
    setUname('');
    alert("Submitted")

  }

  return (
    <>
      <div className='auth-post'>
      <h1>Post Problem Information</h1>
        <form className="auth-dat" onSubmit={handleSubmit}>
          <input type="text" placeholder='Product Problem' id='uname'  className="auth-in" value={productName}
            onChange={(e) => setUname(e.target.value)} />
           
          <button type='submit' className="auth-btn green-bg white-txt">Submit</button>        
        </form>

      </div>
    </>
  )
}