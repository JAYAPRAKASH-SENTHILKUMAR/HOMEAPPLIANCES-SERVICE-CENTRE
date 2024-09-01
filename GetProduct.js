import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteCustomer, deleteProduct, getProduct } from '../Services/Api';


export default function GetProduct() {
  const navigate = useNavigate()
  const [info, setInfo] = useState([])
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (e) => {
    // axios.get('http://localhost:8080/products')
    getProduct()
      .then(res => setInfo(res.data))
  }

  const handleDelete = (id) => {
    // axios.delete(`http://localhost:8080/products/${id}`)
    deleteProduct(id)
    fetchData();
  }

  const handleEdit = (id) => {
    navigate(`/products/edit/${id}`)
  }
  
  return (
    <div className='main'>
      <table className='table-data'>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product problem</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {info.map(data => (<tr key={data.productID}>
            <td>{data.productID}</td>
            <td>{data.productName}</td>
            <td>
              <button className='table-btn green-bg white-txt' onClick={() => handleEdit(data.productID)} >Edit</button>
              <button className='table-btn red-bg white-txt' onClick={() => handleDelete(data.productID)}>Delete</button>
            </td>
          </tr>

          ))}
        </tbody>
      </table>
    </div>
  )

}