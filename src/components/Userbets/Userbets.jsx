// import React from 'react';
// import Button from 'react-bootstrap/Button';


import React from "react";
import { ListGroup,ListGroupItem, Button } from "react-bootstrap";


/**
 * 
 * @param {object} betSlip - betSlip
 * @param {number} betSlip.risk - dollar amount wagered
 * @param {number} betSlip.oddspicked - odds (e.g. +100/-115)
 * @returns {number} winnings in dollars
 */
const payoutCalculator = (betSlip) => {
    console.log(`inside of payout ${betSlip}`)
    let risk = betSlip.risk;
    let odds = betSlip.oddspicked;
    let payout = 0;
    if (odds > 0) {
        payout = ((odds / 100) * 100) + risk
        payout = parseFloat(payout.toFixed(2))
    } else { 
        payout = Math.abs((100 / (odds)) * risk) + risk
        payout = parseFloat(payout.toFixed(2))
    } 
    
    return payout 
}

const Userbets = (props) => {
    
    return (
        <ListGroup horizontal id="boxborder">
            <ListGroupItem>
                {console.log(props.displaySearch)}
                {props.displaySearch.map((bet, index) => {
                    return (
                        <div key={index}>
                            {" "}
                        <ListGroupItem>
                            User ID : {bet.user_id} <br></br>
                            Game ID : {bet.game_id} <br></br>
                            Amount Risked : ${bet.risk} <br></br>
                            Day Placed: {bet.day_placed} <br></br>
                            Odds: {bet.oddspicked} <br></br>
                            Potential Payout: ${payoutCalculator(bet)} <br></br>
                        </ListGroupItem>
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