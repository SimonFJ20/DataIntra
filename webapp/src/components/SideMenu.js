import './SideMenu.css'
import { MenuLogo } from './Topbar';


function Link(props) {

    const setPage = () => {
        props.setPage(props.link);
    }

    if(props.page === props.link) {
        return (<h2 className="active" onClick={setPage} >{props.text}</h2>)
    } else {
        return (<h2 onClick={setPage}  >{props.text}</h2>)
    }
}



export default function SideMenu(props) {

    if(props.menuState === true) {
        return (
            <div id="sideMenu">
                <MenuLogo menuState={props.menuState} setMenuState={props.setMenuState} ></MenuLogo>
                <h1 className="topbar" onClick={() => props.setMenuState(false)} ><span>Data</span>Intra</h1>
                <Link link="forside" text="Forside" page={props.page} setPage={props.setPage} />
                <Link link="minside" text="Min Side" page={props.page} setPage={props.setPage} />
                <Link link="datahouse" text="DataHouse" page={props.page} setPage={props.setPage} />
                <Link link="beskeder" text="Beskeder" page={props.page} setPage={props.setPage} />
                

                <div id="sideMenuBottom">
                    <Link link="kontakt" text="Kontakt" page={props.page} setPage={props.setPage} />
                    <Link link="om" text="Om" page={props.page} setPage={props.setPage} />
                    <h3>Lavet af Simon From Jakobsen</h3>
                    <h3>simonfromjakobsen@gmail.com</h3>
                </div>

                
            </div>
        );
    } 
    else {
        return (
            <div></div>
        );
    }

}
