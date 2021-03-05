import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import SideMenu from './components/SideMenu';
import Topbar from './components/Topbar';
import './Profile.css';


function App() {

    const [page, setPage] = useState('forside');
    const [menuState, setMenuState] = useState(false);
    const [authState, setAuthState] = useState({auth: false});
    

    return (
        <div className="App">
            <SideMenu menuState={menuState} page={page} setPage={setPage} ></SideMenu>
            <Topbar menuState={menuState} setMenuState={setMenuState} authState={authState} setAuthState={setAuthState} ></Topbar>
            <Content menuState={menuState} page={page} setPage={setPage} />
        </div>
    );
}

export default App;
