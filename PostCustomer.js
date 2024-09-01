import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { postCustomer } from '../Services/Api';


export default function PostCustomer() {
  const [customerName, setSname] = useState('');
  const [productID, setProductID] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      customerName: customerName,
      products: {
        productID: productID
      }
    
    }
    console.log(data)
    // axios.post(postCustomer, data)
    postCustomer(data)
      .then(response => { console.log(response.data) })
      .catch(err => { console.log(err) })
    setSname('');
    setProductID('');
    alert("Submitted")
  }

  return (
    <>
      <div className='auth-post'>
      <h1>Post Customer Information</h1>
        <form className="auth-dat" onSubmit={handleSubmit}>
          Enter the Customer name
          <input type="text" placeholder='Customer Name' id='sname'   className="auth-inp" value={customerName}
            onChange={(e) => setSname(e.target.value)} />
          Enter the product Id
          <input type="num" placeholder='Product ID' id='cid'  className="auth-inp" value={productID}
            onChange={(e) => setProductID(e.target.value)} />

          <button type='Submit' className="auth-btn green-bg white-txt">Submit</button>
       
        </form>

      </div>
    </>
  )
}