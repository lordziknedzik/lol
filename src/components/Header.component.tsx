import React, {FunctionComponent} from 'react'
import {SiRiotgames} from 'react-icons/si'
import { Link } from 'react-router-dom'
const Header:FunctionComponent = () => {

    return (
        <div className='header'>
            <div><SiRiotgames className='header--riot'/></div>
            <div className='header--navbar'>
                <Link to='/about' className='header--link'>GAME</Link>
                <Link to='/' className='header--link'>CHAMPIONS</Link>
                <div className='header--link'>NEWS</div>
                <div className='header--link'>PATCH NOTES</div>
                <div className='header--link'>DISCOVER</div>
                <div className='header--link'>ESPORTS</div>
                <div className='header--link'>UNIVERSE</div>
                <div className='header--link'>SHOP</div>
                <div className='header--link'>SUPPORT</div>
            </div>
            <div>Region / login</div>
        </div>
    )
}

export default Header;