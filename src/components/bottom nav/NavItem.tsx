import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavigation.css'


const NavItem: React.FC<IProps> = (props) => {
    return (
        <Link to={props.to} className='item-container'>
            <div><i className={`${props.icon} icon`} aria-hidden="true"></i></div>
            <div className='item'>{props.title}</div>
        </Link>

    )
}

export default NavItem;

interface IProps {
    title: string;
    icon: string;
    to: string;
}
