import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteCustomer, getCustomer } from '../Services/Api';

export default function GetCustomers() {
  const navigate = useNavigate()
  const [info, setInfo] = useState([])
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = (e) => {
    // axios.get('http://localhost:8080/customers')
    getCustomer()
      .then(res => setInfo(res.data))
  }

  const handleDelete = (id) => {
    // axios.delete(`http://localhost:8080/customers/${id}`)
    deleteCustomer(id)
    fetchData();
  }
  const handleEdit = (id) => {
    navigate(`/customers/edit/${id}`)
  }
  return (
    <div className='main'>
      <table className='table-data'>
        <thead>
          <tr>
            <th> Customer ID  </th>
            <th> Customer Name </th>
            <th> Product Name</th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {info.map((data) => (
            <tr key={data.customerId}>
              <td> {data.customerId}</td>
              <td> {data.customerName}</td>
              <td>{data.products.productName}</td>
              <td>
                <button className='table-btn green-bg white-txt' onClick={() => handleEdit(data.customerId)}>Edit</button>
                <button className='table-btn red-bg white-txt' onClick={() => handleDelete(data.customerId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}