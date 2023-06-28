import React from 'react';
import './Title.css'

const Title = ({label}) => {
    return (
        <div className="Title">
            <h1>
                {label} 
            </h1>
        </div>
    );
}

export default Title;