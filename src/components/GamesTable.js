import React from "react";
import Games from "./Games";

function GamesTable({ games }) {
    
    return (
        <table className="ui celled striped padded table">
          <tbody>
            <tr>
              <th>Date</th>
              <th>GameNo</th>
              <th>Home</th>
              <th>Away</th>
              <th>Conference</th>
              <th>Day</th>
              <th>Time</th>
              <th>Court</th>
              <th>Location</th>
            </tr>
            
            {games.map(item=>{
                return < Games key={item.id} date={item.date} gameNo={item.gameNo} home={item.home} away={item.away}
                conference={item.conference} day={item.day} time={item.time} court={item.court} location={item.location} />;
            })}
          </tbody>
        </table>
      );

}

export default GamesTable