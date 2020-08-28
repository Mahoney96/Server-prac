import React from "react";
import "./Nav.css";

class Nav extends React.Component {
    render(){
        return
        <div> 
            This is the HomePage Component
        </div>
    }
};

export default Nav;

// class Nav extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             AllShoes:[],            //Note: would then pass this prop down if success
//         }

//     }

//     export default Nav; 
       




//state - 
//  const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue)
//         //Using State()
//         a) The GET object (getter)
//         b) Upadter Function (setter)



// Props vs State:
// components render Data from (2) sources: state or props
    // state - contains local, mutable data. Use PROPS when possible, easier to manipulate and reference

    //props - contains data you're unable to change, that is passed from parent components. 

// //props - passing data/
// const Nav = (Props) => {
//     return (
//         <docElementOrComponent.../>
//     );
// }



// this.state = { sayings: ""};

// componentDidMount() {
//     axios.get('api/shoes/:id')
//     .then(axios.post('/Header'))
    
//     .then()
//     this.setState({})}
// }
// }