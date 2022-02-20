import { signIn } from '../redux/Actions';
import { useDispatch } from 'react-redux';
import { provider, auth } from '../firebase/firebase';
import { signInWithPopup, } from 'firebase/auth';
import { Button } from '@material-ui/core';
import "./SignIn.css";


const SignIn = () => {
    const dispatch = useDispatch();

    const signin = () => {
        signInWithPopup(auth, provider).then(result => dispatch(signIn(result.user))).catch(err => alert(err));
}


    return <div className="signin">
        <Button onClick={signin}> Sigin With Google</Button>
    </div>
}


export default SignIn;