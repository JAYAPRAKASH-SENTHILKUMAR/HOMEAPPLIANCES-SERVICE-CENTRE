import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Customer() {
    const navigate = useNavigate();
    const handlePostCustomer = () => navigate('/pcustomers');
    const handleGetCustomers = () => { navigate('/gcustomers') }
    return (
        <div className='auth-customer'>
                <h1>Customer Information</h1>
            <div className="auth-bt-group">
                <button type="button" className="auth-btn green-bg white-txt" onClick={handlePostCustomer}>Post</button>
                <button type="button" className="auth-btn green-bg white-txt " onClick={handleGetCustomers}>Get</button>
                <button type="button" className="auth-btn green-bg white-txt " onClick={handleGetCustomers}>Update</button>    
                <button type="button" className="auth-btn green-bg white-txt " onClick={handleGetCustomers}>Delete</button>
            </div>
        </div>
    )
}