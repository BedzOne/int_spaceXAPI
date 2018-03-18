import React, { Component } from 'react';
import axios from 'axios';

import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      launches: [],
      rocket: {}
    }
  }

  componentWillMount() {
    axios.get('https://api.spacexdata.com/v2/launches/all')
      .then(res => {
        let launches = res.data.slice(1).slice(-10);
        this.setState({launches: launches}, () => console.log(this.state))
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        <header>
          <h1>Space-X Launches</h1> 
        </header>
        <List launches={this.state.launches}/>
      </div>
    )
  }
}

export default App;