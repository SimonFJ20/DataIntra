import './Content.css'



export default function Content(props) {

    switch(props.page) {

        case 'forside':
            return (
                <div id="Content" >
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
