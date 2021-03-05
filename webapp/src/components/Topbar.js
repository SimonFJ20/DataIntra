import '../Profile.css';
import Account from './Account';
import './Topbar.css';
import MenuIcon from './TopbarMenuIcon.svg';





function MenuLogo(props) {

    const setMenuFalse = (e) => {props.setMenuState(false)};
    const setMenuTrue = (e) => {props.setMenuState(true)};

    if(props.menuState === true) {
        return (<img src={MenuIcon} className="topbar" id="menuIconOpen" alt="Close Menu" onClick={setMenuFalse} ></img>);
    } else {
        return (<img src={MenuIcon} className="topbar" id="menuIconClosed" alt="Open Menu" onClick={setMenuTrue} ></img>);
    }
}

export default function Topbar(props) {

    return (
        <div className="topbar" >
            
            <MenuLogo menuState={props.menuState} setMenuState={props.setMenuState} ></MenuLogo>
            <h1 className="topbar"><span>Data</span>Intra</h1>
            <Account authState={props.authState} setAuthState={props.setAuthState} ></Account>
            
        </div>
    );
}
