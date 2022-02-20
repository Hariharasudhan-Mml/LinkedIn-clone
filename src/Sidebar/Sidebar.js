import React from "react";
import './Sidebar.css';
import { CalendarToday, TurnedIn, VerifiedUser,Add, ArrowDropDown } from '@material-ui/icons';
import { Avatar, IconButton } from "@material-ui/core";
import {  useSelector } from "react-redux";


const Sidebar = () => {
    const user = useSelector(state => state.user);


    const Pages = ({ pageName, pageImg, notifications }) => {
        return <div className="sidebar__page">
            <Avatar src={pageImg} />
            <div className="sidebar__page--name">
                <h3>{pageName}</h3>
                <div className="sidebar__page--notifications">
                    <p> <small>Page notifications</small><span>{notifications}</span></p>
                    <hr />
                </div>
            </div>
        </div>
    }



    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkhMGBAton7SAgHrc84-aIyYSwSK7LIciYA&usqp=CAU" className="sidebar__top--background" />
                <img src={user.photoURL} className="sidebar__top--rounded" />
                <div className="sidebar__info">
                    <h3>{user.displayName}</h3>
                    <p>Senior software Engineer at HCL</p>
                </div>
                <hr />
                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who viewed your profile</p>
                        <span>530</span>
                    </div>
                    <div className="sidebar__stat">
                        <p>Views of your profile</p>
                        <span>680</span>
                    </div>
                </div>
                <hr />
                <div className="sidebar__premium--add">
                    <small>Access exclusive tools and insights </small>
                    <p> <VerifiedUser /> Try premium free for 1 month </p>
                </div>
                <hr />
                <div className="sidebar__myitems">
                    <p> <TurnedIn /> My items</p>
                </div>

            </div>
            <div className="sidebar__mypages">
                <h2 className="sidebar__mypages--title">My pages(3)</h2>
                <Pages pageImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdOXQTO_XYzVFcpKL-aoF6qEMt8SNSSjtPQ&usqp=CAU" pageName="AR projects" notifications="5" />
                <Pages pageImg="https://letsconnect.world/wp-content/uploads/2018/04/HCL-L-300x200.jpg" pageName="HCL limited" notifications="23" />
                <Pages pageImg="https://media-exp1.licdn.com/dms/image/C4E0BAQGXZ2gYbabBzQ/company-logo_200_200/0/1519898451374?e=2159024400&v=beta&t=A-uCNzIjIuTJaL0i15Vic2qWNg_3vV1FeHS0xwnWlKc" pageName="Virtua technology" notifications="12" />
            </div>
            <div className="sidebar__bottom">
                <div className="recents">
                    <h5>Recent</h5>
                    <Hastags Icon={CalendarToday} name={'Level up career'} />
                    <Hastags  name="AR projects ltd" />
                    <Hastags  name="HCL Bootcamp" />
                    <Hastags  name="Virtua Training center" />
                    <Hastags  name="Virtua Hub" />
                    <Hastags  name="Machine Learning Program" />

                </div>
                <div className="sidebar__links">
                    <p><a href="#">Groups</a></p>
                    <p><a href="#">Events</a> <IconButton><Add/></IconButton></p>
                    <p><a href="#">Followed Hastags</a></p>
                </div>
                <Hastags  name="AR projects ltd" />
                <Hastags  name="HCL Learnings" />
                <Hastags  name="HCL Projects" />
                <div className="showmore__btn"><span>Show more</span><IconButton><ArrowDropDown/></IconButton></div>
<hr/>
<div className="discover__more">
    <p>Discover more</p>
</div>

            </div>

        </div>
    )
}


export default Sidebar;

export const Hastags=({Icon,name})=>{
    return(
        <div className="sidebar__hastag">
            {Icon ? <Icon /> : <span>#</span>}
            <p>{name}</p>
        </div>
    )
}