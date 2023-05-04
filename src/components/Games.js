import React from "react";

function Games({ gameNo, home, away, conference, day, date, time, court, location }) {

  return (
        <tr>
            <td>{date}</td>
            <td>{gameNo}</td>
            <td>{home}</td>
            <td>{away}</td>
            <td>{conference}</td>
            <td>{day}</td>
            <td>{time}</td>
            <td>{court}</td>
            <td>{location}</td>
        </tr> 
    
    
  );
}

export default Games;
