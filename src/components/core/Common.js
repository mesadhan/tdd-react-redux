import React, { Component } from 'react';

class Common extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div data-test="aboutComponent">
                <h1>Hello From Common Page</h1>
            </div>

        );
    }
}

export default Common;
