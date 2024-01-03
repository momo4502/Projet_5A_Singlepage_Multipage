import React, { useState, useEffect } from 'react';
import './SideBar.css';  

function SideBar() {
    const [advice, setAdvice] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.adviceslip.com/advice');
                const data = await response.json();
                setAdvice(data.slip.advice);
            } catch (error) {
                console.error('Error fetching advice:', error);
            }
        };

        fetchData();
    }); 

    return (
        <div className="nav">
            <div id="advice-container">
                <p>{advice}</p>
            </div>
            <nav>
                <a href="/" className="nav__link">Accueil</a>
                <a href="/settings" className="nav__link">Settings</a>
                <a href="/posts" className="nav__link">Posts</a>
            </nav>
        </div>
    );
}

export default SideBar;