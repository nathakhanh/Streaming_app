import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <Link to="/stream"><button>Stream Now</button></Link>
                <Link to="/about"><button>About</button></Link>
            </div>
        );
    }
}

export default Home;