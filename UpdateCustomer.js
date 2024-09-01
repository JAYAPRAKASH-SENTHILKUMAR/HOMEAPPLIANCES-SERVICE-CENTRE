import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {  getCustById, updateCustomer } from '../Services/Api';
export default function UpdateCustomer() {
    const navigate = useNavigate()
    const { customerID } = useParams();
    const [editx, setEditx] = useState({
        customerName: '',
        productID: 0
    })
    const fectdata = async () => {
        const myprevdata = await getCustById(customerID)
        // axios.get(`http://localhost:8080/customers/${customerID}`)
        setEditx({
            customerName: myprevdata.data.customerName,
            productID: myprevdata.data.products.productID
        })
     console.log(myprevdata.data.products.productID)
    }
    const handleChange = (e) => {
        e.preventDefault();
        setEditx({ ...editx, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const finaldata = {
            customerName: editx.customerName,
            products: {
                productID: editx.productID
            }
        }
        // axios.put(`http://localhost:8080/customers/${customerID}`, finaldata)
        updateCustomer(customerID,finaldata)
        navigate('/gcustomers')
    }

    useEffect(() => {
        fectdata()
    }, [])
    return (
        <>
            <div className="auth-form">
                <form className="auth-data" onSubmit={handleSubmit}>

                    <input type="text" name="customername" id="customerName" placeholder="customername" required className="auth-input" value={editx.customerName} onChange={handleChange} />
                    <input type="number" name="productid" id="productID" placeholder="product id" required className="auth-input" value={editx.productID} onChange={handleChange} />

                    <div className="auth-btn-group">
                        <button type="submit" className="auth-btn green-bg white-txt">Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}