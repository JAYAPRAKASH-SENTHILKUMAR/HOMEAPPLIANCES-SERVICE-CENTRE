import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById, updateProduct } from '../Services/Api';

export default function UpdateProduct() {
    const navigate = useNavigate()
    const { productID } = useParams();
    const [editx, setEditx] = useState({
        productName: ''
    })
    const fectdata = async () => {
        const myprevdata = await getProductById(productID)
        //  axios.get(`http://localhost:8080/products/${productID}`)
        setEditx(myprevdata.data)
    }
    const handleChange = (e) => {
        e.preventDefault();
        setEditx({ ...editx, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // axios.put(`http://localhost:8080/products/${productID}`, editx)
        updateProduct(productID,editx)
        navigate('/gproducts')
    }

    useEffect(() => {
        fectdata()
    }, [])
    return (
        <>
            <div className="auth-form">
                <form className="auth-data" onSubmit={handleSubmit}>
                    <input type="text" name="productName" id="productName" required className="auth-input" value={editx.productName} onChange={handleChange} />
                    <div className="auth-btn-group">
                        <button type="submit" className="auth-btn green-bg white-txt">Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}