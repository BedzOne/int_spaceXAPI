import React, { Component } from 'react';
import Launch from './Launch';

const List = (props) => {
  const launches = props.launches.map(launch => {
    return(
      <Launch key={launch.launch_date_unix} launch={launch}/>
    )
  });

  return(
    <div>
      <ul>
        <li>
          <span>Flight Number</span>
          <span>Date/Time</span>
          <span>Rocket</span>
          <span>Past/Upcoming</span>
          <span>Success/Fail</span>
          <span>Details</span>
        </li>
        {launches}
      </ul>
    </div>
  )
}

export default List;