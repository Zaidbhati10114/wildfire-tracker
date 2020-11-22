import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import "./Header.css"

const  Header = () => {
    return (
        <div className="header">
        <h1><Icon icon={locationIcon}/>Wildfire Tracker (Powered by Nasa)</h1>
         
            
        </div>
    )
}

export default Header;