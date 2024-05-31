import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./NoPage.css"
const NoPage = () => {
    let navigate=useNavigate()
    return (
        <div className='Nopage'>
            <h1>Page Not Faunde 404 Error</h1>
            <h1>Go To Back Home Page </h1>
            <h1>Click  To Button</h1>
            <button onClick={()=>navigate("/")}>Back</button>

        </div>
    );
}

export default NoPage;
