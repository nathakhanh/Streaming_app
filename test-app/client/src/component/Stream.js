import React, { Component } from 'react';
import styled from 'styled-components';

const StreamBox = styled.div`
    width: 750px;
    height: 550px;
    border-width: 2px;
    border-style: solid;
    margin-top: 10px;
    background-color: grey;
`

class Stream extends Component {
    render() {
        return (
            <div>
                <h2>Stream</h2>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <StreamBox><video autoplay="true" id="videoElement" ></video></StreamBox>
            </div>
        );
    }

    start = () => {
        console.log("Start streaming....");

    }

    stop = () => {
        console.log("Start streaming....");
    }
}

export default Stream;