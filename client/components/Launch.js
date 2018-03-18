import React, { Component } from 'react';
import axios from 'axios';

import LaunchDetails from './LaunchDetails';

class Launch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rocket: {},
      showDetails: false
    }

    this.fetchDetails = this.fetchDetails.bind(this);
    this.hideDetails = this.hideDetails.bind(this);
  }

  hideDetails() {
    this.setState({showDetails: false})
  }

  fetchDetails(){
    axios.get(`https://api.spacexdata.com/v2/rockets/${this.props.launch.rocket.rocket_id}`)
      .then(res => {
        this.setState({rocket: res.data, showDetails: true});
      })
      .catch(err => console.log(err))
  }

  render() {
    let currentDate = Math.floor(Date.now() / 1000);
    let flightDate = this.props.launch.launch_date_utc.replace('Z', '').replace('T', ' ');

    let launchSuccess = () => {
      if (this.props.launch.launch_success) {
        return 'Success'
      } else if (this.props.launch.launch_success === null) {
        return 'N/A'
      }
    }
    
    return(
      <li>
        <span>{this.props.launch.flight_number}</span>
        <span>{flightDate}</span>
        <span>{this.props.launch.rocket.rocket_name}</span>
        <span>{this.props.launch.launch_date_unix < currentDate ? 'Past' : 'Upcoming'}</span>
        <span>{launchSuccess()}</span>
        <span>
          {!this.state.showDetails ? <button onClick={this.fetchDetails}>Show Details</button> : null }
          {this.state.showDetails ? <button onClick={this.hideDetails}>Hide Details</button> : null }
        </span>        
        {this.state.showDetails ? 
          <LaunchDetails launch={this.props.launch} rocket={this.state.rocket}/>
        : null }
      </li>
    )
  }
}

export default Launch;