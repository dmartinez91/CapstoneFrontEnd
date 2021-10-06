import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const payoutCalculator = (betSlip) => {
  console.log(`inside of payout ${betSlip}`);
  let risk = betSlip.risk;
  let odds = betSlip.oddspicked;
  let payout = 0;
  if (odds > 0) {
    payout = (odds / 100) * 100 + risk;
    payout = parseFloat(payout.toFixed(2));
  } else if (odds < 0) {
    payout = Math.abs((100 / odds) * risk) + risk;
    payout = parseFloat(payout.toFixed(2));
  } else {
    payout = 0;
  }

  return payout;
};

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
