import React, { Component } from 'react';

class About extends Component {

    render() {
        document.title = "About";

        return (
            <div data-test="aboutComponent">
                <h1>Hello From About Page</h1>
            </div>

        );
    }
}

export default About;
