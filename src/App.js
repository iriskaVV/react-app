import React from 'react';
import './index.css';
import Posts from './posts/Posts';

function App(){

    return(
        <div className='mainWindow'>
            <h1 className='mainTitle'>News</h1>
            <Posts />
        </div>
    )
}

export default App