import React from 'react';

const LaunchDetails = (props) => {
  const launch = props.launch;
  const rocket = props.rocket;
  const rocketMass = Math.floor(rocket.mass.kg / 1000);
  return(
    <div className='details_container'>
      <div className='launch_container'>
        <h2>Launch {launch.flight_number}</h2>
          <div className='launch_container-inner'>
            <span><b>Launch Site:</b> {launch.launch_site.site_name}</span>
            <span>{launch.launch_site.site_name_long}</span>
            <p><b>Launch Details:</b> {launch.launch_success ? launch.details : 'N/A'}</p>
          </div>
          <div className='launch_container-image'>
            {launch.links.mission_patch ? 
              <img src={launch.links.mission_patch} alt='image' /> :null
            }
          </div>
      </div>
      <div>
        <h2>Rocket Details </h2>
        <div className='rocket_details'>
          <span><b>Name:</b> {rocket.name}</span>
          <span><b>ID:</b> {rocket.id}</span>
          <span><b>Height:</b> {rocket.height.meters} meters</span>
          <span><b>Mass:</b> {rocketMass} tonnes</span>
          <span><b>Stages:</b> {rocket.stages}</span>
        </div>
        <p>{rocket.description}</p>
      </div>
    </div>
  )
}

export default LaunchDetails;