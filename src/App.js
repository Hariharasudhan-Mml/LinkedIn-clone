import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import SignIn from './SignIn/SignIn';
import { useDispatch, useSelector } from 'react-redux';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  return (
    <div className="App">
      {!user ? (<SignIn />) : (<>
        <Header />
        <div className='container'>
          <Sidebar />
          <Feed/>
          <Widgets/>
        </div>
      </>
      )

      }

    </div >
  );
}

export default App;
