import './Content.css'



export default function Content(props) {

    let contentLoaded = false;
    const setContentLoaded = () => {
        contentLoaded = true;
    }

    if(contentLoaded) {
        if(props.menuState) {
            document.getElementById('Content').style.width = '75%';
            document.getElementById('Content').style.marginLeft = '21%';
        } else {
            document.getElementById('Content').style.width = '98%';
            document.getElementById('Content').style.marginLeft = '1%';
        }
    }

    

    switch(props.page) {

        case 'forside':
            return (
                <div id="Content" onLoad={setContentLoaded} >
                    <h1>Hello</h1>
                </div>
            
            );


        default:
            return (
                <div id="Content" >
                    <button className="profile">Button</button>
                </div>
            );
    }

}
