import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

import '../Styles/navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'

function Navbar() {
    var location = useLocation();
    const [opened, setOpened] = useState(false)
    useEffect(() => {
        setOpened(false)
    }, [location])
    return (
        <div className='navbar' id={opened ? 'open' : 'close'}>
            <div className='toggleButton'><button onClick={() => {
                setOpened(prev => !prev);
            }}><ReorderIcon /></button></div>
            <div className='links'>
                <Link to={'/'}>Home</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/experience'}>Experience</Link>
            </div>
        </div>

    )
}

export default Navbar;