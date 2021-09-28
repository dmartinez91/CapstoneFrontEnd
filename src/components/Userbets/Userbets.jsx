// import React from 'react';
// import Button from 'react-bootstrap/Button';


import React from "react";
import { ListGroup,ListGroupItem, Button } from "react-bootstrap";

const Userbets = (props) => {

    return (
        <ListGroup horizontal id="boxborder">
            <ListGroupItem>
                {console.log(props.displaySearch)}
                {props.displaySearch.map((bet, index) => {
                    return (
                        <div key={index}>
                            {" "}
                            Bet Slip: {bet} <br></br>

                        </div>
                    );
                })}
            </ListGroupItem>
        </ListGroup>
    );
};
export default Userbets;














// const Userbets = (props) => {
//     return ( 
//         <React.Fragment>
//         <form> 
//         <div>
//             <table className="table table-bordered border-primary">
//                 <tr>
//                     <th className="table-primary">risk</th>
//                     <th className="table-primary">day placed</th>
//                     <th className="table-primary">game id</th>
//                     <th className="table-primary">user ID </th>
       
//                 </tr>
//                     {props.showMusic.map(showMusic => (
//                         <tr key={showMusic.id}>
                            
//                             <td className="table-primary">{showMusic.risk}</td>
//                             <td className="table-primary">{showMusic.day_placed}</td>
//                             <td className="table-primary">{showMusic.game_id}</td>
//                             <td className="table-primary">{showMusic.user_id}</td>
                
                            
                            
//                         </tr>
                        
//                         ))}
//             </table>
        


        
//          </div>


        
//         </form>
//         </React.Fragment>
//      );
// }
 
// export default Userbets;