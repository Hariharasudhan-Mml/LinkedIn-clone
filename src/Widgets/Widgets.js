import { ArrowDropDown, ContactSupport, FiberManualRecord, KeyboardArrowDown, KeyboardArrowRight, LinkedIn } from '@material-ui/icons';
import './Widgets.css';



const Widgets = () => {

    const topContent = [
        {
            title: "Game on, says Zoom",
            timeline: "24h ago",
            shortmsg: "25,400 readers"
        },
        {
            title: "It's Rainning jobs in indian IT",
            timeline: "3d ago",
            shortmsg: "23,605 readers"
        },
        {
            title: "Millenials Wealth creation tools",
            timeline: "3d ago",
            shortmsg: "3,005 readers"
        },
        {
            title: "World is your (remote work) oyster",
            timeline: "11h ago",
            shortmsg: " 7,300 readers"
        },
        {
            title: "Did remote save introverts?",
            timeline: "1W ago",
            shortmsg: " 29,030 readers"
        }
    ];

    const bottomContent=[
        {
            title: "Creativity at work : a short course",
            shortmsg: "seth godin",
            number:1
        },
        {
            title: "Customer service Foundation",
            shortmsg: "jeff toister",
            number:2

        },
        {
            title: "Creating positive conversations",
            shortmsg: "Mytra Golden",
            number:3
        },


    ]


    return (
        <div className='widgets'>
            <CreateWidgets heading="LinkedIn news" content={topContent} bottomText="Showmore" BottomIcon={KeyboardArrowDown} />
            <CreateWidgets heading="Today's top courses" content={bottomContent} bottomText="Show more on linkedIn learning" BottomIcon={KeyboardArrowRight} />
            <div className='widgets__links'>
                <span>About</span>
                <span>Accessibility</span>
                <span>Help center</span>
                <span>Privacy & Terms <ArrowDropDown/></span>
                <span>Advertising</span>
                <span>Bussiness & services<ArrowDropDown/></span>
                <span>Get the linkedIn app</span>
                <span>more<ArrowDropDown/></span>
            </div>
            <div className='widgets__footer'>
                <p><strong>Linked<LinkedIn/></strong><span>LinkedIn Corporation &copy; 2021</span></p>
            </div>
        </div>
    )
}


export default Widgets;



const CreateWidgets = ({ heading, content, bottomText, BottomIcon }) => {

    return (
        <div className='widgets__box'>
            <div className='heading'>
                <h3>{heading}</h3>
                <ContactSupport />
            </div>
            {
                content.map((content, index) => {
                    return <WidgetsContent key={index} title={content.title} timeline={content.timeline} shortmsg={content.shortmsg} number={content.number ? content.number : null } />
                })
            }

            <hr />
            <div className='widgets__bottom'>
                <p>{bottomText} <BottomIcon /></p>

            </div>
        </div>

    )
}



const WidgetsContent = ({ number, title, timeline, shortmsg }) => {
    return (
        <div className='widgets__content'>
            <span>{number ? number + "." : <FiberManualRecord />}</span>
            <div className='widgets__title'>
                <p>{title}</p>
                <p className='widgets__info'>{timeline ? timeline + " *"+shortmsg : shortmsg}</p>
            </div>
        </div>
    )
}



