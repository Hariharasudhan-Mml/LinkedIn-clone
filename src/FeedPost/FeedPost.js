import { Avatar } from "@material-ui/core";
import { GpsFixed, Message,  MessageOutlined,  Public,  Send,  SendOutlined,  Share,  ShareOutlined,  ThumbUp, ThumbUpOutlined,} from "@material-ui/icons";
import "./FeedPost.css";
import { Hastags } from '../Sidebar/Sidebar';



const FeedPost = ({ dp, name, message, time, image }) => {


    return (
        <div className="feed__post">
            <div className="post__top">
                <Avatar src={dp} />
                <div className="feed__info">
                    <strong>{name}</strong>
                    <p className="feed__profession">Something professional information</p>
                    <p className="feed__time">{time.toDate().getHours()+ " hrs"} * Edited *  <Public/></p>
                </div>
            </div>
            <div className="feed__message">
                <p>{message}</p>
            </div>
            <div className="feed__image">
                <img src={image} />
                <hr/>
            </div>

            <div className="feed__bottom">
            <Hastags Icon={ThumbUpOutlined} name="Like" />
              <Hastags Icon={MessageOutlined} name="Comments" />
              <Hastags Icon={ShareOutlined} name="Share" />
              <Hastags Icon={SendOutlined} name="Send" />
            </div>

        </div>
    )
}


export default FeedPost;