import React from 'react';

const Footer = () => {
    const day=new Date();
    const year=day.getFullYear()
    return (
        <footer className="text-center ">
            <p><span className="my-5 ">©️</span>copyright md Shakib Ahamed ,{year}<small> </small></p>
            
        </footer>
    );
};
 
export default Footer;