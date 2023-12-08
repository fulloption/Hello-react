import React, { Component } from 'react';
import axios from 'axios'; // Assuming you have Axios installed

class ApiExample extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    // You can replace the URL with your API endpoint
    axios.get('https://dog.ceo/api/breeds/image/random55')
      .then((response) => {
        this.setState({
          data: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error : error,
          loading: false,
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;
    
    if (loading) {
      return <p>Loading data...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return (
      <div>
        <h1>API Data</h1>
        <pre>{JSON.stringify(data.status, null, 2)}</pre>
        <img
        src={data.message} // Replace with the actual image URL
        alt="Image from API"
        width={300} // Set the desired width (in pixels)
        height={200} // Set the desired height (in pixels)
      />
      </div>
    );
  }
}
export default ApiExample;
