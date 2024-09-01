import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
    const handleCustomer = () => navigate('/customers');
    const handleProduct = () => { navigate('/products') }

    return (
        <div className="auth-home">
               <h1>Customer and Problem Information</h1>
            <div className="auth-bt2-group">
                <button className="auth-btn green-bg white-txt" onClick={handleCustomer}>Customers</button>
                <button className="auth-btn green-bg white-txt" onClick={handleProduct}>Problem</button>
            </div>
        </div>
    );
}