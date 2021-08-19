import React from 'react';
import Table from '../Table';

class App extends React.Component {

    state = {
        data: []
    };

  componentDidMount() {

    // env variable doesn't show up for some reason.
    let apiUrl = 'http://localhost:5000/api/book';

    fetch(apiUrl)
      .then(result => result.json())
      .then(result => {
          this.setState({
              data: result
          })
    });

  }
  render() {  
        console.log('This is API data', this.state.data);
        return (
            
            <div>
                <h1> Books Catalog </h1>
                <Table book= {this.state.data}></Table>
            </div>

        
        )
  }
}
export default App;