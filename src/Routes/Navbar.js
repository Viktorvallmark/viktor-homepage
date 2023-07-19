import React from 'react';
import ReactDOM from 'react-dom/client';



export default function NavBar() {

    return(
        <>
        <div>
            <input className='proj-btn' type='button'>
                Projects
            </input>

            <input className='contact-btn' type='button'>
                Contact
            </input>
        </div>
        
        </>
    );
};