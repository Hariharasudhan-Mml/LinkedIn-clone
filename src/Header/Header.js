import { useReducer, useState } from 'react';
import { Search, Home, Notifications, Group, Work, Message, Looks, GridOnTwoTone } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
const user=useSelector(state=>state.user);
    const [active, setActive] = useState('home')

    const HeaderOption = ({ name, Icon, avatarImg, optionEffect }) => {

        return (
            <div onClick={optionEffect ? () => setActive(name) : () => setActive("home")} className={`headerOption ${optionEffect && name === active ? 'headerOption__active' : null}`}>
                {Icon && <Icon />}
                {avatarImg && <Avatar src={avatarImg} />}
                <p>{name}</p>
            </div>
        )

    }


    return (
        <div className="header">
            <div className="header__left" >
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
                <div className="header__search">
                    <Search />
                    <input type="text" placeholder="Search..." />
                </div>


            </div>
            <div className="header__right">
                {<HeaderOption name="home" Icon={Home} optionEffect />}
                {<HeaderOption name="my network" Icon={Group} optionEffect />}
                {<HeaderOption name="jobs" Icon={Work} optionEffect />}
                {<HeaderOption name="messaging" Icon={Message} optionEffect />}
                {<HeaderOption name="work" Icon={GridOnTwoTone} />}
                {<HeaderOption name={user.displayName} avatarImg={user.photoURL} />}
                {<HeaderOption name="advertise" Icon={Looks} />}
            </div>
        </div>
    )
}


export default Header;