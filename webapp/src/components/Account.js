import { useState } from 'react';
import './Account.css'

export default function Account(props) {

    const [accountMenu, setAccountMenu] = useState(false);

    const loginButtonAction = () => {
        if(accountMenu) {
            setAccountMenu(false);
            document.getElementById('AccountLogin').className = '';
        } else {
            setAccountMenu(true);
            document.getElementById('AccountLogin').className = 'show';
        }
    }

    return (
        <div id="Account">
            <button className="profile" onClick={loginButtonAction} >Log Ind</button>
            <div id="AccountLogin" >
                <div>
                    <input type="text" placeholder="Brugernavn" />
                    <br></br>
                    <input type="password" placeholder="Kodeord" />
                    <br></br>
                    <button className="profile login" >Log Ind</button>
                    <br></br>
                    <button className="profile login util" >Ny Bruger</button>
                    <button className="profile login util" >Ny Kode</button>
                </div>
            </div>
        </div>
    );

}


