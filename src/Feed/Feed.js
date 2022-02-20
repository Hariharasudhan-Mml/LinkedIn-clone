import './Feed.css';
import { useSelector } from 'react-redux';
import { Avatar, IconButton } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import { Assignment, Image, Videocam, Work } from '@material-ui/icons';
import { addDoc, collection, onSnapshot, orderBy, } from 'firebase/firestore';
import { db, timestamp, storage } from '../firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import FlipMove from 'react-flip-move';
import FeedPost from '../FeedPost/FeedPost';


const Feed = () => {
    const [inputMsg, setInputMsg] = useState('');
    const [inputImg, setInputImg] = useState();
    const [post, setPost] = useState([]);
    const user = useSelector(state => state.user);
    const inputFile = useRef(null);
    const [docs, setDocs] = useState(null)

    const openFile = () => {
        inputFile.current.click();
    }


    useEffect(() => {
        onSnapshot(collection(db, "posts"), orderBy('timestamp', "asc"),
            (snapshot) => {
                setPost(
                    snapshot.docs.map(doc => doc.data())
                )
            },
            (error) => {
                console.log("Error=" + error.message)
            });

    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        if (!inputMsg) {
            alert('Please describe about your post')
        }
        else if (!inputImg) {
            alert('please select Image')
        }
        else {
            const storageRef = ref(storage, `images/${inputImg.name}`);
            const uploadFile = uploadBytesResumable(storageRef, inputImg);
            uploadFile.on("state_changed", (snapshot) => {
            }
                , (err) => alert(err.message),
                () => {
                    getDownloadURL(uploadFile.snapshot.ref).then(url => {
                        addDoc(collection(db, "posts"), {
                            message: inputMsg,
                            name: user.displayName,
                            dp: user.photoURL,
                            image: url,
                            timestamp: timestamp
                        });
                    })
                }
            );
            setInputImg(null);
            setInputMsg('');

        }


    }


    return (
        <div className="feed">
            <div className='feed__top'>
                <div className='feed__input'>
                    <Avatar src={user.photoURL} />
                    <form>
                        <input type='text' value={inputMsg} onChange={(e) => setInputMsg(e.target.value)} placeholder="Start a post..." />
                        <input type="file" className="fileinput" style={{ display: "none" }} ref={inputFile} onChange={(e) => setInputImg(e.target.files[0])} />
                        <button type="submit" onClick={sendPost}></button>
                    </form>
                </div>
                <div className='input__options'>
                    <IconButton onClick={openFile}> <InputOption Icon={Image} name="Image" color="skyblue" onClick /></IconButton>
                    <InputOption Icon={Videocam} name="Video" color="green" />
                    <InputOption Icon={Work} name="Job" color="skyblue" />
                    <InputOption Icon={Assignment} name="Article" color="hotpink" />
                </div>
            </div>
            <div className='feed__post__container'>

                {post.map(({ name, timestamp, dp, message, image }, index) =><FeedPost key={index} name={name} time={timestamp} dp={dp} message={message} image={image} />)}

            </div>
        </div>
    )
}

export default Feed;

const InputOption = ({ Icon, name, color }) => {
    return (
        <div className='input__option'>
            <Icon style={{ color: color }} /><p>{name}</p>
        </div>
    )
}