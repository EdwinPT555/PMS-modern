import React from 'react';
import './BottomNavigation.css';
import NavItem from './NavItem';


const BottomNavigation: React.FC = () => {
    return (
        <div className='main-container'>
           <NavItem title='Home' icon='fa fa-home' to='/'/>
           <NavItem title='Tasks' icon='fa fa-tasks' to='/tasks'/>
           <NavItem title='Projects' icon='fa fa-suitcase' to='/projects'/>
           <NavItem title='Clients' icon='fa fa-users' to='/home'/>
           <NavItem title='Products' icon='fa fa-cubes' to='/home'/>
           <NavItem title='MyTime' icon='fa fa-clock' to='/home'/>
           <NavItem title='Reports' icon='fa fa-file-alt' to='/home'/>
           <NavItem title='Settings' icon='fa fa-cog' to='/home'/>
        </div>
    )
}

export default BottomNavigation

interface IProps {

}