import axios from "axios";
const username='jaya'
const password='1811321'
const authHeader=`Basic ${btoa(`${username}:${password}`)}`

const headers={ 'Authorization' : authHeader, 'Content-Type':'application/json'}

const postCustomer=(data)=>axios.post(`http://localhost:8080/customers`,data,{headers})
const postProduct=(data)=>axios.post(`http://localhost:8080/products`,data,{headers})
const getCustomer=()=>axios.get('http://localhost:8080/customers',{headers})
const getProduct=()=>axios.get('http://localhost:8080/products',{headers})
const updateCustomer=(customerID,data)=>axios.put(`http://localhost:8080/customers/${customerID}`,data,{headers})
const updateProduct=(productID,data)=>axios.put(`http://localhost:8080/products/${productID}`,data,{headers})
const deleteCustomer=(id)=>axios.delete(`http://localhost:8080/customers/${id}`,{headers})
const deleteProduct=(id)=>axios.delete(`http://localhost:8080/products/${id}`,{headers})
const getCustById=(customerID)=>axios.get(`http://localhost:8080/customers/${customerID}`,{headers})
const getProductById=(productID)=>axios.get(`http://localhost:8080/products/${productID}`,{headers})
const userLogin=(data)=>axios.post(`http://localhost:8080/signin`,data,{headers})
const userSignup = (data)=> axios.post(`http://localhost:8080/signup`,data,{headers})

export{userLogin,userSignup, getCustById,getProductById, postCustomer,postProduct,getCustomer,getProduct,updateCustomer,updateProduct,deleteCustomer,deleteProduct}