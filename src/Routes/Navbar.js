import React from 'react';
import ReactDOM from 'react-dom/client';



export default function NavBar() {

    return(
        <>
        <div>
            <input className='proj-btn' type='button'>
                <a href='/projects'>Projects</a>  
            </input>

            <input className='contact-btn' type='button'>
                <a href='/contact'></a>
            </input>
        </div>
        
        </>
    );
};